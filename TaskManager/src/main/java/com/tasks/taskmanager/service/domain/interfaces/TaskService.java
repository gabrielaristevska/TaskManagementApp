package com.tasks.taskmanager.service.domain.interfaces;

import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.models.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface TaskService {
    Page<Task> findAll(String username, Pageable pageable);

    Optional<Task> findById(Long id);

    Task create(Task task);

    Task update(Long id, Task task);

    void deleteById(Long id);

    Page<Task> findAllByStatus(TaskStatus status, String username, Pageable pageable);

    Task start(Long id);

    Task finish(Long id);
}
