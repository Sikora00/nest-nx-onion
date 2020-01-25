import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Repository } from './core/repository.interface';
import { ApiUserRepository } from './infrastructure/api-user.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule],
  providers: [{ provide: Repository, useClass: ApiUserRepository }],
  bootstrap: [AppComponent]
})
export class AppModule {}
