package com.nexcontact.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document(collection = "Contact")
public class Contact {

  @Id
  private String id;
  private String userId;
  private String name;
  private String email;
  private String number;
  private String address;
  private String profileImage;
  private String description;
  private String socialLink1;
  private String socialLink2;
}
