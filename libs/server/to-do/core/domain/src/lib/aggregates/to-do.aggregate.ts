import { Task } from '../entities/task.entity';

export interface ToDo {
  userId: string;
  do: Task[];
  schedule: Task[];
  delegate: Task[];
  eliminate: Task[];
}
