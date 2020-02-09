import { UserFacade } from '@todo-app/server/user/core/application';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';

export const userFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus) =>
  new UserFacade(commandBus, queryBus);
