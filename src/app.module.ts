import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfig } from './config/typeorm.config';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    CacheModule.register({ isGlobal: true, ttl: 120 }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    TaskModule,
    AuthModule,
  ],
})
export class AppModule {}
 