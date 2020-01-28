import { User } from '@onion-first/backend/user/core/domain';
import { ListUsersQuery } from './queries/list-users/list-users.query';
import { QueryBus } from './ports/query-bus.interface';

export class UserFacade {
  constructor(private queryBus: QueryBus) {}

  listUsers(): Promise<User[]> {
    return this.queryBus.execute(new ListUsersQuery());
  }
}
