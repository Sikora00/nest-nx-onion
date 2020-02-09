import { ToDoFacade } from '@todo-app/server/to-do/core/application';
import { CommandBus, QueryBus } from '@todo-app/server/shared/port';

export const toDoFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus) =>
  new ToDoFacade(commandBus, queryBus);
