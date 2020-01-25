import { Module } from '@nestjs/common';
import { ListUsersQuery } from './list-users.query';

@Module({exports: [ListUsersQuery], providers: [ListUsersQuery]})
export class CoreModule {
}
