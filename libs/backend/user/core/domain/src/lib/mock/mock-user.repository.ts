import { UserRepository } from '../user-repository.interface';
import { User } from '../user.entity';

export class MockUserRepository implements UserRepository {
  findAll(): User[] {
    return [new User()];
  }
}
