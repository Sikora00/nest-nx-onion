import { uuid } from '@todo-app/shared/util-uuid';

export class User {
  private id: string;
  private name: string;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;
  }
}
