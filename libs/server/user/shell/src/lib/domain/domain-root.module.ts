import { Module } from '@nestjs/common';
import { UserRepository } from '@todo-app/server/user/core/domain';
import { MockUserRepository } from '@todo-app/server/user/infrastructure';

const PROVIDERS = [{ provide: UserRepository, useClass: MockUserRepository }];

@Module({
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class DomainRootModule {}
