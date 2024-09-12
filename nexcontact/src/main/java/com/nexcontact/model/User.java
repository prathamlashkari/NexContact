package com.nexcontact.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.nexcontact.enums.Providers;
import com.nexcontact.enums.Role;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;

@Data
@NoArgsConstructor
@Document(collection = "Users")
public class User {

  @Id
  private String id;
  private String name;
  private String email;
  private String password;
  private String about;
  private String profilePic;
  private String phoneNumber;
  private List<Role> roles = new ArrayList<>();
  private boolean enable = false;
  private boolean emailVerified = false;
  private boolean phoneVerified = false;

  private Providers provider = Providers.SELF;
  private String providerUserid;

  private List<String> contacts = new ArrayList<>();
  private List<SocialLinks> socialLinks = new ArrayList<>();
}
