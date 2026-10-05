/**
 * Simulates a coin flip with a given probability of landing on heads.
 * @param fractionHeads - The probability of the coin landing on heads (between 0 and 1).
 * @returns {boolean} - True if the coin lands on heads, false otherwise.
 */
export function coinFlip(fractionHeads: number): boolean {
  return Math.random() < fractionHeads;
}
