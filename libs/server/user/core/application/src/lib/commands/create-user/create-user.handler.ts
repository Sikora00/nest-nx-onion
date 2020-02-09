import { User, UserRepository } from '@todo-app/server/user/core/domain';
import { CreateUserCommand } from './create-user.command';
import { ICommandHandler } from '@todo-app/server/shared/port';

export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(protected repository: UserRepository) {}

  execute(command: CreateUserCommand): Promise<any> {
    const user = new User();
    user.name = command.name;
    return this.repository.save(user);
  }
}
