package com.nexcontact.service;

import com.nexcontact.model.User;

import java.util.*;

public interface UserService {

  public User saveUser(User user);

  public Optional<User> getUserById(String id);

  public User updateUser(User user);

  public void deleteUser(String id);

  boolean isUserExist(String userId);

  boolean isUserExistByEmail(String email);

  public List<User> getAllUser();
}