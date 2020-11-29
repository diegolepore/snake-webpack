import store from '../store/index';

const { setDirection } = store;

// EVENT LISTENERS
export default function addEventListeners() {
	document.addEventListener("keydown", function (e) {
		switch (e.code) {
			case 'ArrowRight':
				setDirection('right');
				break;
			case 'ArrowLeft':
				setDirection('left');
				break;
			case 'ArrowDown':
				setDirection('down');
				break;
			case 'ArrowUp':
				setDirection('up');
				break;
		}
	})
}