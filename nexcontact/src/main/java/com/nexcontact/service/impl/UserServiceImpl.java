package com.nexcontact.service.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexcontact.config.JwtProvider;
import com.nexcontact.enums.Role;
import com.nexcontact.exceptions.ResourceNotFound;
import com.nexcontact.model.User;
import com.nexcontact.repository.UserRepository;
import com.nexcontact.service.UserService;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtProvider jwtProvider;

  private Logger logger = LoggerFactory.getLogger(this.getClass());

  @Override
  public User saveUser(User user) {
    user.getRoles().add(Role.ROLE_USER);
    return userRepository.save(user);
  }

  @Override
  public Optional<User> getUserById(String id) {
    return userRepository.findById(id);
  }

  @Override
  public User updateUser(User req) throws ResourceNotFound {
    User user = userRepository.findById(req.getId()).orElseThrow(() -> new ResourceNotFound("User not found"));
    user.setName(req.getName());
    user.setEmail(req.getEmail());
    user.setPassword(req.getPassword());
    user.setAbout(req.getAbout());
    user.setPhoneNumber(req.getPhoneNumber());
    user.setProfilePic(req.getProfilePic());
    user.setEnable(req.isEnable());
    user.setEmailVerified(req.isEmailVerified());
    user.setPhoneVerified(req.isPhoneVerified());
    user.setProvider(req.getProvider());
    user.setProviderUserid(req.getProviderUserid());
    User savedUser = userRepository.save(user);
    logger.info("update user ");
    return savedUser;
  }

  @Override
  public void deleteUser(String id) {
    User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFound("User not found"));
    userRepository.delete(user);
  }

  @Override
  public boolean isUserExist(String id) {
    User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFound("User not found"));
    return user != null;
  }

  @Override
  public boolean isUserExistByEmail(String email) {
    User user = userRepository.findByEmail(email);
    return user != null;
  }

  @Override
  public List<User> getAllUser() {
    return userRepository.findAll();
  }

  @Override
  public User getUserByEmail(String jwt) throws Exception {
    String email = jwtProvider.getEmailFromToken(jwt);
    User user = userRepository.findByEmail(email);
    if (user == null) {
      throw new Exception("Unable to find user");
    }
    return user;
  }

}
