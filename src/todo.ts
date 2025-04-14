/**
 * The exception that gets thrown when developers are too lazy to implement something.
 * Perfect for those "I'll do it later" moments that never actually happen.
 */
export class NotImplementedError extends Error {
  constructor(message: string = "An operation is not implemented.") {
    super(message);
  }
}

/**
 * The ultimate procrastination tool for developers!
 *
 * Use this when you absolutely, positively don't want to deal with
 * implementing something right now. Future You will thank Present You
 * for the entertaining runtime errors.
 *
 * @example
 * ```ts
 * // When you're too tired to write that algorithm
 * function calculateComplexThing() {
 *   TODO("brain.exe has stopped working");
 * }
 * ```
 *
 * @example
 * ```ts
 * // When the spec is unclear and you'd rather crash than guess
 * function handleEdgeCase() {
 *   if (isWeirdCondition) {
 *     TODO();
 *   }
 * }
 * ```
 *
 * @param reason - Optional excuse for your laziness
 * @throws {NotImplementedError} Always, that's the point
 */
export function TODO(
  reason?: string,
): never {
  throw new NotImplementedError(
    reason ? `An operation is not implemented: ${reason}` : reason,
  );
}
