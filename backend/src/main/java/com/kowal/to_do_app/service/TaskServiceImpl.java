package com.kowal.to_do_app.service;

import com.kowal.to_do_app.model.Task;
import com.kowal.to_do_app.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task saveTask(Task task) {
        if (task.getType().equals("Select type") || task.getDescription().isEmpty()) {
            return null;
        } else {
            return taskRepository.save(task);
        }
    }
    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    @Override
    public void updateTaskStatus(Long id, Boolean status) {
        Task task = taskRepository.getOne(id);
        task.setStatus(status);
        taskRepository.save(task);
    }
    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }


}
