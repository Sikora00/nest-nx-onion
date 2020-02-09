import { Injectable } from '@angular/core';
import {
  CreateUserCommand,
  UserFacade
} from '@todo-app/server/user/core/application';
import { Command, Positional } from 'nestjs-command';

@Injectable()
export class CreateUserCliCommand {
  constructor(private userFacade: UserFacade) {}

  @Command({
    command: 'user:create <name>',
    describe: 'create a user',
    autoExit: true
  })
  async create(
    @Positional({ name: 'name', describe: 'The user name', type: 'string' })
    name: string
  ) {
    await this.userFacade.create(new CreateUserCommand(name));
    console.table(await this.userFacade.listUsers());
  }
}
