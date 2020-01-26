import { UserRepository } from '@onion-first/backend/user/core/domain';

export class ListUsersHandler {
  constructor(private repository: UserRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
