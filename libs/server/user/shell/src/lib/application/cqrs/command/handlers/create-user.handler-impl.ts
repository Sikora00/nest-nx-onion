import { CommandHandler } from '@nestjs/cqrs';
import {
  CreateUserCommand,
  CreateUserHandler
} from '@todo-app/server/user/core/application-services';
import { UserRepository } from '@todo-app/server/user/core/domain-services';

@CommandHandler(CreateUserCommand)
export class CreateUserHandlerImpl extends CreateUserHandler {
  constructor(protected repository: UserRepository) {
    super(repository);
  }
}
