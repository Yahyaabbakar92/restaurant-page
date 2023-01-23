const content = document.getElementById('content');
const headerText = ['Home', 'Menu', 'About', 'Contact'];

function appendElements() {
	// Header elements being created and appended to one another
	const header = document.createElement('header');
	header.setAttribute('id', 'header');
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');

	// Adding headerText values to <li> and <a>
	for (const text of headerText) {
		const li = document.createElement('li');
		const anchor = document.createElement('a');
		anchor.classList.add('nav-link');
		li.textContent = text;
		anchor.href = `#${text}`;

		li.appendChild(anchor);
		ul.appendChild(li);
	}

	// Main elements being created and appended to one another
	const main = document.createElement('main');
	main.setAttribute('id', 'main');

	// Footer elements being created and appended to one another
	const footer = document.createElement('footer');
	footer.setAttribute('id', 'footer');

	// Append to div with id of "content"
	content.appendChild(header);
	header.appendChild(nav);
	nav.appendChild(ul);

	content.appendChild(main);

	content.appendChild(footer);
}

export default appendElements;
