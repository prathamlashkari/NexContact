package com.nexcontact.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nexcontact.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

  public User findByEmail(String email);
}
