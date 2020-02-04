import { Module } from '@nestjs/common';
import {
  CommandBus,
  QueryBus,
  UserFacade
} from '@onion-first/backend/user/core/application';
import { CommandBusRootModule } from './cqrs/command/command-bus-root.module';
import { userFacadeFactory } from './providers/user-facade.factory';
import { QueryBusRootModule } from './cqrs/query/query-bus-root.module';

const PROVIDERS = [
  { provide: UserFacade, useFactory: userFacadeFactory, inject: [CommandBus, QueryBus] }
];
@Module({
  imports: [CommandBusRootModule, QueryBusRootModule],
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class ApplicationRootModule {}
