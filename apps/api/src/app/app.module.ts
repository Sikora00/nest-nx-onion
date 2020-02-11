import { Module } from '@nestjs/common';
import { ServerEisenhowerMatrixUiApiRestModule } from '@todo-app/server/eisenhower-matrix/ui-rest';
import { ServerUserUiApiRestModule } from '@todo-app/server/user/ui-rest';

@Module({
  imports: [ServerUserUiApiRestModule, ServerEisenhowerMatrixUiApiRestModule]
})
export class AppModule {}
