import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity'
import { createTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTask() : Task[]{
        return  this.tasks;
    }

    createTask({title,description}:createTaskDTO) : Task{

        const task : Task = {
            id: new Date().toISOString(),
            title:title,
            description:description,
            status : TaskStatus.PENDING
        } ;
        
        this.tasks.push(task)
        return task;
    }

    deleteTask(id: string): void{
        this.tasks = this.tasks.filter(task => task.id !== id)
    }


    updateTask({id,title,description,status}: Task){
        this.tasks = this.tasks.filter(task => task.id !== id)
        const task : Task = {
            id: id,
            title:title,
            description:description,
            status : status
        } ;
        this.tasks.push(task);
        return task;
    }
}