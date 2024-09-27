package com.nexcontact.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nexcontact.model.Contact;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {

  public Contact findByEmail(String email);

  public List<Contact> findByUserId(String userId);
}
