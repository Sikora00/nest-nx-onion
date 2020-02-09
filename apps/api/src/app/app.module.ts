import { Module } from '@nestjs/common';
import { ServerToDoUiApiRestModule } from '@todo-app/server/to-do/ui/api/rest';
import { ServerUserUiApiRestModule } from '@todo-app/server/user/ui/api/rest';

@Module({
  imports: [ServerUserUiApiRestModule, ServerToDoUiApiRestModule]
})
export class AppModule {}
