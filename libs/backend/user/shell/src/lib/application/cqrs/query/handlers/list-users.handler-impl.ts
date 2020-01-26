import { QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@onion-first/backend/user/core/domain';
import { ListUsersHandler } from '@onion-first/backend/user/core/application';
import { ListUsersQuery } from '@onion-first/backend/user/core/application';

@QueryHandler(ListUsersQuery)
export class ListUsersHandlerImp extends ListUsersHandler {
  constructor(repo: UserRepository) {
    super(repo);
  }
}
