package com.tasks.taskmanager.service.domain.implementation;

import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.exceptions.CanNotFinishTaskException;
import com.tasks.taskmanager.domain.exceptions.CanNotStartTaskException;
import com.tasks.taskmanager.domain.exceptions.TaskNotFoundException;
import com.tasks.taskmanager.domain.exceptions.UserNotFoundException;
import com.tasks.taskmanager.domain.models.Task;
import com.tasks.taskmanager.domain.models.User;
import com.tasks.taskmanager.repository.TaskRepository;
import com.tasks.taskmanager.service.domain.interfaces.TaskService;
import com.tasks.taskmanager.service.domain.interfaces.UserService;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TaskServiceImplementation implements TaskService {
    private final TaskRepository taskRepository;
    private final UserService userService;

    public TaskServiceImplementation(TaskRepository taskRepository, UserService userService) {
        this.taskRepository = taskRepository;
        this.userService = userService;
    }

    @Override
    public Page<Task> findAll(String username, Pageable pageable) {
        User user = userService.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username));
        return taskRepository.findAllByUser(user, pageable);
    }

    @Override
    public Optional<Task> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Task create(Task task) {
        return taskRepository.save(task);
    }

    @Transactional
    @Override
    public Task update(Long id, Task task) {
        Task existing = findById(id).orElseThrow(() -> new TaskNotFoundException(id));

        if (task.getName() != null) {
            existing.setName(task.getName());
        }
        if (task.getDueDate() != null) {
            existing.setDueDate(task.getDueDate());
        }
        if (task.getCategory() != null) {
            existing.setCategory(task.getCategory());
        }
        if (task.getStatus() != null) {
            existing.setStatus(task.getStatus());
        }
        if (task.getPriority() != null) {
            existing.setPriority(task.getPriority());
        }
        if (task.getUser() != null) {
            userService.findByUsername(task.getUser().getUsername())
                    .ifPresent(existing::setUser);
        }
        return existing;
    }

    @Override
    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }

    @Override
    public Page<Task> findAllByStatus(TaskStatus status, String username, Pageable pageable) {
        User user = userService.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username));
        return taskRepository.findAllByStatusAndUser(status, user, pageable);
    }

    @Override
    @Transactional
    public Task start(Long id) {
        Task task = findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        if (task.getStatus() != TaskStatus.NOT_STARTED) {
            throw new CanNotStartTaskException(id);
        }
        task.setStatus(TaskStatus.STARTED);
        return task;
    }

    @Override
    @Transactional
    public Task finish(Long id) {
        Task task = findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        if (task.getStatus() != TaskStatus.STARTED) {
            throw new CanNotFinishTaskException(id);
        }
        task.setStatus(TaskStatus.FINISHED);
        return task;
    }
}
