import { Module } from '@nestjs/common';
import { ServerUserUiCliModule } from '@todo-app/server/user/ui/cli';

@Module({
  imports: [ServerUserUiCliModule]
})
export class AppModule {}
