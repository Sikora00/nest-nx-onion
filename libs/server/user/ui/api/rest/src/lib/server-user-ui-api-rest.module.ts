import { Module } from '@nestjs/common';
import { ServerUserShellModule } from '@todo-app/server/user/shell';
import { AppController } from './app.controller';

@Module({
  imports: [ServerUserShellModule],
  controllers: [AppController]
})
export class ServerUserUiApiRestModule {}
