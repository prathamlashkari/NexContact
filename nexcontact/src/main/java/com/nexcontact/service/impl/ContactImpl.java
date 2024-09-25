package com.nexcontact.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.nexcontact.model.Contact;
import com.nexcontact.repository.ContactRepository;
import com.nexcontact.request.ContactRequest;
import com.nexcontact.service.ContactService;

public class ContactImpl implements ContactService {

  @Autowired
  private ContactRepository contactRepository;

  @Override
  public String addContact(ContactRequest req) throws Exception {
    Contact contact = new Contact();
  }

}
