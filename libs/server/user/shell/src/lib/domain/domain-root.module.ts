import { Module } from '@nestjs/common';
import { UserRepository } from '@todo-app/server/user/core/domain-services';
import { jsonFilesUserRepositoryFactory } from './providers/json-files-user.repository';

const PROVIDERS = [
  { provide: UserRepository, useFactory: jsonFilesUserRepositoryFactory }
];

@Module({
  providers: PROVIDERS,
  exports: PROVIDERS
})
export class DomainRootModule {}
