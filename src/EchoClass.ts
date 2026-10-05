import axios from 'axios';

/** Shape of the JSON body returned by https://httpbin.org/get */
interface HttpBinGetResponse {
  args: Record<string, string>;
  headers: Record<string, string>;
  origin: string;
  url: string;
}

export class Echo {
  /**
   * @argument a string
   * @returns a promise to return the same string
   * @requires axios
   * @calls https://httpbin.org/get?answer=${str}
   */
  public static async echo(str: string): Promise<string> {
    const res = await axios.get<HttpBinGetResponse>(`https://httpbin.org/get?answer=${str}`);
    return res.data.args.answer;
  }
}
