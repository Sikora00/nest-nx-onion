import { User } from './user.entity';

export abstract class Repository {
  abstract findAll(): User[];
}
