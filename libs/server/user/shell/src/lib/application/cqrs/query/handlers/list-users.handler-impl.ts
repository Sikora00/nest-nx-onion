import { QueryHandler } from '@nestjs/cqrs';
import {
  ListUsersHandler,
  ListUsersQuery
} from '@todo-app/server/user/core/application-services';
import { UserRepository } from '@todo-app/server/user/core/domain-services';

@QueryHandler(ListUsersQuery)
export class ListUsersHandlerImp extends ListUsersHandler {
  constructor(repo: UserRepository) {
    super(repo);
  }
}
