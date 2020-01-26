import {
  QueryBus,
  UserFacade
} from '@onion-first/backend/user/core/application';

export const userFacadeFactory = (queryBus: QueryBus) =>
  new UserFacade(queryBus);
