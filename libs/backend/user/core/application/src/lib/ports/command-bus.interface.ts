import { CommandHandlerType } from '@nestjs/cqrs';
import { ICommand } from '../interfaces/command.interface';

export abstract class CommandBus {
  abstract execute<T extends ICommand>(command: T): Promise<any>;
  abstract register(handlers?: CommandHandlerType[]): void;
}
