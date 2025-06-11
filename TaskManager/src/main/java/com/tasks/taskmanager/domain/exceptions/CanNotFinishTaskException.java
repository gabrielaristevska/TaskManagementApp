package com.tasks.taskmanager.domain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CanNotFinishTaskException extends RuntimeException {
    public CanNotFinishTaskException(Long id) {
        super(String.format("Task with id %d is not started or already finished!", id));
    }
}
