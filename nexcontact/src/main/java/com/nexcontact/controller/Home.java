package com.nexcontact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Home {

  @GetMapping("/homes")
  public String getHome(Model md) {
    md.addAttribute("name", "vaishali");
    return "home";
  }
}
