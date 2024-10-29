import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { ConfigModule } from '@nestjs/config';
import { LectobotAssistantModule } from './lectobot-assistant/lectobot-assistant.module';

@Module({
  imports: [ConfigModule.forRoot(), GptModule, LectobotAssistantModule],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
