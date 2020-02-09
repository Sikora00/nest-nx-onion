import { CommandModule, CommandService } from 'nestjs-command';
import { NestFactory } from '@nestjs/core';
import { ServerUserUiCliModule } from '@todo-app/server/user/ui/cli';

(async () => {
  const app = await NestFactory.createApplicationContext(
    ServerUserUiCliModule,
    {
      logger: false // no logger
    }
  );
  app
    .select(CommandModule)
    .get(CommandService)
    .exec();
})();
