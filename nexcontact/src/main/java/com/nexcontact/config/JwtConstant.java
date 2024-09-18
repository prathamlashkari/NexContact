package com.nexcontact.config;

import javax.crypto.SecretKey;

import io.jsonwebtoken.security.Keys;

public class JwtConstant {
  public static final String SECRET_KEY = "qpoiernasdkfnswqervqwerpwijrsdflkjvpoiwerncmnsdfjwoieqredhrt45re";
  public static final String JWT_HEADER = "Authorization";
  public static final SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
}
