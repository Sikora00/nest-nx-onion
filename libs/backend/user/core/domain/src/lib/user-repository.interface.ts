import { User } from './user.entity';

export abstract class UserRepository {
  abstract findAll(): User[];
}
