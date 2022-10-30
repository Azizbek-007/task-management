import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
import { TaskInterface } from './interface/task.interface';
import { TasksStatus } from './task-status.enum';
export declare class Task extends BaseEntity implements TaskInterface {
    id: number;
    title: string;
    description: string;
    status: TasksStatus;
    user: User;
    userId: number;
}
