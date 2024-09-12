package com.nexcontact.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nexcontact.enums.Role;
import com.nexcontact.model.User;
import com.nexcontact.repository.UserRepository;

@Service
public class SecurityCustomUserDetailService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    User user = userRepository.findByEmail(email);

    if (user == null) {
      throw new UsernameNotFoundException("User with this email is not present");
    }
    List<GrantedAuthority> authorities = new ArrayList<>();
    for (Role role : user.getRoles()) {
      authorities.add(new SimpleGrantedAuthority(role.name()));
    }
    return new org.springframework.security.core.userdetails.User(
        user.getEmail(),
        user.getPassword(),
        authorities);
  }
}
