const content = document.getElementById('content');
const headerText = ['Home', 'Menu', 'About', 'Contact'];

function appendElements() {
	const header = document.createElement('header');
	header.setAttribute('id', 'header');
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	headerText.forEach(() => {
		const li = document.createElement('li');
		// li.textContent = headerText;
		const anchor = document.createElement('a');
		// anchor.href = `#${headerText}`;
		anchor.classList.add('nav-link');

		li.appendChild(anchor);
		ul.appendChild(li);
	});

	const main = document.createElement('main');
	main.setAttribute('id', 'main');

	const footer = document.createElement('footer');
	footer.setAttribute('id', 'footer');

	content.appendChild(header);
	header.appendChild(nav);
	nav.appendChild(ul);

	content.appendChild(main);

	content.appendChild(footer);
}

export default appendElements;
