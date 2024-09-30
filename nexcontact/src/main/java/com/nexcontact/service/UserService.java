package com.nexcontact.service;

import com.nexcontact.exceptions.ResourceNotFound;
import com.nexcontact.model.User;

import java.util.*;

public interface UserService {

  public User saveUser(User user);

  public User getUserByEmail(String email) throws Exception;

  public Optional<User> getUserById(String id) throws Exception;

  public User updateUser(User user) throws ResourceNotFound;

  public void deleteUser(String id) throws Exception;

  boolean isUserExist(String userId) throws Exception;

  boolean isUserExistByEmail(String email) throws Exception;

  public List<User> getAllUser() throws Exception;
}
