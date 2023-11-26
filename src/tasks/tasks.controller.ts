import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { TasksService } from './tasks.service'
import { createTaskDTO, updateTaskDTO } from './dto/task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get()
    getAllTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(@Body() newTask: createTaskDTO) {
        return this.taskService.createTask({ title: newTask.title,
             description: newTask.description })
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string){
        this.taskService.deleteTask(id)
    }

    @Put()
    uptadeTask(@Body() task: Task){
        return this.taskService.updateTask({id:task.id,
            title:task.title,
            description: task.description,
            status: task.status    
        })
    }

    @Patch(':id')
    patchTask(@Param("id") id: string , @Body() updatedFields: updateTaskDTO){
        return this.taskService.updateTask({id:id,
            title:updatedFields.title,
            description: updatedFields.description,
            status: updatedFields.status    
        })
    }


}
