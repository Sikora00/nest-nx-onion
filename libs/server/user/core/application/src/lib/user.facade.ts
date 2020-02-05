import { User } from '@todo-app/server/user/core/domain';
import { CreateUserCommand } from './commands/create-user/create-user.command';
import { CommandBus } from './ports/command-bus.interface';
import { ListUsersQuery } from './queries/list-users/list-users.query';
import { QueryBus } from './ports/query-bus.interface';

export class UserFacade {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  create(command: CreateUserCommand): Promise<void> {
    return this.commandBus.execute(command);
  }
  listUsers(): Promise<User[]> {
    return this.queryBus.execute(new ListUsersQuery());
  }
}
