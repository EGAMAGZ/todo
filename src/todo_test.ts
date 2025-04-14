import { assertThrows } from "@std/assert";
import { assertEquals } from "@std/assert";
import { NotImplementedError, TODO } from "./todo.ts";

/**
 * Tests for the TODO function and NotImplementedError class.
 * These tests are as lazy as the functions they're testing.
 */
Deno.test("TODO function throws NotImplementedError", () => {
  // Test the basic TODO() call
  assertThrows(
    () => TODO(),
    NotImplementedError,
    "An operation is not implemented.",
    "TODO() should throw with default message",
  );

  // Test TODO with a custom reason
  assertThrows(
    () => TODO("I'm too tired to implement this"),
    NotImplementedError,
    "An operation is not implemented: I'm too tired to implement this",
    "TODO(reason) should throw with custom message",
  );
});

Deno.test("NotImplementedError constructor works as expected", () => {
  // Test default message
  const error1 = new NotImplementedError();
  assertEquals(
    error1.message,
    "An operation is not implemented.",
    "Default message should be set",
  );

  // Test custom message
  const error2 = new NotImplementedError("Coffee machine is broken");
  assertEquals(
    error2.message,
    "Coffee machine is broken",
    "Custom message should be set",
  );
});

Deno.test("TODO function is actually useful for procrastination", () => {
  // This test demonstrates that TODO is perfect for procrastination
  let procrastinationLevel = 0;

  try {
    TODO("Need more coffee before implementing this");
    // This line should never execute
    procrastinationLevel = 100;
  } catch (_e) {
    // We caught the error, which means we successfully procrastinated
    procrastinationLevel = 42; // The answer to life, the universe, and everything
  }

  assertEquals(procrastinationLevel, 42, "Procrastination level should be 42");
});

Deno.test("TODO function is consistent with developer behavior", () => {
  // This test verifies that TODO behaves like a real developer
  const excuses = [
    "Will fix this later",
    "Works on my machine",
    "Not my problem",
    "The intern will handle it",
    "I'll do it in the next sprint",
  ];

  // Test that TODO works with various developer excuses
  for (const excuse of excuses) {
    assertThrows(
      () => TODO(excuse),
      NotImplementedError,
      `An operation is not implemented: ${excuse}`,
      `TODO should work with excuse: ${excuse}`,
    );
  }
});
