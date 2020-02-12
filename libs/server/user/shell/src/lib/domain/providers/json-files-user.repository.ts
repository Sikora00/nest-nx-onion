import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';
import { JsonFileUserRepository } from '@todo-app/server/user/infrastructure';

export const jsonFilesUserRepositoryFactory = () =>
  new JsonFileUserRepository(new JsonFilePersistenceAdapter('db/users.json'));
