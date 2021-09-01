import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('all')
  findAll() {
    return 'listagem de cursos';
  }
  @Get('teste')
  findTest() {
    return 'teste';
  }
  @Get(':id')
  findOne(@Param('id') id:string) {
    return `curso numero #${id}`;
  }
}
