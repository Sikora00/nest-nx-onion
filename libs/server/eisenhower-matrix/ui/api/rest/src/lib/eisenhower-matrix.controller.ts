import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req
} from '@nestjs/common';
import {
  AddTaskCommand,
  GetUserEisenhowerMatrixQuery,
  EisenhowerMatrixFacade
} from '@todo-app/server/eisenhower-matrix/core/application';
import { EisenhowerMatrix } from '@todo-app/server/eisenhower-matrix/core/domain';
import { AddTaskDto } from './dtos/add-task.dto';
import { Request } from 'express';

@Controller('eisenhower-matrix')
export class EisenhowerMatrixController {
  constructor(private facade: EisenhowerMatrixFacade) {}

  @Get(':userId')
  getUserMatrix(@Param('userId') userId: string): Promise<EisenhowerMatrix> {
    return this.facade.getUserEisenhowerMatrix(new GetUserEisenhowerMatrixQuery(userId));
  }

  @Post()
  createMatrix(@Body() body: AddTaskDto): Promise<void> {
    return this.facade.addTask(
      new AddTaskCommand(body.title, body.urgent, body.important, body.userId)
    );
  }
}
