import store from '../store/index'

const { gameData, setAppleCoords } = store;

// APPLE
function appleLogic() {
	const { rowsNum, colsNum } = gameData.boardData;
	const { step } = gameData.snakeData

	const randomX = ((Math.floor(Math.random() * (rowsNum + 1))) * step);
	const randomXFinal = randomX > ((step * rowsNum) - step) ? randomX - step : randomX;
	const randomY = ((Math.floor(Math.random() * (rowsNum + 1))) * step);
	const randomYFinal = randomY > ((step * colsNum) - step) ? randomY - step : randomY;

	setAppleCoords('x', randomXFinal);
	setAppleCoords('y', randomYFinal);
}

function renderApple() {
	const apple = document.querySelector("#apple");
	const info = document.querySelector("#info");

	if (apple) {
		apple.style.left = `${gameData.appleCoords.x}px`;
		apple.style.top = `${gameData.appleCoords.y}px`;
	}

	if (info) {
		info.innerHTML = `Points: ${gameData.snakeData.applesEaten} 🍎`;
	}
}

export default function printApple() {
	appleLogic();
	renderApple();
}