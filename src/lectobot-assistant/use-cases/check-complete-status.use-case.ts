import OpenAI from 'openai';

interface Options {
  threadId: string;
  runId: string;
}

export const checkCompleteStatusUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { threadId, runId } = options;

  const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);

  if (runStatus.status === 'completed') {
    return runStatus;
  }
  // if the run is not completed, we will wait for 1 second and check again
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return checkCompleteStatusUseCase(openai, options);
};
