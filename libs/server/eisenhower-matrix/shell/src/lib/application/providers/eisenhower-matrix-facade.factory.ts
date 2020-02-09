import { EisenhowerMatrixFacade } from '@todo-app/server/eisenhower-matrix/core/application';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';

export const eisenhowerMatrixFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus) =>
  new EisenhowerMatrixFacade(commandBus, queryBus);
