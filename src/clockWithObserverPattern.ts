export interface IClockWithListeners {
  reset(): void; // resets the time to 0
  tick(): void; // increment time and notify all listeners
  // add a listener and initialize it with the current time
  addListener(listener: IClockListener): void;
}

export interface IClockListener {
  // @param t - the current time, as reported by the clock
  notify(t: number): void;
}

export class ProducerClock implements IClockWithListeners {
  private _time = 0;

  reset(): void {
    this._time = 0;
  }

  tick(): void {
    this._time++;
    this._notifyAll();
  }

  private _observers: IClockListener[] = [];

  public addListener(obs: IClockListener): void {
    this._observers.push(obs);
    obs.notify(this._time);
  }

  private _notifyAll(): void {
    this._observers.forEach((obs) => obs.notify(this._time));
  }
}

export class ClockListener implements IClockListener {
  private _time = 0;

  constructor(theclock: IClockWithListeners) {
    theclock.addListener(this);
  }

  notify(t: number): void {
    this._time = t;
  }

  getTime(): number {
    return this._time;
  }
}
