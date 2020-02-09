import {
  addTask,
  CreateTaskWriteModel,
  ToDoRepository
} from '@todo-app/server/to-do/core/domain';
import { ICommandHandler } from '@todo-app/server/shared/port';
import { AddTaskCommand } from './add-task.command';

export class AddTaskHandler implements ICommandHandler<AddTaskCommand> {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute(command: AddTaskCommand): Promise<void> {
    const toDo = await this.toDoRepository.findByUserIdOrCreate(command.userId);
    const createTaskWriteModel: CreateTaskWriteModel = {
      title: command.title,
      important: command.important,
      urgent: command.urgent
    };
    return this.toDoRepository.save(await addTask(toDo, createTaskWriteModel));
  }
}
