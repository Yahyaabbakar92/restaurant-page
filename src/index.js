import {
	headerElements,
	footerElements,
	mainElements,
	webpageElements,
} from './webpage';
import homeElements from './home';
import menuElements from './menu';
import aboutElements from './about';
import contactElements from './contact';

headerElements().forEach((navItem) => {
	navItem.addEventListener('click', () => {
		// console.log(navItem.textContent);
		// console.log(mainElements());
		console.log(homeElements());
		console.log(menuElements());
		console.log(aboutElements());
		console.log(contactElements());
	});
});
mainElements();
footerElements();
