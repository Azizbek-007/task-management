import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/task-create.dto';
import { UpdateTaskDto } from './dto/task-update.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('task')
@UseGuards(AuthGuard())
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  CreateTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.CreateTask(createTaskDto, user);
  }

  @Get()
  GetTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  TaskShow(@Param('id') id: number): Promise<Task> {
    return this.taskService.ShowTask(id);
  }

  @Patch('/:id')
  UpdateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.UpdateTask(id, updateTaskDto, user);
  }

  @Delete('/:id')
  DeleteTask(@Param('id') id: number, @GetUser() user: User): Promise<void> {
    return this.taskService.DestoryTask(id, user);
  }
}
