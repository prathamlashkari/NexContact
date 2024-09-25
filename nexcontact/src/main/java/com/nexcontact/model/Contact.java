package com.nexcontact.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Contact")
public class Contact {

  @Id
  private String id;
  private String userId;
  private String name;
  private String email;
  private String phoneNumber;
  private String address;
  private String profileImage;
  private String description;
  private String weblinks1;
  private String weblinks2;
  private boolean favorite = false;
}
