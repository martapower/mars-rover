import {
  helloWorld,
} from '../src/main';

describe('helloWorld()', () => {
  test('should return a message', () => {
    expect(helloWorld()).toEqual('Hello world');
  });
});
