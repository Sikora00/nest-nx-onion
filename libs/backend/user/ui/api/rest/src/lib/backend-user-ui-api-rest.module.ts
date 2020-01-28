import { Module } from '@nestjs/common';
import { BackendUserShellModule } from '@onion-first/backend/user/shell';
import { AppController } from './app.controller';

@Module({
  imports: [BackendUserShellModule],
  controllers: [AppController]
})
export class BackendUserUiApiRestModule {}
