package com.tasks.taskmanager.service.application.interfaces;

import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.dto.CreateTaskDto;
import com.tasks.taskmanager.dto.DisplayTaskDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface TaskApplicationService {
    Page<DisplayTaskDto> findAll(String username, Pageable pageable);

    DisplayTaskDto findById(Long id);

    DisplayTaskDto create(CreateTaskDto createTaskDto, String username);

    DisplayTaskDto update(Long id, CreateTaskDto createTaskDto, String username);

    void deleteById(Long id);

    Page<DisplayTaskDto> findAllByStatus(TaskStatus status, String username, Pageable pageable);

    DisplayTaskDto start(Long id);

    DisplayTaskDto finish(Long id);
}
