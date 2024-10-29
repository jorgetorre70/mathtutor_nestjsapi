// import { Body, Controller, Post } from '@nestjs/common';
// import { GptService } from './gpt.service';
// import { ProblemSolverDto } from './dtos';

// @Controller('gpt')
// export class GptController {
//   constructor(private readonly gptService: GptService) {}

//   @Post('problem-solver')
//   problemSolver(@Body() problemSolverDto: ProblemSolverDto) {
//     return this.gptService.problemSolver(problemSolverDto);
//   }
// }
import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ProblemSolverDto } from './dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('problem-solver')
  async problemSolver(@Body() problemSolverDto: ProblemSolverDto) {
    const { userId, prompt } = problemSolverDto;

    // Get the existing conversation history
    const conversationHistory = this.gptService.getConversationHistory(userId);

    // Call the problem solver with the conversation history
    const response = await this.gptService.problemSolver({
      userId,
      prompt,
      conversationHistory,
    });

    // Update the conversation history with the new interaction
    this.gptService.addToConversationHistory(userId, {
      role: 'user',
      content: prompt,
    });
    this.gptService.addToConversationHistory(userId, {
      role: 'assistant',
      content: response.message,
    });

    return response;
  }
}
