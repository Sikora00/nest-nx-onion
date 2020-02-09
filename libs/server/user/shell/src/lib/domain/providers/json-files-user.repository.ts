import { JsonFileUserRepository } from '@todo-app/server/user/infrastructure';
import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';

export const jsonFilesUserRepositoryFactory = () =>
  new JsonFileUserRepository(new JsonFilePersistenceAdapter('db/users.json'));
