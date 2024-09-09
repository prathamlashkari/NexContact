package com.nexcontact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Home {

  @GetMapping("/homes")
  public String getHome() {
    return "home";
  }
}
