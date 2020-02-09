import { User } from './user.aggregate';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract save(user: User): Promise<void>;
}
