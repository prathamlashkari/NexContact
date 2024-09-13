package com.nexcontact.config;

import java.util.Arrays;
import java.util.Collections;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SercurityFilter {

  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity https) throws Exception {
    https.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    https.csrf(csrf -> csrf.disable());

    https.authorizeHttpRequests(request -> request
        .requestMatchers("/api/user/**").hasAnyRole("USER")
        .anyRequest().permitAll());
    https.cors(cors -> cors.configurationSource(corsConfiguration()));
    https.addFilterBefore(new JwtValidator(), BasicAuthenticationFilter.class);

    return https.build();
  }

  private CorsConfigurationSource corsConfiguration() {
    CorsConfiguration cors = new CorsConfiguration();
    cors.setAllowedHeaders(Collections.singletonList("*"));
    cors.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:5173"));
    cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
    cors.addExposedHeader("Authorization");
    cors.setMaxAge(3600L);
    cors.setAllowCredentials(true);
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", cors);
    return source;
  }
}
