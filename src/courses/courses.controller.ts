import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CourseService } from './courses.service';

type body = {
  name: string;
  description: string;
  price: number;
};
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService = new CourseService){}

  @Get('all')
  findAll(@Res() response) {
    return response.status(200).send('listagem de cursos');
  }
  @Get('teste')
  findTest() {
    return 'teste';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `curso numero #${id}`;
  }

  @Post('create')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body: body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: body) {
    return `Atualização do Curso ${id}`;
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return `deletado o curso #${id}`;
  }
}
