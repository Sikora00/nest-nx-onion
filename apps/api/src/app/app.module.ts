import { Module } from '@nestjs/common';
import { BackendUserShellModule } from '@onion-first/backend/user/shell';

@Module({
  imports: [BackendUserShellModule]
})
export class AppModule {}
