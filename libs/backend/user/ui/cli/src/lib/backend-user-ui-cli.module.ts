import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CreateUserCommand } from './commands/create-user.command';

@Module({
  imports: [CommandModule],
  providers: [CreateUserCommand]
})
export class BackendUserUiCliModule {}
