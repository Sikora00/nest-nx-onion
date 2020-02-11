import { User } from '@todo-app/server/user/core/domain';
import { UserRepository } from '@todo-app/server/user/core/domain-services';
import { CreateUserCommand } from './create-user.command';
import { ICommandHandler } from '@todo-app/server/shared/port';

export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(protected repository: UserRepository) {}

  execute(command: CreateUserCommand): Promise<void> {
    const user = new User(command.name);
    return this.repository.save(user);
  }
}
