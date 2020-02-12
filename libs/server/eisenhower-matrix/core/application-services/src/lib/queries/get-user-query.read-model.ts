import { Task } from '@todo-app/server/eisenhower-matrix/core/domain';

export interface GetUserQueryReadModel {
  do: Task[];
  schedule: Task[];
  delegate: Task[];
  eliminate: Task[];
}
