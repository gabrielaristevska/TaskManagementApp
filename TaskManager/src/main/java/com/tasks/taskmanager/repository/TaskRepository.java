package com.tasks.taskmanager.repository;

import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.models.Task;
import com.tasks.taskmanager.domain.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Page<Task> findAllByUser(User user, Pageable pageable);

    Page<Task> findAllByStatusAndUser(TaskStatus status, User user, Pageable pageable);
}
