import { Module } from '@nestjs/common';
import { BackendUserShellModule } from '@onion-first/backend/user/shell';
import { CommandModule } from 'nestjs-command';
import { CreateUserCliCommand } from './commands/create-user.cli-command';

@Module({
  imports: [CommandModule, BackendUserShellModule],
  providers: [CreateUserCliCommand]
})
export class BackendUserUiCliModule {}
