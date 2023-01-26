const content = document.getElementById('content');

function headerElements() {
	const headerText = ['Home', 'Menu', 'About', 'Contact'];

	// Header elements being created and appended to one another
	const header = document.createElement('header');
	header.setAttribute('id', 'header');
	const nav = document.createElement('nav');
	nav.classList.add('nav');
	const ul = document.createElement('ul');
	ul.classList.add('nav-list');

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

	// Append to body before div id="content" - header
	document.body.insertAdjacentElement('afterbegin', header);
	header.appendChild(nav);
	nav.appendChild(ul);

	return ul.childNodes;
}

function mainElements() {
	// Main elements being created and appended to one another
	const main = document.createElement('main');
	main.setAttribute('id', 'main');
	const h1 = document.createElement('h1');
	h1.setAttribute('id', 'main-heading');
	h1.textContent = 'Food Is Mood';
	const h2 = document.createElement('h2');
	h2.setAttribute('id', 'sub-heading');
	h2.textContent = 'Surely Ours Is The Best';
	const containerPara = document.createElement('div');
	containerPara.classList.add('para');
	const p1 = document.createElement('p');
	p1.classList.add('main-text');
	p1.textContent =
		'At Food Is Mood, we believe that street food and good health can coexist. We specialize in making delicious and nutritious street food that is perfect for people who are trying to lose weight. Our menu is carefully crafted to include a variety of nutrient-dense, whole foods that will nourish your body and satisfy your taste buds.';
	const p2 = document.createElement('p');
	p2.classList.add('main-text');
	p2.textContent =
		"We source only the freshest, locally-sourced ingredients and prepare them in ways that retain the maximum amount of nutrients. Whether you're looking for a quick snack or a hearty meal, our menu has something for everyone.";
	const p3 = document.createElement('p');
	p3.classList.add('main-text');
	p3.textContent =
		"We are committed to providing delicious and healthy options for our customers. Come find us on the street, and enjoy a meal that will make you feel great about what you're eating. All of our dishes are clearly labeled with calorie, protein, fat, and carbohydrate information.";

	// Append to div with id of "content" - main
	content.appendChild(main);
	main.appendChild(h1);
	main.appendChild(h2);
	main.appendChild(containerPara);
	containerPara.appendChild(p1);
	containerPara.appendChild(p2);
	containerPara.appendChild(p3);
}

function footerElements() {
	// Footer elements being created and appended to one another
	const footer = document.createElement('footer');
	footer.setAttribute('id', 'footer');
	const socialsContainer = document.createElement('div');
	socialsContainer.classList.add('social-media');
	const socialsHeading = document.createElement('h2');
	socialsHeading.setAttribute('id', 'social-heading');
	socialsHeading.textContent = 'Social Media';
	const facebookAnchor = document.createElement('a');
	facebookAnchor.classList.add('social-link');
	facebookAnchor.href = 'https://www.facebook.com/foodismood';
	const facebookFA = document.createElement('i');
	facebookFA.innerHTML = '<i class="fa-brands fa-facebook"></i>';
	const twitterAnchor = document.createElement('a');
	twitterAnchor.classList.add('social-link');
	twitterAnchor.href = 'https://www.twitter.com/foodismood';
	const twitterFA = document.createElement('i');
	twitterFA.innerHTML = '<i class="fa-brands fa-twitter"></i>';
	const instagramAnchor = document.createElement('a');
	instagramAnchor.classList.add('social-link');
	instagramAnchor.href = 'https://www.instagram.com/foodismood';
	const instagramFA = document.createElement('i');
	instagramFA.innerHTML = '<i class="fa-brands fa-instagram"></i>';
	const scheduleContainer = document.createElement('div');
	scheduleContainer.classList.add('schedule');
	const scheduleHeading = document.createElement('h2');
	scheduleHeading.setAttribute('id', 'schedule-heading');
	scheduleHeading.textContent = 'Schedule';
	const scheduleText = document.createElement('p');
	scheduleText.classList.add('schedule-text');
	scheduleText.textContent =
		'Check out our website or social media for our weekly schedule';
	const copyrightText = document.createElement('p');
	copyrightText.classList.add('copyright-text');
	copyrightText.textContent = 'All rights reserved Food Is Mood &copy;2023';

	facebookAnchor.appendChild(facebookFA);
	twitterAnchor.appendChild(twitterFA);
	instagramAnchor.appendChild(instagramFA);

	socialsContainer.appendChild(socialsHeading);
	socialsContainer.appendChild(facebookAnchor);
	socialsContainer.appendChild(twitterAnchor);
	socialsContainer.appendChild(instagramAnchor);

	scheduleContainer.appendChild(scheduleHeading);
	scheduleContainer.appendChild(scheduleText);

	// Append to body after div of id="content" - footer
	content.insertAdjacentElement('afterend', footer);
	footer.appendChild(socialsContainer);
	footer.appendChild(scheduleContainer);
	footer.appendChild(copyrightText);
}

export { headerElements, footerElements, mainElements };
