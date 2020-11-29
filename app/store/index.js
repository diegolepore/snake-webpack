const gameData = {
	tickRate: 100,
	appleCoords: {
		x: 0,
		y: 0,
	},
	snakeData: {
		x: 0,
		y: 0,
		step: 20,
		direction: 'right',
		tail: [],
		applesEaten: 0,
	},

	boardData: {
		colsNum: 20,
		rowsNum: 20,
	},
    
	domElems: {
		game: document.querySelector("#game"),
		board: document.querySelector("#board")
	}
};

const setAppleCoords = function(axis, val) {
	gameData.appleCoords[axis] = val
};

const setAppleEaten = function() {
	gameData.snakeData.applesEaten += 1;
};

const pushToSnakeTail = function(coordsObj) {
	gameData.snakeData.tail.push(coordsObj);
};

const setSnakeCoords = function(axis, action) {
	if(axis == 'x') {
		switch (action) {
			case 'addStep':
				gameData.snakeData.x += gameData.snakeData.step;
				break;
			case 'substractStep':
				gameData.snakeData.x -= gameData.snakeData.step;
				break;
			case 'lastSquare':
				gameData.snakeData.x = ((gameData.snakeData.step * gameData.boardData.colsNum) - gameData.snakeData.step);
				break;
			case 'firstSquare':
				gameData.snakeData.x = 0;
				break;
			default:
				break;
		}
	} else if(axis == 'y') {
		switch (action) {
			case 'addStep':
				gameData.snakeData.y += gameData.snakeData.step;
				break;
			case 'substractStep':
				gameData.snakeData.y -= gameData.snakeData.step;
				break;
			case 'lastSquare':
				gameData.snakeData.y = ((gameData.snakeData.step * gameData.boardData.rowsNum) - gameData.snakeData.step);
				break;
			case 'firstSquare':
				gameData.snakeData.y = 0;
				break;
			default:
				break;
		}
	}
};

const setDirection = function(dir) {
	gameData.snakeData.direction = dir;
};

export default {
	gameData: Object.freeze(gameData),
	setAppleCoords,
	setAppleEaten,
	pushToSnakeTail,
	setSnakeCoords,
	setDirection,
};