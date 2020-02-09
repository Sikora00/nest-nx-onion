import { uuid } from '@todo-app/shared/util-uuid';

export class User {
  id: string;
  name: string;
  constructor() {
    this.id = uuid();
    this.name = 'User ' + this.id;
  }
}
