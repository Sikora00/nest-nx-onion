import { Observable } from 'rxjs';
import { User } from './user.entity';

export abstract class Repository {
  abstract findAll(): Observable<User[]>;
}
