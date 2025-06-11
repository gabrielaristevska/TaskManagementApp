package com.tasks.taskmanager.domain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CanNotStartTaskException extends RuntimeException {
    public CanNotStartTaskException(Long id) {
        super(String.format("Task with id %d is already started or finished!", id));
    }
}
