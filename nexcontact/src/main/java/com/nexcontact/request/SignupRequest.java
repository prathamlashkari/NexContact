package com.nexcontact.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SignupRequest {
  private String username;
  private String email;
  private String about;
  private String password;
  private String phoneNumber;
}
