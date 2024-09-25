package com.nexcontact.service;

import com.nexcontact.request.ContactRequest;

public interface ContactService {
  public String addContact(ContactRequest req, String jwt) throws Exception;
}
