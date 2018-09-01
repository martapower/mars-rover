import {
  helloWorld,
  moveRoversAcrossThePlateau,
  moveRoverAcrossThePlateau,
  moveStep,
} from '../src/main';

describe('helloWorld()', () => {
  test('should return a message', () => {
    expect(helloWorld()).toEqual('Hello world');
  });
});

describe('moveRoversAcrossThePlateau()', () => {
  test('should return the final Rovers position', () => {
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

    expect(moveRoversAcrossThePlateau(input))
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

describe('moveRoverAcrossThePlateau()', () => {
  test('should return the final position of the Rover', () => {
    expect(moveRoverAcrossThePlateau(
      {
        position: {
          x: 1,
          y: 2,
          orientation: 'N',
        },
        movements: [
          'L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'
        ],
      }
    ))
      .toEqual(
        {
          x: 1,
          y: 3,
          orientation: 'N',
        }
      );

    expect(moveRoverAcrossThePlateau(
      {
        position: {
          x: 3,
          y: 3,
          orientation: 'E',
        },
        movements: [
          'M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'
        ],
      }
    ))
    .toEqual(
      {
        x: 5,
        y: 1,
        orientation: 'E',
      }
    )
  });
});

describe('moveStep()', () => {
  test('should return the final position after a move', () => {
    expect(moveStep(
      {
        x: 3,
        y: 3,
        orientation: 'E',
      }, 'M')
    ).toEqual(
      {
        x: 4,
        y: 3,
        orientation: 'E',
      }
    )

    expect(moveStep({
        x: 1,
        y: 2,
        orientation: 'N',
      }, 'L')
    ).toEqual(
      {
        x: 1,
        y: 2,
        orientation: 'O',
      }
    )

    expect(moveStep({
        x: 1,
        y: 2,
        orientation: 'S',
      }, 'L')
    ).toEqual(
      {
        x: 1,
        y: 2,
        orientation: 'E',
      }
    )
  });
})
