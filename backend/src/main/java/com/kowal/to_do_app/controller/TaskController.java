package com.kowal.to_do_app.controller;

import com.kowal.to_do_app.model.Task;
import com.kowal.to_do_app.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/task")
    public Task newTask(@RequestBody Task newTask) {
        return taskService.saveTask(newTask);
    }

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PutMapping("/tasks/{id}/status")
    public void updateTaskStatus(@PathVariable Long id, @RequestBody Boolean status) {
        taskService.updateTaskStatus(id, status);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.deleteTask(id);
    }
}
