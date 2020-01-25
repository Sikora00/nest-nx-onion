import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { User } from '@onion-first/backend/user/core/domain';
import { ListUsersQuery } from './list-users/list-users.query';

@Injectable()
export class UserFacade {
  constructor(private queryBus: QueryBus) {}

  listUsers(): Promise<User[]> {
    return this.queryBus.execute(new ListUsersQuery());
  }
}
