package com.nexcontact.service.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.nexcontact.model.User;
import com.nexcontact.repository.UserRepository;
import com.nexcontact.service.UserService;

public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  private Logger logger = LoggerFactory.getLogger(this.getClass());

  @Override
  public User saveUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public Optional<User> getUserById(String id) {
    return userRepository.findById(id);
  }

  @Override
  public User updateUser(User user) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
  }

  @Override
  public void deleteUser(String id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
  }

  @Override
  public boolean isUserExist(String userId) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'isUserExist'");
  }

  @Override
  public boolean isUserExistByEmail(String email) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'isUserExistByEmail'");
  }

  @Override
  public List<User> getAllUser() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAllUser'");
  }

}
