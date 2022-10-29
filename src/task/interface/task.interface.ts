import { TasksStatus } from '../task-status.enum';

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  status: TasksStatus;
}
