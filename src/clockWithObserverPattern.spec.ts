import { describe, test, expect } from 'vitest';
import {
  ProducerClock,
  type IClockListener,
  type IClockWithListeners,
} from './clockWithObserverPattern';
class ClockListenerForTest implements IClockListener {
  private _time = 0;

  constructor(theclock: IClockWithListeners) {
    // this._clock = theclock;
    theclock.addListener(this);
  }

  notify(t: number): void {
    this._time = t;
  }

  getTime(): number {
    return this._time;
  }
}

const clock1 = new ProducerClock();
const listener1 = new ClockListenerForTest(clock1);

describe('tests for ProducerClock', () => {
  test('after reset, listener should return 0', () => {
    clock1.reset();
    expect(listener1.getTime()).toBe(0);
  });
  test('after one tick, listener should return 1', () => {
    clock1.reset();
    clock1.tick();
    expect(listener1.getTime()).toBe(1);
  });
  test('after two ticks, listener should return 2', () => {
    clock1.reset();
    clock1.tick();
    clock1.tick();
    expect(listener1.getTime()).toBe(2);
  });
});
