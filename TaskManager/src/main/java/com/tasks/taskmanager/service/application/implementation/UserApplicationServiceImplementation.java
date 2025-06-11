package com.tasks.taskmanager.service.application.implementation;

import com.tasks.taskmanager.domain.exceptions.UserNotFoundException;
import com.tasks.taskmanager.domain.models.User;
import com.tasks.taskmanager.dto.CreateUserDto;
import com.tasks.taskmanager.dto.DisplayUserDto;
import com.tasks.taskmanager.dto.LoginResponseDto;
import com.tasks.taskmanager.dto.LoginUserDto;
import com.tasks.taskmanager.helpers.JwtHelper;
import com.tasks.taskmanager.service.application.interfaces.UserApplicationService;
import com.tasks.taskmanager.service.domain.interfaces.UserService;
import org.springframework.stereotype.Service;


@Service
public class UserApplicationServiceImplementation implements UserApplicationService {
    private final UserService userService;
    private final JwtHelper jwtHelper;

    public UserApplicationServiceImplementation(UserService userService, JwtHelper jwtHelper) {
        this.userService = userService;
        this.jwtHelper = jwtHelper;
    }

    @Override
    public DisplayUserDto register(CreateUserDto createUserDto) {
        User user = userService.register(createUserDto.username(), createUserDto.password(), createUserDto.repeatPassword(),
                createUserDto.name(), createUserDto.surname(), createUserDto.role());
        return DisplayUserDto.fromUserToDto(user);
    }

    @Override
    public LoginResponseDto login(LoginUserDto loginUserDto) {
        User user = userService.login(loginUserDto.username(), loginUserDto.password());
        String token=jwtHelper.generateToken(user);
        return new LoginResponseDto(token);
    }

    @Override
    public DisplayUserDto findByUsername(String username) {
        User user = userService.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username));
        return DisplayUserDto.fromUserToDto(user);
    }
}
