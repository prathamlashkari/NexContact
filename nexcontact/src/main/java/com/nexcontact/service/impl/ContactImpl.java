package com.nexcontact.service.impl;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexcontact.Dto.ContactDto;
import com.nexcontact.config.JwtProvider;
import com.nexcontact.model.Contact;
import com.nexcontact.model.User;
import com.nexcontact.repository.ContactRepository;
import com.nexcontact.repository.UserRepository;
import com.nexcontact.request.ContactRequest;
import com.nexcontact.service.ContactService;

@Service
public class ContactImpl implements ContactService {

  @Autowired
  private ContactRepository contactRepository;

  @Autowired
  private JwtProvider jwtProvider;

  @Autowired
  private UserRepository userRepository;

  @Override
  public String addContact(ContactRequest req, String jwt) throws Exception {

    Contact contact = contactRepository.findByEmail(req.getEmail());
    if (contact != null) {
      throw new Exception("Contact Already exist with this email");
    }
    String email = jwtProvider.getEmailFromToken(jwt);
    User user = userRepository.findByEmail(email);
    Contact createContact = new Contact(
        null,
        user.getId(),
        req.getName(),
        req.getEmail(),
        req.getNumber(),
        req.getAddress(),
        req.getProfileImage(),
        req.getDescription(),
        req.getSocialLink1(),
        req.getSocialLink2());
    Contact savedContact = contactRepository.save(createContact);
    user.getContacts().add(savedContact.getId());
    userRepository.save(user);
    return "Contact Saved succesfully";
  }

  @Override
  public List<ContactDto> getAllUserContacts(String jwt) throws Exception {
    String email = jwtProvider.getEmailFromToken(jwt);
    User user = userRepository.findByEmail(email);
    List<Contact> contacts = contactRepository.findByUserId(user.getId());

    List<ContactDto> contactDtos = new ArrayList<>();

    for (Contact c : contacts) {
      ContactDto cd = new ContactDto(
          c.getId(),
          c.getName(),
          c.getEmail(),
          c.getProfileImage(),
          c.getNumber(),
          c.getSocialLink1());
      contactDtos.add(cd);
    }
    return contactDtos;
  }

  @Override
  public ContactDto getContactById(String contactId) throws Exception {
    Optional<Contact> contact = contactRepository.findById(contactId);
    if (!contact.isPresent()) {
      throw new Exception("Contact not found with ID: " + contactId);
    }
    Contact c = contact.get();
    ContactDto cd = new ContactDto(
        c.getId(),
        c.getName(),
        c.getEmail(),
        c.getProfileImage(),
        c.getNumber(),
        c.getSocialLink1());
    return cd;
  }

  @Override
  public String deleteContactById(String jwt, String contactId) throws Exception {
    try {
      String email = jwtProvider.getEmailFromToken(jwt);
      User user = userRepository.findByEmail(email);
      Optional<Contact> contact = contactRepository.findById(contactId);
      if (!contact.isPresent()) {
        throw new Exception("Contact not found with ID: " + contactId);
      }
      contactRepository.delete(contact.get());
      user.getContacts().remove(contactId);
      userRepository.save(user);
      return "Contact deleted successfully";
    } catch (Exception e) {
      throw new Exception("Unable to delete contact: " + e.getMessage());
    }
  }

}
