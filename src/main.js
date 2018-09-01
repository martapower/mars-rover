export const helloWorld = () => 'Hello world';

export const moveRoversAcrossThePlateau = (input) => {
  const finalPositions = [];

  for (let i = 0; i < input.rovers.length; i++){
    finalPositions.push(moveRoverAcrossThePlateau(input.rovers[i]));
  }
}

export const moveRoverAcrossThePlateau = (input) => {
  let position = input.position;

  for (let i = 0; i < input.movements.length; i ++) {
    position = moveStep(position, input.movements[i]);
  }

  return position;
};

export const moveStep = (position, movement) => {
  if ((position.orientation === 'E' || position.orientation === 'O') && movement === 'M') {
    return {
      x: parseInt(position.x, 10) + 1,
      y: position.y,
      orientation: position.orientation,
    };
  }

  if (position.orientation === 'N') {
    let orientation = 'O';

    if (movement === 'R') {
      orientation = 'E';
    }

    return {
      x: position.x,
      y: position.y,
      orientation,
    };
  }
  if (position.orientation === 'S') {

    let orientation = 'O';

    if (movement === 'L'){
      orientation = 'E';
    }

    return {
      x: position.x,
      y: position.y,
      orientation,
    }


  }
};
