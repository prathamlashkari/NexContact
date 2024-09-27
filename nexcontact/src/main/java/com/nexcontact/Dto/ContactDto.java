package com.nexcontact.Dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ContactDto {

  private String id;
  private String name;
  private String profileImage;
  private String phone;
  private String link;
}
