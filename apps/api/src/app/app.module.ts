import { Global, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { Repository } from './core/repository.interface';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { LocalUserRepository } from './infrastructure/local-user.repository';

@Global()
@Module({
  imports: [CoreModule, InfrastructureModule],
  controllers: [AppController],
  providers: [AppService, {provide: Repository, useClass: LocalUserRepository}],
  exports: [{provide: Repository, useClass: LocalUserRepository}]
})
export class AppModule {}
