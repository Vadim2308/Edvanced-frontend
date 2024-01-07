// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertUnreachable(arg: never): never {
  throw new Error(`${arg}-didn't expect to get here`);
}
