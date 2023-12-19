const { bundleWorkflowCode } = require('@temporalio/worker');
const { writeFile } = require('fs/promises');
const path = require('path');

async function bundle() {
  // Recommended bundle function from temporal sdk
  const { code } = await bundleWorkflowCode({
    // the path here must be the file that exports all workflows
    workflowsPath: path.join(__dirname, '../../../../libs/workflows/src/lib/'),
  });
  // the path here will be the location of the bundled workflow code
  // and will be used for the worker to run the workflows
  const codePath = path.join(
    __dirname,
    '../../../../dist/apps/temporal-worker/apps/temporal-worker/src/workflows/workflow-bundle.js'
  );

  await writeFile(codePath, code);
  console.log(`Bundle written to ${codePath}`);
}

bundle().catch((err) => {
  console.error(err);
  process.exit(1);
});
