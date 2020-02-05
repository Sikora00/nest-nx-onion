import {
  QueryBus,
  UserFacade
} from '@todo-app/server/user/core/application';
import { CommandBus } from '@todo-app/server/user/core/application';

export const userFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus) =>
  new UserFacade(commandBus, queryBus);
