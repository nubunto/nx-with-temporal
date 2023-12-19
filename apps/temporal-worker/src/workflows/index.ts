// we have to do this so Nx knows it needs to bundle this dependency
// it doesn't pick up the `require.resolve` call from `main.ts`
export * from '@nx-temporal/workflows'
