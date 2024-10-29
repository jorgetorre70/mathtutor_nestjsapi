import { Module } from '@nestjs/common';
import { LectobotAssistantService } from './lectobot-assistant.service';
import { LectobotAssistantController } from './lectobot-assistant.controller';

@Module({
  controllers: [LectobotAssistantController],
  providers: [LectobotAssistantService],
})
export class LectobotAssistantModule {}
