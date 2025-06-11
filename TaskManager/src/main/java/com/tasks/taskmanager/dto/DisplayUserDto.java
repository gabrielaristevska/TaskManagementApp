package com.tasks.taskmanager.dto;

import com.tasks.taskmanager.domain.enumerations.Role;
import com.tasks.taskmanager.domain.models.User;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayUserDto(String username, String name, String surname, Role role) {

    public static DisplayUserDto fromUserToDto(User user) {
        return new DisplayUserDto(
                user.getUsername(),
                user.getName(),
                user.getSurname(),
                user.getRole()
        );
    }

    public static List<DisplayUserDto> fromUserToDtoList(List<User> users){
        return users.stream().map(DisplayUserDto::fromUserToDto).collect(Collectors.toList());
    }

}
