import { PureFiboPipe } from './pure-fibo.pipe';

describe('PureFiboPipe', () => {
  it('create an instance', () => {
    const pipe = new PureFiboPipe();
    expect(pipe).toBeTruthy();
  });
});
