import { Module } from '@nestjs/common';
import { EisenhowerMatrixFacade } from '@todo-app/server/eisenhower-matrix/core/application';
import { CommandBusRootModule } from './cqrs/command/command-bus-root.module';
import { eisenhowerMatrixFacadeFactory } from './providers/eisenhower-matrix-facade.factory';
import { QueryBusRootModule } from './cqrs/query/query-bus-root.module';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';

const PROVIDERS = [
  {
    provide: EisenhowerMatrixFacade,
    useFactory: eisenhowerMatrixFacadeFactory,
    inject: [CommandBus, QueryBus]
  }
];
@Module({
  imports: [CommandBusRootModule, QueryBusRootModule],
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class ApplicationRootModule {}
