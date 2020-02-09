import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiUserRepository } from './api-user.repository';
import { LocalUserRepository } from './local-user.repository';

@NgModule({
  providers: [ApiUserRepository, HttpClientModule, LocalUserRepository]
})
export class InfrastructureModule {}
