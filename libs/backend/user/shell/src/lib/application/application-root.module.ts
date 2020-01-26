import { Module } from '@nestjs/common';
import {
  QueryBus,
  UserFacade
} from '@onion-first/backend/user/core/application';
import { userFacadeFactory } from './providers/user-facade.factory';
import { QueryBusRootModule } from './cqrs/query/query-bus-root.module';

const PROVIDERS = [
  { provide: UserFacade, useFactory: userFacadeFactory, inject: [QueryBus] }
];
@Module({
  imports: [QueryBusRootModule],
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class ApplicationRootModule {}
