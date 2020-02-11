import { CommandHandler } from '@nestjs/cqrs';
import {
  AddTaskCommand,
  AddTaskHandler
} from '@todo-app/server/eisenhower-matrix/core/application-services';
import { EisenhowerMatrixRepository } from '@todo-app/server/eisenhower-matrix/core/domain-services';

@CommandHandler(AddTaskCommand)
export class AddTaskHandlerImpl extends AddTaskHandler {
  constructor(protected repository: EisenhowerMatrixRepository) {
    super(repository);
  }
}
