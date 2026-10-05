import { Echo } from './EchoClass';

/** calls Echo.echo twice and concatenates the results */
export async function echoClient(str: string) {
  const res1 = await Echo.echo(str);
  const res2 = await Echo.echo(str);
  return res1 + res2;
}
