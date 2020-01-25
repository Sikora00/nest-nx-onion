import { Repository } from '../core/repository.interface';
import { User } from '../core/user.entity';

export class LocalUserRepository implements Repository{
  findAll(): User[] {
    return [new User()]
  }

}
