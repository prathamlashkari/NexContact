package com.nexcontact.model;

import org.springframework.data.mongodb.core.mapping.Document;

import com.nexcontact.enums.Providers;

import lombok.Data;

@Data
@Document(collection = "User")
public class User {

  private String userId;
  private String name;
  private String email;
  private String password;
  private String about;
  private String profilePic;
  private String phoneNumber;

  private boolean enable = false;
  private boolean emailVerified = false;
  private boolean phoneVerified = false;

  private Providers profider = Providers.SELF;
  private String providerUserid;
}
