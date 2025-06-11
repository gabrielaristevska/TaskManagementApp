package com.tasks.taskmanager.web.controllers;

import com.tasks.taskmanager.domain.enumerations.Role;
import com.tasks.taskmanager.domain.enumerations.TaskCategory;
import com.tasks.taskmanager.domain.enumerations.TaskPriority;
import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/enumerations")
public class EnumerationsController {

    @GetMapping("/status")
    public List<String> getAllStatuses(){
        return Arrays.stream(TaskStatus.values()).map(Enum::name).collect(Collectors.toList());
    }

    @GetMapping("/priority")
    public List<String> getAllPriorities(){
        return Arrays.stream(TaskPriority.values()).map(Enum::name).collect(Collectors.toList());
    }

    @GetMapping("/category")
    public List<String> getAllCategories(){
        return Arrays.stream(TaskCategory.values()).map(Enum::name).collect(Collectors.toList());
    }

    @GetMapping("/role")
    public List<String> getAllRoles(){
        return Arrays.stream(Role.values()).map(Enum::name).collect(Collectors.toList());
    }
}
