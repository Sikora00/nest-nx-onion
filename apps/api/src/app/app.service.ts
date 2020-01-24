import { Injectable } from '@nestjs/common';
import { Message } from '@onion-first/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
