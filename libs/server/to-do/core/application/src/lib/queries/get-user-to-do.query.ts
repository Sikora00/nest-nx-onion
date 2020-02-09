import { IQuery } from '@todo-app/server/shared/port';

export class GetUserToDoQuery implements IQuery {
  constructor(public userId: string) {}
}
