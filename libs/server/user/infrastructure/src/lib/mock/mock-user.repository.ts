import { User } from '@todo-app/server/user/core/domain';
import { UserRepository } from '@todo-app/server/user/core/domain-services';

export class MockUserRepository implements UserRepository {
  private userCollection = [new User('Test')];

  findAll(): Promise<User[]> {
    return Promise.resolve(this.userCollection);
  }

  async save(user: User): Promise<void> {
    this.userCollection.push(user);
  }
}
