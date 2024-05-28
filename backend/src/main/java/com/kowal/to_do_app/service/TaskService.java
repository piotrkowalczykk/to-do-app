package com.kowal.to_do_app.service;

import com.kowal.to_do_app.model.Task;

import java.util.List;

public interface TaskService {
    public Task saveTask(Task task);
    public List<Task> getAllTasks();
    public void updateTaskStatus(Long id, Boolean status);
}
