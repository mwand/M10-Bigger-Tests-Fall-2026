# M10 Bigger Tests Examples

TypeScript/Vitest examples for CS 4530's testing module, covering test doubles (spies, mocks, stubs), the observer pattern, testing async code, and statistical testing of randomized behavior.

## Setup

```bash
npm install
```

## Examples

| File | Demonstrates |
| --- | --- |
| [`simpleMocks.spec.ts`](src/simpleMocks.spec.ts) | The basics of `vi.fn()`: tracking calls/arguments and customizing return values or implementations. |
| [`coinFlip.ts`](src/coinFlip.ts) / [`coinFlip.spec.ts`](src/coinFlip.spec.ts) | Statistically testing randomized behavior by checking observed outcomes fall within a tolerance of the expected distribution. |
| [`clockWithObserverPattern.ts`](src/clockWithObserverPattern.ts) / [`.spec.ts`](src/clockWithObserverPattern.spec.ts) | A producer/listener (observer pattern) implementation, tested using a hand-written test listener. |
| [`clockWithSpy.spec.ts`](src/clockWithSpy.spec.ts) | The same clock, tested instead with `vi.spyOn` on a real `ClockListener` to assert how/when it's notified. |
| [`vitest-mock-extended.spec.ts`](src/vitest-mock-extended.spec.ts) | Auto-generating a mock implementation of the `IClockListener` interface with `vitest-mock-extended`, instead of hand-writing one. |
| [`EchoClass.ts`](src/EchoClass.ts) / [`EchoClass.spec.ts`](src/EchoClass.spec.ts) | Testing a real network call (via `axios`) and spying on `axios.get` to verify it was called correctly. |
| [`echoClient.ts`](src/echoClient.ts) / [`echoClient.spec.ts`](src/echoClient.spec.ts) | Mocking out a dependency (`Echo.echo`) and forcing `axios.get` to throw, so the test fails loudly if it ever escapes the mock and hits the network. |

## Scripts

```bash
npm run lint        # lint with ESLint
npm run lint:fix     # lint and auto-fix
npm run prettier     # check formatting
npm test             # run tests with coverage (vitest)
npm run vitest       # run vitest in watch mode
```
