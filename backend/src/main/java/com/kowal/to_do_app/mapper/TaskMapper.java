package com.kowal.to_do_app.mapper;

import com.kowal.to_do_app.dto.ShowTaskDto;
import com.kowal.to_do_app.model.Task;

public class TaskMapper {
    public static void showDtoFromEntity(ShowTaskDto dto, Task task) {
        if (dto == null || task == null) {
            return;
        }
        dto.setStatus(task.isStatus());
        dto.setDescription(task.getDescription());
        dto.setType(task.getType());
    }
}
