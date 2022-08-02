const container = document.querySelector('.container');

const defaultGrid = () => { 
	for (let i = 0;i < 256; i++) {
	let grid = document.createElement('div');
	grid.classList.add('grid');
	container.appendChild(grid);
	}

	hover();
}

const createNewGridButton = document.querySelector('button#createGrid');

createNewGridButton.addEventListener('click', () => {
	removeGrid();
	createGrid();
})


const removeGrid = (defaultGrid) => {
	const getGridItems = document.querySelectorAll('.grid');
	getGridItems.forEach(gridItem => {
		container.removeChild(gridItem);
	})
}

const createGrid = () => {
	const input = prompt('What size grid do you want? E.g. 16x16, enter 16');

	if (input > 100) {
		alert('Why You Break Me????? ');
		createGrid();
	} else {

	container.style.setProperty("--columns-row", input);

	for (let i = 0; i < input * input; i++) {
	let grid = document.createElement('div');
	grid.classList.add('grid');
	container.appendChild(grid);
	}

	hover();	
	}
}

const hover = () => {
	const grid = document.querySelectorAll('.grid');
	grid.forEach(grid => {
	grid.addEventListener('mouseover', () => {
		grid.style.backgroundColor = 'red';
		})
	})
}

defaultGrid();