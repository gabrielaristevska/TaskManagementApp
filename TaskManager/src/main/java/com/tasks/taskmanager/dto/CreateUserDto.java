package com.tasks.taskmanager.dto;

import com.tasks.taskmanager.domain.enumerations.Role;
import com.tasks.taskmanager.domain.models.User;

public record CreateUserDto(String username, String password, String repeatPassword, String name, String surname, Role role) {

    public User fromDtoToUser(){
        return new User(username, password, name, surname, role);
    }

}
