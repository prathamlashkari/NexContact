package com.nexcontact.config;

import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtProvider {

  public String generateToken(Authentication auth) {
    String authorities = auth.getAuthorities().stream()
        .map(GrantedAuthority::getAuthority)
        .collect(Collectors.joining(","));

    String jwt = Jwts.builder()
        .setIssuedAt(new Date())
        .setExpiration(new Date(new Date().getTime() + 86400000)) // 1 day
        .claim("email", auth.getName())
        .claim("authorities", authorities)
        .signWith(JwtConstant.key)
        .compact();
    return jwt;
  }

  public String getEmailFromToken(String token) {
    token = token.substring(7);
    Claims claims = Jwts.parserBuilder()
        .setSigningKey(JwtConstant.key)
        .build()
        .parseClaimsJws(token)
        .getBody();
    return String.valueOf(claims.get("email"));
  }

  public Collection<GrantedAuthority> getAuthoritiesFromToken(String token) {
    token = token.substring(7);
    Claims claims = Jwts.parserBuilder()
        .setSigningKey(JwtConstant.key)
        .build()
        .parseClaimsJws(token)
        .getBody();
    String authorities = String.valueOf(claims.get("authorities"));
    return AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
  }
}
