import { Module } from '@nestjs/common';
import { BackendUserCoreApplicationModule } from '@onion-first/backend/user/core/application';
import { AppController } from './app.controller';

@Module({
  imports: [BackendUserCoreApplicationModule],
  controllers: [AppController]
})
export class BackendUserUiApiRestModule {}
