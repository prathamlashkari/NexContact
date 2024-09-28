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

  @Override
  public String updateContact(ContactRequest req, String contactId) throws Exception {
    try {
      Optional<Contact> existingContactOptional = contactRepository.findById(contactId);
      if (!existingContactOptional.isPresent()) {
        throw new Exception("Contact not found with ID: " + contactId);
      }
      Contact existingContact = existingContactOptional.get();
      // Update fields only if they are not null
      if (req.getName() != null) {
        existingContact.setName(req.getName());
      }
      if (req.getEmail() != null) {
        existingContact.setEmail(req.getEmail());
      }
      if (req.getNumber() != null) {
        existingContact.setNumber(req.getNumber());
      }
      if (req.getAddress() != null) {
        existingContact.setAddress(req.getAddress());
      }
      if (req.getProfileImage() != null) {
        existingContact.setProfileImage(req.getProfileImage());
      }
      if (req.getDescription() != null) {
        existingContact.setDescription(req.getDescription());
      }
      if (req.getSocialLink1() != null) {
        existingContact.setSocialLink1(req.getSocialLink1());
      }
      if (req.getSocialLink2() != null) {
        existingContact.setSocialLink2(req.getSocialLink2());
      }
      contactRepository.save(existingContact);

      return "Contact updated successfully";
    } catch (Exception e) {
      throw new Exception("Unable to update contact: " + e.getMessage());
    }
  }

}
