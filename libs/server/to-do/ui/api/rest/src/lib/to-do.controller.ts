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
  GetUserToDoQuery,
  ToDoFacade
} from '@todo-app/server/to-do/core/application';
import { ToDo } from '@todo-app/server/to-do/core/domain';
import { AddTaskDto } from './dtos/add-task.dto';
import { Request } from 'express';

@Controller('to-do')
export class ToDoController {
  constructor(private facade: ToDoFacade) {}

  @Get(':userId')
  getUserToDo(@Param('userId') userId: string): Promise<ToDo> {
    return this.facade.getUserToDo(new GetUserToDoQuery(userId));
  }

  @Post()
  createToDo(@Body() body: AddTaskDto): Promise<void> {
    return this.facade.addTask(
      new AddTaskCommand(body.title, body.urgent, body.important, body.userId)
    );
  }
}
