import {IsString, IsNotEmpty, MinLength} from "class-validator"
import { Task } from "../task.entity"

export class createTaskDTO{
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    title: string;

    @MinLength(30)
    @IsNotEmpty()
    @IsString()
    description: string;
}

export type updateTaskDTO = Omit<Task,'id'>


