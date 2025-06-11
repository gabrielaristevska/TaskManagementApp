package com.tasks.taskmanager.dto;

import com.tasks.taskmanager.domain.enumerations.TaskCategory;
import com.tasks.taskmanager.domain.enumerations.TaskPriority;
import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.models.Task;

import java.time.LocalDateTime;
import org.springframework.data.domain.Page;

public record DisplayTaskDto(Long id, String name, LocalDateTime dueDate, TaskCategory category, TaskPriority priority,
                             TaskStatus status, DisplayUserDto userDto) {

    public static DisplayTaskDto fromTaskToDto(Task task) {
        return new DisplayTaskDto(
                task.getId(),
                task.getName(),
                task.getDueDate(),
                task.getCategory(),
                task.getPriority(),
                task.getStatus(),
                DisplayUserDto.fromUserToDto(task.getUser()));
    }

    public static Page<DisplayTaskDto> fromTaskToDtoList(Page<Task> tasksPage) {
        return tasksPage.map(DisplayTaskDto::fromTaskToDto);
    }

}
