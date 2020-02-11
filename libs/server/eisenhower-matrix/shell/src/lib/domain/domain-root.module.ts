import { Module } from '@nestjs/common';
import { EisenhowerMatrixRepository } from '@todo-app/server/eisenhower-matrix/core/domain-services';
import { toDoJsonFileRepositoryFactory } from './providers/eisenhower-matrix-json-file.repository';

const PROVIDERS = [
  {
    provide: EisenhowerMatrixRepository,
    useFactory: toDoJsonFileRepositoryFactory
  }
];

@Module({
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class DomainRootModule {}
