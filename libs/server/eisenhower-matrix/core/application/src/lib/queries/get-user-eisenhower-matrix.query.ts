import { IQuery } from '@todo-app/server/shared/port';

export class GetUserEisenhowerMatrixQuery implements IQuery {
  constructor(public userId: string) {}
}
