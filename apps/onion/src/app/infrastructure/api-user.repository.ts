import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../core/repository.interface';
import { User } from '../core/user.entity';

@Injectable()
export class ApiUserRepository implements Repository{

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

}
