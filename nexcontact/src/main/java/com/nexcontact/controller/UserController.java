package com.nexcontact.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexcontact.request.ContactRequest;
import com.nexcontact.response.MessageResponse;

@RestController
@RequestMapping("/api/user")
public class UserController {

  @GetMapping("/")
  public ResponseEntity<String> home() {
    return new ResponseEntity<>("Welcome to our app", HttpStatus.OK);
  }

  @PostMapping("/add-contact")
  public ResponseEntity<MessageResponse> addContact(@RequestBody ContactRequest req) throws Exception {
    throw new Exception("Unable to add contact");
  }

}
