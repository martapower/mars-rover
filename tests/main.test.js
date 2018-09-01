import {
  helloWorld,
  moveRoversAcrossThePlateau,
} from '../src/main';

describe('helloWorld()', () => {
  test('should return a message', () => {
    expect(helloWorld()).toEqual('Hello world');
  });
});

describe('moveRoversAcrossThePlateau()', () => {
  test('should return the final Rovers input', () => {
    const input = {
      limitsOfPlateau: {
        x: 5,
        y: 5,
      },
      rovers: [
        {
          position: {
            x: 1,
            y: 2,
            orientation: 'N',
          },
          movements: [
            'L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'
          ],
        },
        {
          position: {
            x: 3,
            y: 3,
            orientation: 'E',
          },
          movements: [
            'M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'
          ],
        },
      ]
    }

    expect(moveRoversAcrossThePlateau())
      .toEqual(
        [
          {
            x: 1,
            y: 3,
            orientation: 'N',
          },
          {
            x: 5,
            y: 1,
            orientation: 'E',
          },
        ]
      );
  });
});
