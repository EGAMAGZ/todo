export class NotImplementedError extends Error {
  constructor(message: string = "An operation is not implemented.") {
    super(message);
  }
}

export function TODO(): never;

export function TODO(reason: string): never;

export function TODO(
  reason?: string,
): never {
  throw new NotImplementedError(
    reason ? `An operation is not implemented: ${reason}` : reason,
  );
}
