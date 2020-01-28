import { CommandModule, CommandService } from 'nestjs-command';
import { NestFactory } from '@nestjs/core';
import { BackendUserUiCliModule } from '@onion-first/backend/user/ui/cli';

(async () => {
  const app = await NestFactory.createApplicationContext(BackendUserUiCliModule, {
    logger: false // no logger
  });
  app.select(CommandModule).get(CommandService).exec();
})();
