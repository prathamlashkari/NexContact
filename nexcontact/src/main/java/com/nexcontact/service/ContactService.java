package com.nexcontact.service;

import java.util.List;

import com.nexcontact.Dto.ContactDto;
import com.nexcontact.model.Contact;
import com.nexcontact.request.ContactRequest;

public interface ContactService {
  public String addContact(ContactRequest req, String jwt) throws Exception;

  public List<ContactDto> getAllUserContacts(String jwt) throws Exception;

  public Contact findByUserId(String userId) throws Exception;
}
