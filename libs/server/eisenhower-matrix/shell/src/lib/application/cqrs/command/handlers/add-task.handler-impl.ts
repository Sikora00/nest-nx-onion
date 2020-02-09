import { CommandHandler } from '@nestjs/cqrs';
import {
  AddTaskCommand,
  AddTaskHandler
} from '@todo-app/server/eisenhower-matrix/core/application';
import { EisenhowerMatrixRepository } from '@todo-app/server/eisenhower-matrix/core/domain';

@CommandHandler(AddTaskCommand)
export class AddTaskHandlerImpl extends AddTaskHandler {
  constructor(protected repository: EisenhowerMatrixRepository) {
    super(repository);
  }
}
