import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/task-create.dto';
import { UpdateTaskDto } from './dto/task-update.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    CreateTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    GetTasks(): Promise<Task[]>;
    TaskShow(id: number): Promise<Task>;
    UpdateTask(id: number, updateTaskDto: UpdateTaskDto, user: User): Promise<Task>;
    DeleteTask(id: number, user: User): Promise<void>;
}
