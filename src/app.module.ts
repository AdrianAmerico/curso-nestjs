import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})

export class AppModule {}
