import { Module } from '@nestjs/common';
import { EisenhowerMatrixFacade } from '@todo-app/server/eisenhower-matrix/core/application-services';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';
import { CommandBusRootModule } from './cqrs/command/command-bus-root.module';
import { QueryBusRootModule } from './cqrs/query/query-bus-root.module';
import { eisenhowerMatrixFacadeFactory } from './providers/eisenhower-matrix-facade.factory';

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
