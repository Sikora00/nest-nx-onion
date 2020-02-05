import { UserRepository } from '@todo-app/server/user/core/domain';
import { IQueryHandler } from '../../interfaces/query-handler.interface';

export class ListUsersHandler implements IQueryHandler{
  constructor(private repository: UserRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
