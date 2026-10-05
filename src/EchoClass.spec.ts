import { Echo } from './EchoClass';
import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';

describe('tests for Echo.echo', () => {
  it('should return the same string it receives', async () => {
    const str = 'test';
    const res = await Echo.echo(str);
    expect(res).toEqual(str);
  });

  it('should call axios.get with the correct URL', async () => {
    const spy1 = vi.spyOn(axios, 'get');
    const str = 'test';
    const _res = await Echo.echo(str);
    expect(spy1).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalledTimes(1);
    spy1.mockRestore();
  });
});
