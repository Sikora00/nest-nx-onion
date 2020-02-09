import { uuid } from '@todo-app/shared/util-uuid';
import { CreateTaskWriteModel } from './create-task.write-model';
import { EisenhowerMatrix } from './eisenhower-matrix.aggregate';

export function addTask(
  matrix: EisenhowerMatrix,
  createTaskWriteModel: CreateTaskWriteModel
): Promise<EisenhowerMatrix> {
  const newMatrix = { ...matrix };

  const task = {
    title: createTaskWriteModel.title,
    important: createTaskWriteModel.important,
    urgent: createTaskWriteModel.urgent,
    id: uuid()
  };

  if (task.important) {
    if (task.urgent) {
      newMatrix.do.push(task);
    } else {
      newMatrix.schedule.push(task);
    }
  } else {
    if (task.urgent) {
      newMatrix.delegate.push(task);
    } else {
      newMatrix.eliminate.push(task);
    }
  }

  return Promise.resolve(newMatrix);
}
