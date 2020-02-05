import { Module, OnModuleInit } from '@nestjs/common';
import { CommandBus as NestCommandBus } from '@nestjs/cqrs';
import { CommandBus } from '@todo-app/server/user/core/application';
import { CreateUserHandlerImpl } from './handlers/create-user.handler-impl';

const commandHandlers = [CreateUserHandlerImpl];
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
