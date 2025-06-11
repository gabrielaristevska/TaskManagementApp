package com.tasks.taskmanager.service.application.implementation;

import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.exceptions.TaskNotFoundException;
import com.tasks.taskmanager.domain.exceptions.UserNotFoundException;
import com.tasks.taskmanager.domain.models.Task;
import com.tasks.taskmanager.domain.models.User;
import com.tasks.taskmanager.dto.CreateTaskDto;
import com.tasks.taskmanager.dto.DisplayTaskDto;
import com.tasks.taskmanager.service.application.interfaces.TaskApplicationService;
import com.tasks.taskmanager.service.domain.interfaces.TaskService;
import com.tasks.taskmanager.service.domain.interfaces.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class TaskApplicationServiceImplementation implements TaskApplicationService {
    private final TaskService taskService;
    private final UserService userService;

    public TaskApplicationServiceImplementation(TaskService taskService, UserService userService) {
        this.taskService = taskService;
        this.userService = userService;
    }

    @Override
    public Page<DisplayTaskDto> findAll(String username, Pageable pageable) {
        return DisplayTaskDto.fromTaskToDtoList(taskService.findAll(username, pageable));
    }

    @Override
    public DisplayTaskDto findById(Long id) {
        Task task = taskService.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        return DisplayTaskDto.fromTaskToDto(task);
    }

    @Override
    public DisplayTaskDto create(CreateTaskDto createTaskDto, String username) {
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        return DisplayTaskDto.fromTaskToDto(taskService.create(createTaskDto.fromDtoToTask(user)));
    }

    @Override
    public DisplayTaskDto update(Long id, CreateTaskDto createTaskDto, String username) {
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        return DisplayTaskDto.fromTaskToDto(taskService.update(id, createTaskDto.fromDtoToTask(user)));
    }

    @Override
    public void deleteById(Long id) {
        taskService.deleteById(id);
    }

    @Override
    public Page<DisplayTaskDto> findAllByStatus(TaskStatus status, String username, Pageable pageable) {
        return DisplayTaskDto.fromTaskToDtoList(taskService.findAllByStatus(status, username, pageable));
    }

    @Override
    public DisplayTaskDto start(Long id) {
        return DisplayTaskDto.fromTaskToDto(taskService.start(id));
    }

    @Override
    public DisplayTaskDto finish(Long id) {
        return DisplayTaskDto.fromTaskToDto(taskService.finish(id));
    }
}
