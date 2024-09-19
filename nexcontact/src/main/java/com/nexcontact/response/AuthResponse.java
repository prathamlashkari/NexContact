package com.nexcontact.response;

import com.nexcontact.enums.Role;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthResponse {

  private String jwt;
  private String message;
  private Role role;

}
