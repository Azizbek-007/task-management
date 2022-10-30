import { TasksStatus } from '../task-status.enum';
export declare class UpdateTaskDto {
    title: string;
    description: string;
    status?: TasksStatus;
}
