package com.nexcontact.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexcontact.Dto.ContactDto;
import com.nexcontact.model.User;
import com.nexcontact.request.ContactRequest;
import com.nexcontact.response.MessageResponse;
import com.nexcontact.service.ContactService;
import com.nexcontact.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  private ContactService contactService;

  @Autowired
  private UserService userService;

  @GetMapping("/")
  public ResponseEntity<User> getUserByToken(@RequestHeader("Authorization") String jwt) throws Exception {
    User user = userService.getUserByEmail(jwt);
    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @PostMapping("/add-contact")
  public ResponseEntity<MessageResponse> addContact(@RequestBody ContactRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {
    String res = contactService.addContact(req, jwt);
    MessageResponse messageResponse = new MessageResponse(res);
    return new ResponseEntity<>(messageResponse, HttpStatus.CREATED);
  }

  @GetMapping("/contacts")
  public ResponseEntity<List<ContactDto>> getAllUserContacts(@RequestHeader("Authorization") String jwt)
      throws Exception {
    List<ContactDto> res = contactService.getAllUserContacts(jwt);
    return new ResponseEntity<>(res, HttpStatus.OK);
  }

  @GetMapping("/contact/{id}")
  public ResponseEntity<ContactDto> getContactById(@PathVariable String id)
      throws Exception {
    ContactDto res = contactService.getContactById(id);
    return new ResponseEntity<>(res, HttpStatus.OK);
  }

  @DeleteMapping("/contact/{id}")
  public ResponseEntity<MessageResponse> deleteContactById(@RequestHeader("Authorization") String jwt,
      @PathVariable String id)
      throws Exception {
    String str = contactService.deleteContactById(jwt, id);
    MessageResponse res = new MessageResponse(str);
    return new ResponseEntity<>(res, HttpStatus.OK);
  }

  @PutMapping("/contact/{id}")
  public ResponseEntity<MessageResponse> updateContactById(@RequestBody ContactRequest req,
      @PathVariable String id)
      throws Exception {
    String str = contactService.updateContact(req, id);
    MessageResponse res = new MessageResponse(str);
    return new ResponseEntity<>(res, HttpStatus.OK);
  }

}
