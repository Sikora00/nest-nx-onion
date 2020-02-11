import { User } from '@todo-app/server/user/core/domain';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract save(user: User): Promise<void>;
}
