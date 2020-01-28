import { Injectable } from '@angular/core';
import { Command, Positional } from 'nestjs-command';

@Injectable()
export class CreateUserCommand {
  @Command({
    command: 'user:create <name>',
    describe: 'create a user',
    autoExit: true
  })
  async create(
    @Positional({ name: 'name', describe: 'The user name', type: 'string' })
    name: string
  ) {
    console.log('created user ', name);
  }
}
