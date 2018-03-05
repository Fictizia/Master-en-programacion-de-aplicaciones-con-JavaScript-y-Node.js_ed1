//function setup(5, "1 2 N", ["L", "M", "L", "M", "L", "M", "L", "M", "M"])

var rover = {
  x: 0,
  y: 0,
  orientation: "N"
}

var cardinalPoints = {
  'N': { 'R': "E", 'L': "W" },
  'E': { 'R': "S", 'L': "N" },
  'S': { 'R': "W", 'L': "E" },
  'W': { 'R': "N", 'L': "S" },
}

function setup(grid, position, itinerary) {
  setPositionAndOrientation(position);
  itinerary.forEach((element) => {
    if (element === "R" || element === "L") {
      turn(element)
    }
    else if (element === "M") {
      move(element)
    }
    else {
      console.log(element, ': Unexpected action.')
    }
  });
  console.log(rover.x + ' ' + rover.y + ' ' + rover.orientation)
}


function setPositionAndOrientation(position) {
  var positionAndOrientation = position.split(" ");
  rover.x = parseInt(positionAndOrientation[0]);
  rover.y = parseInt(positionAndOrientation[1]);
  rover.orientation = positionAndOrientation[2];
}

function turn(direction) {
  if (direction && rover.orientation) {
    rover.orientation = cardinalPoints[rover.orientation][direction];
  }
  else {
    console.log('Turn the vehicle is imposible due to a wrong value.')
  }
}

function move() {
  if (rover.orientation &&
    rover.orientation === 'N' ||
    rover.orientation === 'E' ||
    rover.orientation === 'S' ||
    rover.orientation === 'W') {
    switch (rover.orientation) {
      case 'N':
        rover.y += 1;
        break;
      case 'E':
        rover.x += 1;
        break;
      case 'S':
        rover.y -= 1;
        break;
      case 'W':
        rover.x -= 1;
        break;
    }
  }
  else {
    console.log('Move the vehicle in this direction is imposible.')
  }
}
