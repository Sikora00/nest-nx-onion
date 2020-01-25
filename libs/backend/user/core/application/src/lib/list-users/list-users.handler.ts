import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@onion-first/backend/user/core/domain';
import { ListUsersQuery } from './list-users.query';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersQuery> {
  constructor(private repository: UserRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
