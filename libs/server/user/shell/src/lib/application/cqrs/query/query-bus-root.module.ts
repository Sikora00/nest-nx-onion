import { Module, OnModuleInit } from '@nestjs/common';
import { QueryBus as NestQueryBus } from '@nestjs/cqrs';
import { QueryBus } from '@todo-app/server/shared/port';
import { ListUsersHandlerImp } from './handlers/list-users.handler-impl';

const queryHandlers = [ListUsersHandlerImp];
const providers = [{ provide: QueryBus, useClass: NestQueryBus }];

@Module({
  providers: [...providers, ...queryHandlers],
  exports: [...providers, ...queryHandlers]
})
export class QueryBusRootModule implements OnModuleInit {
  constructor(private queryBus: QueryBus) {}

  onModuleInit(): any {
    this.queryBus.register(queryHandlers);
  }
}
