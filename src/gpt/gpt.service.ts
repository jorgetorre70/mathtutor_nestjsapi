// import { Injectable } from '@nestjs/common';
// import { problemSolverUseCase } from './use-cases';
// import { ProblemSolverDto } from './dtos';
// import { OpenAI } from 'openai';

// @Injectable()
// export class GptService {
//   private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//   async problemSolver(problemSolverDto: ProblemSolverDto) {
//     return await problemSolverUseCase(this.openai, {
//       prompt: problemSolverDto.prompt,
//       conversationHistory: [],
//     });
//   }
// }

import { Injectable } from '@nestjs/common';
import { problemSolverUseCase } from './use-cases';
import { ProblemSolverDto } from './dtos';
//import { DocumentService } from './gpt.docservice';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  private conversations: Map<
    string,
    Array<OpenAI.Chat.ChatCompletionMessageParam>
  > = new Map();
  //private documentContent: string;

  // constructor(private documentService: DocumentService) {
  //   this.loadDocumentContent();
  // }

  // private async loadDocumentContent() {
  //   this.documentContent = await this.documentService.extractTextFromDoc(
  //     './nest-mate/Ejercicios_Limites_Latex.docx',
  //   );
  // }

  async problemSolver({
    userId,
    prompt,
    conversationHistory,
  }: ProblemSolverDto & {
    conversationHistory: Array<OpenAI.Chat.ChatCompletionMessageParam>;
  }) {
    return await problemSolverUseCase(this.openai, {
      prompt,
      conversationHistory,
    });
  }

  getConversationHistory(
    userId: string,
  ): Array<OpenAI.Chat.ChatCompletionMessageParam> {
    return this.conversations.get(userId) || [];
  }

  addToConversationHistory(
    userId: string,
    message: OpenAI.Chat.ChatCompletionMessageParam,
  ) {
    const history = this.getConversationHistory(userId);
    history.push(message);
    this.conversations.set(userId, history);
  }

  clearConversationHistory(userId: string) {
    this.conversations.delete(userId);
  }
}
