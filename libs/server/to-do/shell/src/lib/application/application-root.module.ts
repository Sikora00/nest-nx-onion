import { Module } from '@nestjs/common';
import { ToDoFacade } from '@todo-app/server/to-do/core/application';
import { CommandBusRootModule } from './cqrs/command/command-bus-root.module';
import { toDoFacadeFactory } from './providers/to-do-facade.factory';
import { QueryBusRootModule } from './cqrs/query/query-bus-root.module';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';

const PROVIDERS = [
  {
    provide: ToDoFacade,
    useFactory: toDoFacadeFactory,
    inject: [CommandBus, QueryBus]
  }
];
@Module({
  imports: [CommandBusRootModule, QueryBusRootModule],
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class ApplicationRootModule {}
