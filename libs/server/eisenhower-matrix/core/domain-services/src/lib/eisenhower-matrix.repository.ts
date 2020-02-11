import { EisenhowerMatrix } from '@todo-app/server/eisenhower-matrix/core/domain';

export abstract class EisenhowerMatrixRepository {
  abstract findByUserIdOrCreate(userId: string): Promise<EisenhowerMatrix>;

  abstract save(toDo: EisenhowerMatrix): Promise<void>;
}
