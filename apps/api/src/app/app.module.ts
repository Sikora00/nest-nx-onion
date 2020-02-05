import { Module } from '@nestjs/common';
import { ServerUserUiApiRestModule } from '@todo-app/server/user/ui/api/rest';

@Module({
  imports: [ServerUserUiApiRestModule]
})
export class AppModule {}
