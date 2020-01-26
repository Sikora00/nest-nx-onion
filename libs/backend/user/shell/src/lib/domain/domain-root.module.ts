import { Module } from '@nestjs/common';
import { UserRepository } from '@onion-first/backend/user/core/domain';
import { MockUserRepository } from '@onion-first/backend/user/infrastructure';

const PROVIDERS = [{ provide: UserRepository, useClass: MockUserRepository }];

@Module({
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class DomainRootModule {}
