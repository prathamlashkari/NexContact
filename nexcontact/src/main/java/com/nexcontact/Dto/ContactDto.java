package com.nexcontact.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDto {

  private String id;
  private String name;
  private String email;
  private String profileImage;
  private String phone;
  private String link;
}
