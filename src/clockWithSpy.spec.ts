import { describe, test, expect, beforeEach, vi } from 'vitest';
import { ClockListener, ProducerClock } from './clockWithObserverPattern';

const clock1 = new ProducerClock();
const clockClient = new ClockListener(clock1);
const notifySpy = vi.spyOn(clockClient, 'notify');
describe('tests for ProducerClock', () => {
  beforeEach(() => {
    notifySpy.mockClear(); // Clear the mock function's history
  });
  test('after one tick, listener should return 1', () => {
    clock1.reset();
    clock1.tick();
    expect(notifySpy).toHaveBeenLastCalledWith(1);
  });
  test('after two ticks, listener should return 2', () => {
    clock1.reset();
    clock1.tick();
    expect(notifySpy).toHaveBeenLastCalledWith(1);
    clock1.tick();
    expect(notifySpy).toHaveBeenLastCalledWith(2);
    expect(notifySpy).toHaveBeenCalledTimes(2);
  });
});
