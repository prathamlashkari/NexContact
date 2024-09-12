package com.nexcontact.exceptions;

public class ResourceNotFound extends RuntimeException {

  public ResourceNotFound(String msg) {
    super(msg);
  }

  public ResourceNotFound() {
    super("Resource not found");
  }

}
