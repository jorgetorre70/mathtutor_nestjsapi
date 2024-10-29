import OpenAI from 'openai';

interface Options {
  threadId: string;
  assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {
  const { threadId, assistantId = 'asst_v6IjzmlTp8mGtvYPhuvmN1DQ' } = options;

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    // instructions; Aqui se pueden redefinir las instrucciones del asistente
  });

  //console.log(run);
  return run;
};
