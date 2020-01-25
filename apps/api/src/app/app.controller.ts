import { Controller, Get } from '@nestjs/common';

import { Message } from '@onion-first/api-interfaces';

import { AppService } from './app.service';
import { ListUsersQuery } from './core/list-users.query';
import { User } from './core/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private query: ListUsersQuery) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('users')
  getUsers(): User[] {
    return this.query.execute();
  }
}
