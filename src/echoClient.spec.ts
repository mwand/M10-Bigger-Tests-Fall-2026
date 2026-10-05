import { echoClient } from './echoClient';
import { Echo } from './EchoClass';
import axios from 'axios';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('tests for echoClient', () => {
  beforeEach(vi.resetAllMocks);
  beforeEach(() => {
    // mock axios.get to always throw an error;
    // if any of our tests call the real axios.get, they will fail with the error
    vi.spyOn(axios, 'get').mockImplementation(() => {
      throw new Error('axios.get should not be called');
    });
  });

  it('echoClient should return its argument twice', async () => {
    const str = 'ABC';
    vi.spyOn(Echo, 'echo').mockImplementation(async (str: string) => Promise.resolve(str));
    const res = await echoClient(str);
    expect(res).toEqual(str + str);
  });
});
