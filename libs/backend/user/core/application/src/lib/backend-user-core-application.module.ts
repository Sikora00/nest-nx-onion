import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ListUsersHandler } from './list-users/list-users.handler';
import { UserFacade } from './user.facade';

const queryHandlers = [ListUsersHandler];

@Module({
  imports: [CqrsModule],
  providers: [UserFacade, ...queryHandlers],
  exports: [UserFacade]
})
export class BackendUserCoreApplicationModule {}
