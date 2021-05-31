let input = document.getElementById('input');
let ol = document.getElementById('ol');
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let green = document.getElementById('green');

let todoList = [];

function addText() {
	todoList = todoList || [];
	let newList = {
		task: input.value,
	};
	
	todoList.push(newList);
	json = JSON.stringify(todoList);
	localStorage.setItem('arr', json);
	input.value = '';
	showList();
};

function showList() {
	let showItem = '';
	todoList.forEach(function(item, index) {
		showItem += `<li>${item.task}</li>`;
		ol.innerHTML = showItem;	
	});
}


window.addEventListener('load', function() {
	blue.innerHTML = JSON.parse(localStorage.getItem('blue'));
	red.innerHTML = JSON.parse(localStorage.getItem('red'));
	green.innerHTML = JSON.parse(localStorage.getItem('green'));

	json = localStorage.getItem('arr');
	todoList = JSON.parse(json);

	let showItem = '';

	todoList.forEach(function(item, index) {
		showItem += `<li>${item.task}</li>`;
		ol.innerHTML = showItem;	
	});
});

function deleteText() {
	localStorage.clear();
	window.location.reload();
};

function addBlue() {	
	blue.innerHTML = Number(blue.innerHTML) + 1;
	localStorage.setItem('blue', JSON.stringify(blue.innerHTML));
}

function addRed() {	
	red.innerHTML = Number(red.innerHTML) + 1;
	localStorage.setItem('red', JSON.stringify(red.innerHTML));
}

function addGreen() {	
	green.innerHTML = Number(green.innerHTML) + 1;
	localStorage.setItem('green', JSON.stringify(green.innerHTML));
}
