# TODO

> The ultimate procrastination tool for TypeScript developers!

[![JSR](https://jsr.io/badges/@egamagz/todo)](https://jsr.io/@egamagz/todo)
[![JSR Score](https://jsr.io/badges/@egamagz/todo/score)](https://jsr.io/@egamagz/todo/score)
![GitHub License](https://img.shields.io/github/license/egamagz/todo)
![GitHub Release](https://img.shields.io/github/v/release/egamagz/todo)

## What is this?

This is a tiny, sarcastic library that helps you procrastinate with style.
Instead of leaving those boring `// TODO: implement this` comments that everyone
ignores, use this library to make your procrastination more... _interactive_.

## Installation

```bash
# Using Deno
deno add jsr:@egamagz/todo

# Using npm
npx jsr add @egamagz/todo

# Using Bun
bunx jsr add @egamagz/todo
```

## Usage

```typescript
import { TODO } from "@egamagz/todo";

// When you're too tired to write that algorithm
function calculateComplexThing() {
  TODO("brain.exe has stopped working");
}

// When the spec is unclear and you'd rather crash than guess
function handleEdgeCase() {
  if (isWeirdCondition) {
    TODO();
  }
}

// When you're delegating to your future self (who will definitely have more time)
function implementFeature() {
  TODO("Future me will handle this");
}

// When you're in a meeting and need to look busy
function generateReport() {
  TODO("Need more coffee before implementing this");
}
```

## Features

- **Runtime Errors**: Why wait until production to discover your laziness? Get
  those errors now!
- **Customizable Excuses**: Make your procrastination personal with custom error
  messages.
- **Zero Dependencies**: Because even adding dependencies is too much work.
- **TypeScript Support**: Because we're not savages.
- **Tiny Bundle Size**: It's literally just a function that throws an error. How
  much smaller can it get?

## Why?

Because sometimes you need to:

- Make it clear that something is intentionally not implemented
- Prevent accidental usage of incomplete code
- Give your future self (or your successor) a good laugh
- Document your procrastination in a way that can't be ignored by linters

## Inspiration

This library is inspired by Kotlin's `TODO()` function, which serves a similar
purpose. The Kotlin standard library includes a `TODO()` function that throws a
`NotImplementedError` when called, making it impossible to miss unimplemented
functionality. This approach is more robust than simple comments that can be
easily overlooked.

## License

MIT - Because even licensing is too much work to think about.

## Contributing

Feel free to contribute! But don't expect me to implement your suggestions
anytime soon. 😉

```typescript
// TODO: Add contribution guidelines
```
