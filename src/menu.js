const content = document.getElementById('content');

function menuElements() {
	const menuMain = document.createElement('main');
	menuMain.setAttribute('id', 'menu-main');
	const h1 = document.createElement('h1');
	h1.setAttribute('id', 'menu-heading');
	h1.textContent = 'Menu';
	const menuSection = document.createElement('section');
	menuSection.setAttribute('id', 'menu-section');
	const appetizerHeading = document.createElement('h2');
	appetizerHeading.classList.add('menu-section-heading');
	appetizerHeading.textContent = 'Appetizers';
	const friesItem = document.createElement('div');
	friesItem.classList.add('menu-item');

	content.appendChild(menuMain);
	menuMain.appendChild(h1);
	menuMain.appendChild(menuSection);
	menuSection.appendChild(appetizerHeading);
	menuSection.appendChild(friesItem);
}

export default menuElements;
