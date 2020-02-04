import { User, UserRepository } from '@onion-first/backend/user/core/domain';

export class MockUserRepository implements UserRepository {
  private userCollection = [new User()];
  findAll(): User[] {
    return this.userCollection;
  }

  save(user: User) {
    this.userCollection.push(user)
  }
}
