import { ToDo } from '@todo-app/server/to-do/core/domain';
import {
  ICommandHandler,
  JsonFilesPersistence
} from '@todo-app/server/shared/port';
import { GetUserToDoQuery } from './get-user-to-do.query';

export class GetUserToDoHandler implements ICommandHandler<GetUserToDoQuery> {
  constructor(private persistence: JsonFilesPersistence) {}
  async execute(command: GetUserToDoQuery): Promise<ToDo> {
    const toDos = await this.persistence.getFileData<ToDo[]>();
    return toDos.find((toDo: ToDo) => toDo.userId === command.userId);
  }
}
