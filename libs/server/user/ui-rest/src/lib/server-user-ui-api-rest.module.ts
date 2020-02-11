import { Module } from '@nestjs/common';
import { ServerUserShellModule } from '@todo-app/server/user/shell';
import { UserController } from './user.controller';

@Module({
  imports: [ServerUserShellModule],
  controllers: [UserController]
})
export class ServerUserUiApiRestModule {}
