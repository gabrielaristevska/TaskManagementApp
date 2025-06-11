package com.tasks.taskmanager.dto;

import com.tasks.taskmanager.domain.enumerations.TaskCategory;
import com.tasks.taskmanager.domain.enumerations.TaskPriority;
import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.models.Task;
import com.tasks.taskmanager.domain.models.User;

import java.time.LocalDateTime;

public record CreateTaskDto(String name, LocalDateTime dueDate, TaskCategory category, TaskPriority priority,
                            TaskStatus status) {

    public Task fromDtoToTask(User user) {
        return new Task(name, dueDate, category, priority, status, user);
    }

}
