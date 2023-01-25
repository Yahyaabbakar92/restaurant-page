const content = document.getElementById('content');

function homeElements() {
	const homeMain = document.createElement('main');
	homeMain.setAttribute('id', 'home-main');
	const h1 = document.createElement('h1');
	h1.textContent = 'Home Items';
	homeMain.appendChild(h1);
	content.appendChild(homeMain);

	return homeMain.id;
}

export default homeElements;
