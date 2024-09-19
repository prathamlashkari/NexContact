package com.nexcontact.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexcontact.config.JwtProvider;
import com.nexcontact.config.SecurityCustomUserDetailService;
import com.nexcontact.enums.Role;
import com.nexcontact.model.User;
import com.nexcontact.repository.UserRepository;
import com.nexcontact.request.LoginRequest;
import com.nexcontact.request.SignupRequest;
import com.nexcontact.response.AuthResponse;

@RestController
@RequestMapping("")
public class AuthController {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private SecurityCustomUserDetailService securityCustomUserDetailService;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JwtProvider jwtProvider;

  @PostMapping("/login")
  public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest req) throws Exception {

    User user = userRepository.findByEmail(req.getEmail());
    if (user == null) {
      throw new Exception("User not found with this email");
    }
    Authentication authentication = authenticate(req.getEmail(), req.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtProvider.generateToken(authentication);

    AuthResponse authResponse = new AuthResponse();
    authResponse.setJwt(jwt);
    authResponse.setMessage("Login successfully");
    authResponse.setRole(Role.ROLE_USER);
    return new ResponseEntity<>(authResponse, HttpStatus.OK);
  }

  private Authentication authenticate(String email, String password) throws Exception {
    UserDetails userDetails = securityCustomUserDetailService.loadUserByUsername(email);
    if (userDetails == null) {
      throw new Exception("Inavlid User email");
    }
    if (!passwordEncoder.matches(password, userDetails.getPassword())) {
      throw new Exception("Inavlid User password");
    }
    return new UsernamePasswordAuthenticationToken(email, null,
        userDetails.getAuthorities());
  }

  @PostMapping("/signup")
  public ResponseEntity<AuthResponse> signup(@RequestBody SignupRequest req) throws Exception {

    User user = userRepository.findByEmail(req.getEmail());
    if (user != null) {
      throw new Exception("User already exist with this email");
    }
    User createUser = new User();
    createUser.setName(req.getUsername());
    createUser.setEmail(req.getEmail());
    createUser.setPassword(passwordEncoder.encode(req.getPassword()));
    createUser.setPhoneNumber(req.getPhoneNumber());
    createUser.setAbout(req.getAbout());
    createUser.setRoles(Arrays.asList(Role.ROLE_USER));
    createUser.setEnable(true);

    userRepository.save(createUser);
    List<GrantedAuthority> authorities = createUser.getRoles().stream()
        .map(role -> new SimpleGrantedAuthority(role.name()))
        .collect(Collectors.toList());

    Authentication authentication = new UsernamePasswordAuthenticationToken(createUser.getEmail(), null, authorities);
    String jwt = jwtProvider.generateToken(authentication);

    AuthResponse authResponse = new AuthResponse();
    authResponse.setJwt(jwt);
    authResponse.setMessage("Successfully signed up");
    authResponse.setRole(createUser.getRoles().get(0));

    return new ResponseEntity<>(authResponse, HttpStatus.OK);
  }

}
