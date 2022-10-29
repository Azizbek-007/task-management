import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
