import { Task } from '../entities/task.entity';

export interface EisenhowerMatrix {
  userId: string;
  do: Task[];
  schedule: Task[];
  delegate: Task[];
  eliminate: Task[];
}
