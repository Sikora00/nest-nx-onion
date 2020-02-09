import { Module, OnModuleInit } from '@nestjs/common';
import { CommandBus as NestCommandBus } from '@nestjs/cqrs';
import { AddTaskHandlerImpl } from './handlers/add-task.handler-impl';
import { CommandBus } from '@todo-app/server/shared/port';

const commandHandlers = [AddTaskHandlerImpl];
const providers = [{ provide: CommandBus, useClass: NestCommandBus }];

@Module({
  providers: [...providers, ...commandHandlers],
  exports: [...providers, ...commandHandlers]
})
export class CommandBusRootModule implements OnModuleInit {
  constructor(private commandBus: CommandBus) {}

  onModuleInit(): any {
    this.commandBus.register(commandHandlers);
  }
}
