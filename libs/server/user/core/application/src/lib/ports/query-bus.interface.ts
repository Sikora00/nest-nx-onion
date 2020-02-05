import { Type } from '@nestjs/common';
import { IQueryHandler } from '../interfaces/query-handler.interface';
import { IQuery } from '../interfaces/query.interface';
import { IQueryResult } from '../interfaces/query-result.interface';

export declare type QueryHandlerType = Type<
  IQueryHandler<IQuery, IQueryResult>
>;
export abstract class QueryBus {
  abstract execute<T extends IQuery, TResult extends IQueryResult>(
    query: T
  ): Promise<TResult>;
  abstract register(handlers?: QueryHandlerType[]): void;
}
