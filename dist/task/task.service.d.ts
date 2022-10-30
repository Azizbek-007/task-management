import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/task-create.dto';
import { UpdateTaskDto } from './dto/task-update.dto';
import { Task } from './task.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getTasks(): Promise<Task[]>;
    CreateTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    ShowTask(id: number): Promise<Task>;
    UpdateTask(id: number, updateTaskDto: UpdateTaskDto, user: User): Promise<Task>;
    DestoryTask(id: number, user: User): Promise<void>;
}
