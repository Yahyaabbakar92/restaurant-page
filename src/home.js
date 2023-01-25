const content = document.getElementById('content');

function homeElements() {
	const main = document.createElement('main');
	main.setAttribute('id', 'main');
	const img = document.createElement('img');
	img.classList.add('main-img');
	img.setAttribute('src', '/dist/imgs/sandwich.jpg');
	img.setAttribute('alt', 'A sandwich being held');
	const h1 = document.createElement('h1');
	h1.setAttribute('id', 'main-heading');
	h1.textContent = 'Food Is Mood';
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
	main.appendChild(img);
	main.appendChild(h1);
	main.appendChild(p1);
	main.appendChild(p2);
	main.appendChild(p3);
}

export default homeElements;
