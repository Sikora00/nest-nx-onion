import {
  EisenhowerMatrix,
  EisenhowerMatrixRepository
} from '@todo-app/server/eisenhower-matrix/core/domain';
import { JsonFilesPersistence } from '@todo-app/server/shared/port';
import { addOrReplace } from '@todo-app/shared/util-array';

export class EisenhowerMatrixJsonFileRepository
  implements EisenhowerMatrixRepository {
  constructor(private persistence: JsonFilesPersistence) {}

  async findByUserIdOrCreate(userId: string): Promise<EisenhowerMatrix> {
    const toDos = await this.persistence.getFileData<EisenhowerMatrix[]>();
    const toDo = toDos.find(tD => tD.userId === userId);
    if (toDo) {
      return toDo;
    } else {
      return { userId, delegate: [], do: [], eliminate: [], schedule: [] };
    }
  }

  async save(toDo: EisenhowerMatrix): Promise<void> {
    const toDos = await this.persistence.getFileData<EisenhowerMatrix[]>();
    return this.persistence.save(addOrReplace(toDos, toDo, 'userId'));
  }
}
