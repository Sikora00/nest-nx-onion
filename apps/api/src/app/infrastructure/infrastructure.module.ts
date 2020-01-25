import { Module } from '@nestjs/common';
import { LocalUserRepository } from './local-user.repository';

@Module({
  providers: [LocalUserRepository]
})
export class InfrastructureModule {

}
