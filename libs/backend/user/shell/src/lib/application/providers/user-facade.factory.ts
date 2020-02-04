import {
  QueryBus,
  UserFacade
} from '@onion-first/backend/user/core/application';
import { CommandBus } from '@onion-first/backend/user/core/application';

export const userFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus) =>
  new UserFacade(commandBus, queryBus);
