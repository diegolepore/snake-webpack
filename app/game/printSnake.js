import store from "../store/index";
import printTail from './printTail';
import checkSnakeEatApple from './checkSnakeEatApple';

const { gameData, setSnakeCoords } = store;

// SNAKE
function snakeLogic() {
	const { x, y, step, direction } = gameData.snakeData;
	const { colsNum, rowsNum } = gameData.boardData;

	if (direction == 'right') {
		if (x < ((step * colsNum) - step)) {
			setSnakeCoords('x', 'addStep');
		} else {
			setSnakeCoords('x', 'firstSquare');
		}
	}

	if (direction == 'left') {
		if (x > 0) {
			setSnakeCoords('x', 'substractStep');
		} else {
			setSnakeCoords('x', 'lastSquare');
		}
	}

	if (direction == 'up') {
		if (y > 0) {
			setSnakeCoords('y', 'substractStep');
		} else {
			setSnakeCoords('y', 'lastSquare');
		}
	}

	if (direction == 'down') {
		if (y < ((step * rowsNum) - step)) {
			setSnakeCoords('y', 'addStep');
		} else {
			setSnakeCoords('y', 'firstSquare');
		}
	}
}

function renderSnake() {
	const { x, y } = gameData.snakeData;
	const snakeBodyHead = document.querySelector("#snake-body .snake__body-item.head");

	if (snakeBodyHead) {
		snakeBodyHead.style.top = y + 'px';
		snakeBodyHead.style.left = x + 'px';
	}
}

export default function printSnake() {
	printTail();
	snakeLogic();
	renderSnake();
	checkSnakeEatApple();
}