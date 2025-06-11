package com.tasks.taskmanager.service.domain.interfaces;

import com.tasks.taskmanager.domain.enumerations.Role;
import com.tasks.taskmanager.domain.models.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;


public interface UserService extends UserDetailsService {
    User register(String username, String password, String repeatPassword, String name, String surname, Role role);

    User login(String username, String password);

    Optional<User> findByUsername(String username);
}
