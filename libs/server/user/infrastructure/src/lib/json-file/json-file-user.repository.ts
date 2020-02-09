import { JsonFilesPersistence } from '@todo-app/server/shared/port';
import { User, UserRepository } from '@todo-app/server/user/core/domain';

export class JsonFileUserRepository implements UserRepository {
  constructor(private persistence: JsonFilesPersistence) {}

  async findAll(): Promise<User[]> {
    const usersData = await this.persistence.getFileData<any[]>();
    return usersData.map(userData => {
      return new User(userData.name);
    });
  }

  async save(user: User): Promise<void> {
    const users = await this.findAll();
    users.push(user);
    return this.persistence.save(users);
  }
}
