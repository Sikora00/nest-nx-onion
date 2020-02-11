import { EisenhowerMatrix } from '@todo-app/server/eisenhower-matrix/core/domain';
import {
  ICommandHandler,
  JsonFilesPersistence
} from '@todo-app/server/shared/port';
import { GetUserEisenhowerMatrixQuery } from './get-user-eisenhower-matrix.query';

export class GetUserEisenhowerMatrixHandler
  implements ICommandHandler<GetUserEisenhowerMatrixQuery> {
  constructor(private persistence: JsonFilesPersistence) {}
  async execute(
    command: GetUserEisenhowerMatrixQuery
  ): Promise<EisenhowerMatrix> {
    const toDos = await this.persistence.getFileData<EisenhowerMatrix[]>();
    return toDos.find(
      (toDo: EisenhowerMatrix) => toDo.userId === command.userId
    );
  }
}
