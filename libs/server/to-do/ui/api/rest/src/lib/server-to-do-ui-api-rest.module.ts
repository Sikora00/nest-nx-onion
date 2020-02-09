import { Module } from '@nestjs/common';
import { ServerToDoShellModule } from '@todo-app/server/to-do/shell';
import { ToDoController } from './to-do.controller';

@Module({ imports: [ServerToDoShellModule], controllers: [ToDoController] })
export class ServerToDoUiApiRestModule {}
