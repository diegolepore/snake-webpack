import store from "../store/index";

const { gameData } = store;

//SNAKE TAIL
function tailLogic() {
	const { x, y, tail } = gameData.snakeData;
	const tailLength = tail.length;
	if (tailLength) {
		for (let i = 1; i < tailLength; i++) {
			tail[i - 1] = tail[i];
		}
		tail[(tailLength - 1)] = { x, y };
	}
}

function renderTail() {
	const snakeBodyTailItems = Array.from(document.querySelectorAll(".snake__body-item.tail"));
	const { tail } = gameData.snakeData;

	snakeBodyTailItems.forEach(function (bodyItem, index) {
		bodyItem.style.left = `${tail[index].x}px`;
		bodyItem.style.top = `${tail[index].y}px`;
		bodyItem.style.display = "block";
	});
}

export default function printTail() {
	tailLogic();
	renderTail();
}