import { QueryHandler } from '@nestjs/cqrs';
import {
  GetUserToDoHandler,
  GetUserToDoQuery
} from '@todo-app/server/to-do/core/application';
import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';

@QueryHandler(GetUserToDoQuery)
export class GetUserTodoHandlerImpl extends GetUserToDoHandler {
  constructor() {
    super(new JsonFilePersistenceAdapter('db/to-do.json'));
  }
}
