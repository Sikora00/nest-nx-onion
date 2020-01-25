import { Global, Module } from '@nestjs/common';
import {
  MockUserRepository,
  UserRepository
} from '@onion-first/backend/user/core/domain';
import { BackendUserUiApiRestModule } from '@onion-first/backend/user/ui/api/rest';

@Global()
@Module({
  imports: [BackendUserUiApiRestModule],
  providers: [{ provide: UserRepository, useClass: MockUserRepository }],
  exports: [{ provide: UserRepository, useClass: MockUserRepository }]
})
export class BackendUserShellModule {}
