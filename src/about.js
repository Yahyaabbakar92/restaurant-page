const content = document.getElementById('content');

function aboutElements() {
	const aboutMain = document.createElement('main');
	aboutMain.setAttribute('id', 'about-main');
	const h1 = document.createElement('h1');
	h1.textContent = 'About Items';
	aboutMain.appendChild(h1);
	content.appendChild(aboutMain);

	// return aboutMain.id;
}

export default aboutElements;
