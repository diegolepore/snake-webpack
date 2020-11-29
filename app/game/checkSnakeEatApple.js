import store from "../store/index";
import printApple from "./printApple";

const { gameData, setAppleEaten, pushToSnakeTail } = store;

function renderTailPortion() {
	const snakeBody = document.querySelector("#snake-body");
	const tailElem = document.createElement("li");
	if (snakeBody && tailElem) {
		tailElem.style.display = "none";
		tailElem.classList.add("snake__body-item", "tail");
		snakeBody.appendChild(tailElem);
	}
}

// CHECK IF SNAKE EATS THE APPLE
export default function checkSnakeEatApple() {
	if (gameData.snakeData.x === gameData.appleCoords.x && gameData.snakeData.y === gameData.appleCoords.y) {
		setAppleEaten();
		pushToSnakeTail({ x: gameData.snakeData.x, y: gameData.snakeData.y })
		printApple();
		renderTailPortion();
	}
}