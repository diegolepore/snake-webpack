import './styles/index.scss';
import store from './store/index';
import buildBoard from './game/buildBoard';
import printApple from './game/printApple';
import printSnake from './game/printSnake';
import addEventListeners from './game/addEventListeners';

const { gameData } = store;

// INIT
function init() {
	buildBoard();
	printApple();
	addEventListeners();

	let nextTimeToTick = 0;

	function nextAnimationFrame(timestamp) {
		if (nextTimeToTick <= timestamp) {
			nextTimeToTick = timestamp + gameData.tickRate;
			printSnake();
		}
		requestAnimationFrame(nextAnimationFrame);
	}
	requestAnimationFrame(nextAnimationFrame);
}

init();
