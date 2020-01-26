import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { IQuery } from './query.interface';
import { IQueryResult } from './query-result.interface';

export declare type QueryHandlerType = Type<
  IQueryHandler<IQuery, IQueryResult>
>;
export abstract class QueryBus {
  abstract execute<T extends IQuery, TResult extends IQueryResult>(
    query: T
  ): Promise<TResult>;
  abstract register(handlers?: QueryHandlerType[]): void;
}
