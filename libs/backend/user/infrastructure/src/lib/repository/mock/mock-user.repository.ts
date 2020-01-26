import { User, UserRepository } from '@onion-first/backend/user/core/domain';

export class MockUserRepository implements UserRepository {
  findAll(): User[] {
    return [new User()];
  }
}
