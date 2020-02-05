import { Module } from '@nestjs/common';
import { ServerUserShellModule } from '@todo-app/server/user/shell';
import { CommandModule } from 'nestjs-command';
import { CreateUserCliCommand } from './commands/create-user.cli-command';

@Module({
  imports: [CommandModule, ServerUserShellModule],
  providers: [CreateUserCliCommand]
})
export class ServerUserUiCliModule {}
