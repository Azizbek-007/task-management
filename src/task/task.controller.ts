import {
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
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
  async CreateTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return await this.taskService.CreateTask(createTaskDto, user);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  async GetTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  @Get('/:id')
  async TaskShow(@Param('id') id: number): Promise<Task> {
    return await this.taskService.ShowTask(id);
  }

  @Patch('/:id')
  async UpdateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return await this.taskService.UpdateTask(id, updateTaskDto, user);
  }

  @Delete('/:id')
  async DeleteTask(@Param('id') id: number, @GetUser() user: User): Promise<void> {
    return await this.taskService.DestoryTask(id, user);
  }
}
