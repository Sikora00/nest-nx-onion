import { User } from '@todo-app/server/user/core/domain';
import { CreateUserCommand } from './commands/create-user/create-user.command';
import { CommandBus } from '@todo-app/server/shared/port';
import { ListUsersQuery } from './queries/list-users/list-users.query';
import { QueryBus } from '@todo-app/server/shared/port';

export class UserFacade {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  create(command: CreateUserCommand): Promise<void> {
    return this.commandBus.execute(command);
  }
  listUsers(): Promise<User[]> {
    return this.queryBus.execute(new ListUsersQuery());
  }
}
