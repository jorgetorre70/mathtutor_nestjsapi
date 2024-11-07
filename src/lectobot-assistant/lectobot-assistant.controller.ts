import { Body, Controller, Post } from '@nestjs/common';
import { LectobotAssistantService } from './lectobot-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('lectobot-assistant')
@UseCors({
  origin: [
    'https://main.d1p89hswv7ju6x.amplifyapp.com/',
    'https://aimathmentor.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
})
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
function UseCors(arg0: {
  // Añade esta línea
  origin: string[];
  methods: string[];
  allowedHeaders: string[];
  credentials: boolean;
}): (
  target: typeof LectobotAssistantController,
) => void | typeof LectobotAssistantController {
  throw new Error('Function not implemented.');
}
