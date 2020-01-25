import { Observable, of } from 'rxjs';
import { Repository } from '../core/repository.interface';
import { User } from '../core/user.entity';

export class LocalUserRepository implements Repository {
  findAll(): Observable<User[]> {
    return of([new User()]);
  }
}
