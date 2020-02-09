import { ToDo, ToDoRepository } from '@todo-app/server/to-do/core/domain';
import { JsonFilesPersistence } from '@todo-app/server/shared/port';
import { addOrReplace } from '@todo-app/shared/util-array';

export class ToDoJsonFileRepository implements ToDoRepository {
  constructor(private persistence: JsonFilesPersistence) {}

  async findByUserIdOrCreate(userId: string): Promise<ToDo> {
    const toDos = await this.persistence.getFileData<ToDo[]>();
    const toDo = toDos.find(tD => tD.userId === userId);
    if (toDo) {
      return toDo;
    } else {
      return { userId, delegate: [], do: [], eliminate: [], schedule: [] };
    }
  }

  async save(toDo: ToDo): Promise<void> {
    const toDos = await this.persistence.getFileData<ToDo[]>();
    return this.persistence.save(addOrReplace(toDos, toDo, 'userId'));
  }
}
