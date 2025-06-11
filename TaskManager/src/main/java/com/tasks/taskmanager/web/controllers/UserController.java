package com.tasks.taskmanager.web.controllers;

import com.tasks.taskmanager.dto.CreateUserDto;
import com.tasks.taskmanager.dto.DisplayUserDto;
import com.tasks.taskmanager.dto.LoginResponseDto;
import com.tasks.taskmanager.dto.LoginUserDto;
import com.tasks.taskmanager.service.application.interfaces.UserApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserApplicationService userApplicationService;

    public UserController(UserApplicationService userApplicationService) {
        this.userApplicationService = userApplicationService;
    }

    @PostMapping("/register")
    public ResponseEntity<DisplayUserDto> register(@RequestBody CreateUserDto createUserDto){
        return ResponseEntity.ok(userApplicationService.register(createUserDto));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginUserDto loginUserDto){
        return ResponseEntity.ok(userApplicationService.login(loginUserDto));
    }

}
