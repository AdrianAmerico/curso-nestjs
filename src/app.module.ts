import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesController } from './courses/courses.controller';
import { CourseService } from './courses/courses.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService],
})

export class AppModule {}
