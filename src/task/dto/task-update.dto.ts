import { IsEnum, IsNotEmpty } from 'class-validator';
import { TasksStatus } from '../task-status.enum';

export class UpdateTaskDto {
  title: string;
  description: string;
  status?: TasksStatus;
}
