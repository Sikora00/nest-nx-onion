import { ICommandHandler } from '@nestjs/cqrs';
import { User, UserRepository } from '@onion-first/backend/user/core/domain';
import { CreateUserCommand } from './create-user.command';

export class CreateUserHandler implements ICommandHandler<CreateUserCommand>{
  constructor(protected repository: UserRepository) {}

  execute(command: CreateUserCommand): Promise<any> {
    const user = new User();
    user.name = command.name;
    return this.repository.save(user);
  }
}
