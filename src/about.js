const content = document.getElementById('content');

function aboutElements() {
	const aboutMain = document.createElement('main');
	aboutMain.setAttribute('id', 'about-main');
	const h1 = document.createElement('h1');
	h1.textContent = 'About';
	h1.setAttribute('id', 'about-heading');
	const p1 = document.createElement('p');
	const p2 = document.createElement('p');
	const p3 = document.createElement('p');
	const p4 = document.createElement('p');

	p1.classList.add('about-text');
	p2.classList.add('about-text');
	p3.classList.add('about-text');
	p4.classList.add('about-text');

	p1.textContent =
		' Food Is Mood is a food truck that specializes in healthy street food. We believe that eating delicious and nutritious food should not be a luxury and that everyone should have access to it. We are passionate about providing delicious and healthy options to our customers, and our mission is to make it easy and accessible for people to eat well while on the go. ';
	p2.textContent =
		'Our menu is carefully crafted to include a variety of nutrient-dense, whole foods that will nourish your body and satisfy your taste buds. We source only the freshest, locally-sourced ingredients and prepare them in ways that retain the maximum amount of nutrients. ';
	p3.textContent =
		'We are committed to transparency and providing our customers with all the information they need to make informed choices about their food. All of our dishes are clearly labeled with calorie, protein, fat, and carbohydrate information. ';
	p4.textContent =
		'Our team is made up of experienced chefs, dietitians, and food enthusiasts who are dedicated to making healthy eating accessible and enjoyable for everyone. We invite you to come and try our delicious and healthy street food and see for yourself how good eating well can feel.';

	content.appendChild(aboutMain);
	aboutMain.appendChild(h1);
	aboutMain.appendChild(p1);
	aboutMain.appendChild(p2);
	aboutMain.appendChild(p3);
	aboutMain.appendChild(p4);

	// return aboutMain.id;
}

export default aboutElements;
