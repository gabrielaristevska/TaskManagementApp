package com.tasks.taskmanager.domain.models;

import com.tasks.taskmanager.domain.enumerations.TaskCategory;
import com.tasks.taskmanager.domain.enumerations.TaskPriority;
import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private LocalDateTime dueDate;

    @Enumerated(EnumType.STRING)
    private TaskCategory category;

    @Enumerated(EnumType.STRING)
    private TaskPriority priority;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @ManyToOne
    private User user;

    public Task() {
    }

    public Task(String name, LocalDateTime dueDate, TaskCategory category, TaskPriority priority, TaskStatus status, User user) {
        this.name = name;
        this.dueDate = dueDate;
        this.category = category;
        this.priority = priority;
        this.status = status;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public TaskCategory getCategory() {
        return category;
    }

    public TaskPriority getPriority() {
        return priority;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public User getUser() {
        return user;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public void setCategory(TaskCategory category) {
        this.category = category;
    }

    public void setPriority(TaskPriority priority) {
        this.priority = priority;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
