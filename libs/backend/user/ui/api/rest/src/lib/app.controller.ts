import { Controller, Get } from '@nestjs/common';
import { UserFacade } from '@onion-first/backend/user/core/application';
import { User } from '@onion-first/backend/user/core/domain';

@Controller()
export class AppController {
  constructor(private facade: UserFacade) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.facade.listUsers();
  }
}
