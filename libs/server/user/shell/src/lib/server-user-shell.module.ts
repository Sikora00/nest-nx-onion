import { Global, Module } from '@nestjs/common';
import { ApplicationRootModule } from './application/application-root.module';
import { DomainRootModule } from './domain/domain-root.module';

@Global()
@Module({
  imports: [ApplicationRootModule, DomainRootModule],
  exports: [ApplicationRootModule, DomainRootModule]
})
export class ServerUserShellModule {}
