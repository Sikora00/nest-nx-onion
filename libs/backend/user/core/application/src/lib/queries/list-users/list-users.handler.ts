import { UserRepository } from '@onion-first/backend/user/core/domain';
import { IQueryHandler } from '../../interfaces/query-handler.interface';

export class ListUsersHandler implements IQueryHandler{
  constructor(private repository: UserRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
