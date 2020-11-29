import store from "../store/index";

const { gameData } = store;

// BOARD
export default function buildBoard() {
	const { colsNum, rowsNum } = gameData.boardData;
	const { board } = gameData.domElems;
	//rows
	for (let i = 0; i < rowsNum; i++) {
		let boardRow = document.createElement("ul")
		boardRow.classList.add("snake__board-row")
		//cols
		for (let j = 0; j < colsNum; j++) {
			let boardCol = document.createElement("li")
			boardCol.classList.add("snake__board-col")
			boardRow.appendChild(boardCol)
		}
		if(board) {
			board.appendChild(boardRow)
		}
	}
}