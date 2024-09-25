package com.nexcontact.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactRequest {

  private String name;
  private String email;
  private String number;
  private String address;
  private String profileImage;
  private String description;
  private String socialLink1;
  private String socialLink2;
}
