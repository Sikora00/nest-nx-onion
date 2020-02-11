import { QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@todo-app/server/user/core/domain-services';
import { ListUsersHandler } from '@todo-app/server/user/core/application-services';
import { ListUsersQuery } from '@todo-app/server/user/core/application-services';

@QueryHandler(ListUsersQuery)
export class ListUsersHandlerImp extends ListUsersHandler {
  constructor(repo: UserRepository) {
    super(repo);
  }
}
