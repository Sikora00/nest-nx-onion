import { ToDo } from '../aggregates/to-do.aggregate';

export abstract class ToDoRepository {
  abstract findByUserIdOrCreate(userId: string): Promise<ToDo>;

  abstract save(toDo: ToDo): Promise<void>;
}
