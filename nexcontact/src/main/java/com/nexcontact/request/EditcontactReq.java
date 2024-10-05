package com.nexcontact.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EditcontactReq {

  private String name;
  private String email;
  private String number;
}
