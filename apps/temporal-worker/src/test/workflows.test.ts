import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import * as activities from '@nx-temporal/activities';
import { TestWorkflowEnvironment } from '@temporalio/testing';
import { Worker } from '@temporalio/worker';
import { v4 as uuid4 } from 'uuid';
import { example } from '../workflows';

describe('Example workflow', () => {
  let testEnv: TestWorkflowEnvironment;

  beforeEach(async () => {
    testEnv = await TestWorkflowEnvironment.createLocal();
  });

  afterEach(async () => {
    await testEnv?.teardown();
  });

  test('successfully completes the Workflow', async () => {
    const { client, nativeConnection } = testEnv;
    const taskQueue = 'hello-world';

    const worker = await Worker.create({
      connection: nativeConnection,
      taskQueue,
      workflowsPath: require.resolve('@nx-temporal/workflows'),
      activities,
    });

    const result = await worker.runUntil(
      client.workflow.execute(example, {
        args: ['Temporal'],
        workflowId: uuid4(),
        taskQueue,
      })
    );
    expect(result).toBe('Hello, Temporal!');
  });
});
