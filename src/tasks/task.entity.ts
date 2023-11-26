import {IsString, IsNotEmpty, MinLength,IsOptional,IsIn} from "class-validator"

export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class Task {
    @IsNotEmpty()
    @IsString()
    id: string

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    title: string

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    description: string

    @IsNotEmpty()
    @IsString()
    @IsIn([TaskStatus.IN_PROGRESS,TaskStatus.PENDING,TaskStatus.DONE])
    status: TaskStatus
}