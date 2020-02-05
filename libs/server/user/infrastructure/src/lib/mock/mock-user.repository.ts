import { User, UserRepository } from '@todo-app/server/user/core/domain';

export class MockUserRepository implements UserRepository {
  private userCollection = [new User()];
  findAll(): Promise<User[]> {
    return Promise.resolve(this.userCollection);
  }

  async save(user: User): Promise<void> {
    this.userCollection.push(user)
  }
}
