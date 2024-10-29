import { Body, Controller, Post } from '@nestjs/common';
import { LectobotAssistantService } from './lectobot-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('lectobot-assistant')
export class LectobotAssistantController {
  constructor(
    private readonly lectobotAssistantService: LectobotAssistantService,
  ) {}

  @Post('create-thread') async createThread() {
    return await this.lectobotAssistantService.createThread();
  }

  @Post('user-question') async userQuestion(@Body() questionDto: QuestionDto) {
    return await this.lectobotAssistantService.userQuestion(questionDto);
  }
}
