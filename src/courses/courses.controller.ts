import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

type body = {
  name: string;
  description: string;
  price: number;
};

@Controller('courses')
export class CoursesController {
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
}
