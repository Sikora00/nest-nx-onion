import { Injectable } from '@angular/core';
import { Repository } from './repository.interface';

@Injectable()
export class ListUsersQuery {
  constructor(private repository: Repository) {
  }

  execute() {
    return this.repository.findAll();
  }
}
// export const listUsersQuery = (repository: Repository) => {
//   return repository.findAll();
// }
