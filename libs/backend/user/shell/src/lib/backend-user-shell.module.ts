import { Global, Module } from '@nestjs/common';
import { BackendUserUiApiRestModule } from '@onion-first/backend/user/ui/api/rest';
import { ApplicationRootModule } from './application/application-root.module';
import { DomainRootModule } from './domain/domain-root.module';

@Global()
@Module({
  imports: [
    BackendUserUiApiRestModule,
    ApplicationRootModule,
    DomainRootModule
  ],
  exports: [ApplicationRootModule, DomainRootModule]
})
export class BackendUserShellModule {}
