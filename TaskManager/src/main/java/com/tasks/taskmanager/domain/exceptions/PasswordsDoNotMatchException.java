package com.tasks.taskmanager.domain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PasswordsDoNotMatchException extends RuntimeException{
    public PasswordsDoNotMatchException(){
        super("Passwords do not match!");
    }
}
