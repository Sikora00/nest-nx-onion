import { CommandHandler } from '@nestjs/cqrs';
import {
  AddTaskCommand,
  AddTaskHandler
} from '@todo-app/server/to-do/core/application';
import { ToDoRepository } from '@todo-app/server/to-do/core/domain';

@CommandHandler(AddTaskCommand)
export class AddTaskHandlerImpl extends AddTaskHandler {
  constructor(protected repository: ToDoRepository) {
    super(repository);
  }
}
