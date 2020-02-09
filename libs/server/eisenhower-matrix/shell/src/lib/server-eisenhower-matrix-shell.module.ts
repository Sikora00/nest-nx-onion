import { Global, Module } from '@nestjs/common';
import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';
import { JsonFilesPersistence } from '@todo-app/server/shared/port';
import { ApplicationRootModule } from './application/application-root.module';
import { DomainRootModule } from './domain/domain-root.module';

@Global()
@Module({
  imports: [ApplicationRootModule, DomainRootModule],
  exports: [ApplicationRootModule, DomainRootModule]
})
export class ServerEisenhowerMatrixShellModule {}
