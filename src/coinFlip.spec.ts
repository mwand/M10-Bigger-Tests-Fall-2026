import { describe, expect, it } from 'vitest';
import { coinFlip } from './coinFlip';

const numberFlips = 1_000;
const fractionHeads = 0.5;

describe('coinFlip', () => {
  it.each([{ numberOfTrials: 20, tolerance: 5, fractionHeads: fractionHeads }])(
    'should produce the expected number of heads at $fractionHeads over $numberOfTrials trials',
    ({ numberOfTrials, tolerance, fractionHeads }) => {
      const totalFlips = numberOfTrials * numberFlips;
      const numberOfHeads = Array.from({ length: totalFlips }).filter(() =>
        coinFlip(fractionHeads),
      ).length;
      const expectedHeads = totalFlips * fractionHeads;
      const standardDeviation = Math.sqrt(totalFlips * fractionHeads * (1 - fractionHeads));

      expect(Math.abs(numberOfHeads - expectedHeads)).toBeLessThanOrEqual(
        tolerance * standardDeviation,
      );
    },
  );
});
