package com.nexcontact.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

import java.util.*;

@Data
@Document(collection = "Contact")
public class Contact {

  @Id
  private String id;
  private String name;
  private String email;
  private String phoneNumber;
  private String address;
  private String description;
  private boolean favorite = false;

  private List<String> socialLinks = new ArrayList<>();
}
