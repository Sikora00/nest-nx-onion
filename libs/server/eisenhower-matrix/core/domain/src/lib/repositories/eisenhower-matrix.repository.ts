import { EisenhowerMatrix } from '../aggregates/eisenhower-matrix.aggregate';

export abstract class EisenhowerMatrixRepository {
  abstract findByUserIdOrCreate(userId: string): Promise<EisenhowerMatrix>;

  abstract save(toDo: EisenhowerMatrix): Promise<void>;
}
