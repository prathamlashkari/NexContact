package com.nexcontact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexcontact.config.SecurityCustomUserDetailService;
import com.nexcontact.model.User;
import com.nexcontact.repository.UserRepository;
import com.nexcontact.request.LoginRequest;
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

  @PostMapping("/login")
  public ResponseEntity<AuthResponse> login(LoginRequest req) throws Exception {

    User user = userRepository.findByEmail(req.getEmail());
    if (user == null) {
      throw new Exception("User not found with this email");
    }
    Authentication authentication = authenticate(req.getEmail(), req.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);
  }

  private Authentication authenticate(String email, String password) throws Exception {
    UserDetails userDetails = securityCustomUserDetailService.loadUserByUsername(email);
    if (userDetails == null) {
      throw new Exception("Inavlid User email");
    }
    System.out.println("USer passrwod" + userDetails.getPassword());
    System.out.println("USer raw passrwod" + password);
    if (!passwordEncoder.matches(password, userDetails.getPassword())) {
      throw new Exception("Inavlid User password");
    }
    return new UsernamePasswordAuthenticationToken(email, null,
        userDetails.getAuthorities());
  }
}
