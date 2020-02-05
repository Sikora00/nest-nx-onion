import { User, UserRepository } from '@todo-app/server/user/core/domain';

export class MockUserRepository implements UserRepository {
  private userCollection = [new User()];
  findAll(): User[] {
    return this.userCollection;
  }

  save(user: User) {
    this.userCollection.push(user)
  }
}
