import { Module } from '@nestjs/common';
import { BackendUserUiApiRestModule } from '@onion-first/backend/user/ui/api/rest';

@Module({
  imports: [BackendUserUiApiRestModule]
})
export class AppModule {}
