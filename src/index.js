import { headerElements, footerElements, mainElements } from './webpage';
import homeElements from './home';
import menuElements from './menu';
import aboutElements from './about';
import contactElements from './contact';

const content = document.getElementById('content');

headerElements().forEach((navItem) => {
	navItem.addEventListener('click', () => {
		if (navItem.textContent === 'Menu') {
			content.innerHTML = '';
			menuElements();
		} else if (navItem.textContent === 'About') {
			content.innerHTML = '';
			aboutElements();
		} else if (navItem.textContent === 'Contact') {
			content.innerHTML = '';
			contactElements();
		} else {
			content.innerHTML = '';
			homeElements();
		}
	});
});

mainElements();
footerElements();
