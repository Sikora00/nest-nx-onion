import { ToDoJsonFileRepository } from '@todo-app/server/to-do/infrastructure';
import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';

export const toDoJsonFileRepositoryFactory = () =>
  new ToDoJsonFileRepository(new JsonFilePersistenceAdapter('db/to-do.json'));
