import { EisenhowerMatrix } from '@todo-app/server/eisenhower-matrix/core/domain';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';
import { AddTaskCommand } from './commands/add-task.command/add-task.command';
import { GetUserEisenhowerMatrixQuery } from './queries/get-user-eisenhower-matrix.query';

export class EisenhowerMatrixFacade {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  addTask(command: AddTaskCommand): Promise<void> {
    return this.commandBus.execute<AddTaskCommand>(command);
  }

  getUserEisenhowerMatrix(
    query: GetUserEisenhowerMatrixQuery
  ): Promise<EisenhowerMatrix> {
    return this.queryBus.execute(query);
  }
}
