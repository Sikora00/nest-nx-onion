import { Module, OnModuleInit } from '@nestjs/common';
import { QueryBus as NestQueryBus } from '@nestjs/cqrs';
import { QueryBus } from '@todo-app/server/shared/port';
import { GetUserEisenhowerMatrixHandlerImpl } from './handlers/get-user-eisenhower-matrix.handler-impl';

const queryHandlers = [GetUserEisenhowerMatrixHandlerImpl];
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
