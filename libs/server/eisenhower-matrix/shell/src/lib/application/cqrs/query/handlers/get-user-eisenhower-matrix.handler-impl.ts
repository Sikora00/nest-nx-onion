import { QueryHandler } from '@nestjs/cqrs';
import {
  GetUserEisenhowerMatrixHandler,
  GetUserEisenhowerMatrixQuery
} from '@todo-app/server/eisenhower-matrix/core/application-services';
import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';

@QueryHandler(GetUserEisenhowerMatrixQuery)
export class GetUserEisenhowerMatrixHandlerImpl extends GetUserEisenhowerMatrixHandler {
  constructor() {
    super(new JsonFilePersistenceAdapter('db/eisenhower-matrix.json'));
  }
}
