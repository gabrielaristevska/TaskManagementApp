package com.tasks.taskmanager.service.application.interfaces;

import com.tasks.taskmanager.dto.CreateUserDto;
import com.tasks.taskmanager.dto.DisplayUserDto;
import com.tasks.taskmanager.dto.LoginResponseDto;
import com.tasks.taskmanager.dto.LoginUserDto;


public interface UserApplicationService {
    DisplayUserDto register(CreateUserDto createUserDto);

    LoginResponseDto login(LoginUserDto loginUserDto);

    DisplayUserDto findByUsername(String username);

}
