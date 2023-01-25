const content = document.getElementById('content');

function contactElements() {
	const contactMain = document.createElement('main');
	contactMain.setAttribute('id', 'contact-main');
	const h1 = document.createElement('h1');
	h1.textContent = 'Contact Items';
	contactMain.appendChild(h1);
	content.appendChild(contactMain);

	return contactMain.id;
}

export default contactElements;
