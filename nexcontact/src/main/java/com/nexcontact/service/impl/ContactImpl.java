package com.nexcontact.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    contactRepository.save(createContact);
    return "Contact Saved succesfully";
  }

}
