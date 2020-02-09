import { ToDo } from '@todo-app/server/to-do/core/domain';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';
import { AddTaskCommand } from './commands/add-task.command/add-task.command';
import { GetUserToDoQuery } from './queries/get-user-to-do.query';

export class ToDoFacade {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  addTask(command: AddTaskCommand): Promise<void> {
    return this.commandBus.execute<AddTaskCommand>(command);
  }

  getUserToDo(query: GetUserToDoQuery): Promise<ToDo> {
    return this.queryBus.execute(query);
  }
}
