import { User, UserRepository } from '@todo-app/server/user/core/domain';
import { JsonFilesPersistence } from '@todo-app/server/shared/port';

export class JsonFileUserRepository implements UserRepository {
  constructor(private persistence: JsonFilesPersistence) {}

  async findAll(): Promise<User[]> {
    const usersData = await this.persistence.getFileData<User[]>();
    return usersData.map(userData => {
      const user = new User();
      user.name = userData.name;
      return user;
    });
  }

  async save(user: User): Promise<void> {
    const users = await this.findAll();
    users.push(user);
    return this.persistence.save(users);
  }
}
