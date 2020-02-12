import { CommandBus, QueryBus } from '@todo-app/server/shared/port';
import { UserFacade } from '@todo-app/server/user/core/application-services';

export const userFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus) =>
  new UserFacade(commandBus, queryBus);
