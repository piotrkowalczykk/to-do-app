package com.kowal.to_do_app.controller;

import com.kowal.to_do_app.model.Task;
import com.kowal.to_do_app.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/task")
    public Task newTask(@RequestBody Task newTask){
        return taskService.saveTask(newTask);
    }

    @GetMapping("/tasks")
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }



}
