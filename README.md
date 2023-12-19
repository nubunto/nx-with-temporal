# Nx <3 Temporal

This example app demonstrates how to put together an Nx integrated monorepo for a Temporal worker, together with workflows and activities.

## Run

Make sure `nx` is in the global scope:

```bash
$ npm i -g nx
```

Make sure Temporal Server is running:

```bash
temporal server start-dev
```

Afterwards:

```bash
$ pnpm install
$ nx serve temporal-worker
```


This will start a TS SDK Temporal worker that is basically the same as the `hello-world` sample. It will not bundle the workflows for development speed, but we should bundle for production!

## Bundling

Run:

```bash
$ nx bundle temporal-worker
```

This will create a Temporal worker that reads from the workflow bundle. It also bundles the workflows.

Run the worker with the bundled workflows as:

```bash
$ STAGE=production node dist/apps/temporal-worker/main.js
```

