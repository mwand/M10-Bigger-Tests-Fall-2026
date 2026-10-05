import { describe, test, expect, beforeEach } from 'vitest';
import { mock, mockClear } from 'vitest-mock-extended';
import { type IClockListener, ProducerClock } from './clockWithObserverPattern';

const clock1 = new ProducerClock();
//Automatically create an implementation of IClockListener, each method is a mock function
const listener1 = mock<IClockListener>();
clock1.addListener(listener1);

describe('tests for ProducerClock', () => {
  beforeEach(() => {
    mockClear(listener1); //Clear the mock function's history, but leave the mock implementation as is
  });
  test('after one tick, listener should have been notified with 1', () => {
    clock1.reset();
    clock1.tick();
    expect(listener1.notify).toHaveBeenLastCalledWith(1);
  });
  test('after two ticks, listener should have been notified with 1 and 2', () => {
    clock1.reset();
    clock1.tick();
    expect(listener1.notify).toHaveBeenLastCalledWith(1);
    clock1.tick();
    expect(listener1.notify).toHaveBeenLastCalledWith(2);
    expect(listener1.notify).toHaveBeenCalledTimes(2);
  });
});
