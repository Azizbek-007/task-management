import { User } from 'src/auth/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { TaskInterface } from './interface/task.interface';
import { TasksStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity implements TaskInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TasksStatus,
    default: TasksStatus.ACTIVE,
  })
  status: TasksStatus;

  @ManyToOne((type) => User, (user) => user.tasks, { eager: false })
  user: User;

  @Column()
  userId: number;
}
