import { Module } from '@nestjs/common';
import { ServerEisenhowerMatrixShellModule } from '@todo-app/server/eisenhower-matrix/shell';
import { EisenhowerMatrixController } from './eisenhower-matrix.controller';

@Module({ imports: [ServerEisenhowerMatrixShellModule], controllers: [EisenhowerMatrixController] })
export class ServerEisenhowerMatrixUiApiRestModule {}
