import { UserRepository } from '@todo-app/server/user/core/domain';
import { IQueryHandler } from '@todo-app/server/shared/port';

export class ListUsersHandler implements IQueryHandler {
  constructor(private repository: UserRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
