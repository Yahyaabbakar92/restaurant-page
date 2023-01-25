const content = document.getElementById('content');

function menuElements() {
	const menuMain = document.createElement('main');
	menuMain.setAttribute('id', 'menu-main');
	const h1 = document.createElement('h1');
	h1.textContent = 'Menu Items';
	menuMain.appendChild(h1);
	content.appendChild(menuMain);

	// return menuMain.id;
}

export default menuElements;
