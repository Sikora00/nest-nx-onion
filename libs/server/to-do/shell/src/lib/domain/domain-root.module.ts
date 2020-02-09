import { Module } from '@nestjs/common';
import { ToDoRepository } from '@todo-app/server/to-do/core/domain';
import { toDoJsonFileRepositoryFactory } from './providers/to-do-json-file.repository';

const PROVIDERS = [
  { provide: ToDoRepository, useFactory: toDoJsonFileRepositoryFactory }
];

@Module({
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class DomainRootModule {}
