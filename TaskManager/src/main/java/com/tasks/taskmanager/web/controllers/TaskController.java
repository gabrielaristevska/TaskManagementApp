package com.tasks.taskmanager.web.controllers;

import com.tasks.taskmanager.domain.enumerations.TaskStatus;
import com.tasks.taskmanager.domain.models.User;
import com.tasks.taskmanager.dto.CreateTaskDto;
import com.tasks.taskmanager.dto.DisplayTaskDto;
import com.tasks.taskmanager.service.application.interfaces.TaskApplicationService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskApplicationService taskApplicationService;

    public TaskController(TaskApplicationService taskApplicationService) {
        this.taskApplicationService = taskApplicationService;
    }

    @GetMapping
    public ResponseEntity<Page<DisplayTaskDto>> findAll(@RequestParam(required = false) TaskStatus status,
                                                        @RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "5") int size,
                                                        @RequestParam(defaultValue = "id") String sortBy,
                                                        @RequestParam(defaultValue = "asc") String sortDir,
                                                        @AuthenticationPrincipal User user) {
        Sort sort = sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        if (status != null) {
            return ResponseEntity.ok(taskApplicationService.findAllByStatus(status, user.getUsername(), pageable));
        }
        return ResponseEntity.ok(taskApplicationService.findAll(user.getUsername(), pageable));
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<DisplayTaskDto> details(@PathVariable(name = "id") Long taskId) {
        return ResponseEntity.ok(taskApplicationService.findById(taskId));
    }

    @PostMapping("/create")
    public ResponseEntity<DisplayTaskDto> create(@RequestBody CreateTaskDto createTaskDto,
                                                 @AuthenticationPrincipal User user) {
        return ResponseEntity.ok(taskApplicationService.create(createTaskDto, user.getUsername()));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DisplayTaskDto> update(@PathVariable(name = "id") Long taskId,
                                                 @RequestBody CreateTaskDto createTaskDto,
                                                 @AuthenticationPrincipal User user) {
        return ResponseEntity.ok(taskApplicationService.update(taskId, createTaskDto, user.getUsername()));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable(name = "id") Long taskId) {
        taskApplicationService.deleteById(taskId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/start/{id}")
    public ResponseEntity<DisplayTaskDto> start(@PathVariable(name = "id") Long taskId){
        return ResponseEntity.ok(taskApplicationService.start(taskId));
    }

    @PutMapping("/finish/{id}")
    public ResponseEntity<DisplayTaskDto> finish(@PathVariable(name = "id") Long taskId){
        return ResponseEntity.ok(taskApplicationService.finish(taskId));
    }
}
