import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos da framework NestJs',
      description: 'Fundamentos da Framework NestJs',
      tags: ['Back-end', 'NestJs', 'Javascript', 'Typescript', 'Api'],
    },
  ];

  public findAll() {
    return this.courses;
  }

  public findOne(id: string) {
    return this.courses.find((item) => item.id === Number(id));
  }

  public create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  public update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  public delete(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
