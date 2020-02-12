import { IQueryHandler } from '@todo-app/server/shared/port';
import { UserRepository } from '@todo-app/server/user/core/domain-services';

export class ListUsersHandler implements IQueryHandler {
  constructor(private repository: UserRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
