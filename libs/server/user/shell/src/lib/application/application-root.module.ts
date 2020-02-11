import { Module } from '@nestjs/common';
import { UserFacade } from '@todo-app/server/user/core/application-services';
import { CommandBusRootModule } from './cqrs/command/command-bus-root.module';
import { userFacadeFactory } from './providers/user-facade.factory';
import { QueryBusRootModule } from './cqrs/query/query-bus-root.module';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';

const PROVIDERS = [
  {
    provide: UserFacade,
    useFactory: userFacadeFactory,
    inject: [CommandBus, QueryBus]
  }
];
@Module({
  imports: [CommandBusRootModule, QueryBusRootModule],
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class ApplicationRootModule {}
