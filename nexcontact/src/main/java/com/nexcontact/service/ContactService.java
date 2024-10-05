package com.nexcontact.service;

import java.util.List;

import com.nexcontact.Dto.ContactDto;
import com.nexcontact.request.ContactRequest;
import com.nexcontact.request.EditcontactReq;

public interface ContactService {
  public String addContact(ContactRequest req, String jwt) throws Exception;

  public List<ContactDto> getAllUserContacts(String jwt) throws Exception;

  public ContactDto getContactById(String contactId) throws Exception;

  public String deleteContactById(String jwt, String contactId) throws Exception;

  public String updateContact(EditcontactReq req, String contactId) throws Exception;

}
