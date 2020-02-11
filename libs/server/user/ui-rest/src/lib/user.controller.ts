import { Controller, Get } from '@nestjs/common';
import { UserFacade } from '@todo-app/server/user/core/application-services';
import { User } from '@todo-app/server/user/core/domain';

@Controller()
export class UserController {
  constructor(private facade: UserFacade) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.facade.listUsers();
  }
}
