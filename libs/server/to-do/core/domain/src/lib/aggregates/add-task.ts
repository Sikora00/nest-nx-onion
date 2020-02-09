import { uuid } from '@todo-app/shared/util-uuid';
import { CreateTaskWriteModel } from './create-task.write-model';
import { ToDo } from './to-do.aggregate';

export function addTask(
  toDo: ToDo,
  createTaskWriteModel: CreateTaskWriteModel
): Promise<ToDo> {
  const newToDo = { ...toDo };

  const task = {
    title: createTaskWriteModel.title,
    important: createTaskWriteModel.important,
    urgent: createTaskWriteModel.urgent,
    id: uuid()
  };

  if (task.important) {
    if (task.urgent) {
      newToDo.do.push(task);
    } else {
      newToDo.schedule.push(task);
    }
  } else {
    if (task.urgent) {
      newToDo.delegate.push(task);
    } else {
      newToDo.eliminate.push(task);
    }
  }

  return Promise.resolve(newToDo);
}
