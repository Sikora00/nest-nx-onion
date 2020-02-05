import { JsonFilePersistenceAdapter, JsonFileUserRepository } from '@todo-app/server/user/infrastructure';

export const jsonFilesUserRepositoryFactory = () =>
  new JsonFileUserRepository(new JsonFilePersistenceAdapter('db/users.json'));
