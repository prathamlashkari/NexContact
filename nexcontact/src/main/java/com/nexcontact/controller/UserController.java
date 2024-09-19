package com.nexcontact.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

  @GetMapping("/")
  public ResponseEntity<String> home() {
    return new ResponseEntity<>("Welcome to our app", HttpStatus.OK);
  }

}
