const content = document.getElementById('content');

function menuElements() {
	const menuMain = document.createElement('main');
	menuMain.setAttribute('id', 'menu-main');
	const h1 = document.createElement('h1');
	h1.setAttribute('id', 'menu-heading');
	h1.textContent = 'Menu';

	const menuSection = document.createElement('section');
	menuSection.setAttribute('id', 'menu-section');

	const friesItem = document.createElement('div');
	friesItem.classList.add('menu-item');
	const friesImage = document.createElement('img');
	friesImage.classList.add('menu-img');
	friesImage.setAttribute('src', 'dist/imgs/fries.jpg');
	friesImage.setAttribute('alt', 'french fries');
	const friesTitle = document.createElement('h3');
	friesTitle.classList.add('menu-item-title');
	friesTitle.textContent = 'Air Fried French Fries | $2';
	const friesDescription = document.createElement('p');
	friesDescription.classList.add('menu-item-para');
	friesDescription.textContent =
		'Made with the freshest potatoes and cooked to perfection in an air fryer';
	const friesNutrition = document.createElement('p');
	friesNutrition.classList.add('menu-item-para');
	friesNutrition.textContent =
		'Calories: 156 | Protein: 2g | Fat: 8g | Carbs: 20g';

	const wingsItem = document.createElement('div');
	wingsItem.classList.add('menu-item');
	const wingsImage = document.createElement('img');
	wingsImage.classList.add('menu-img');
	wingsImage.setAttribute('src', 'dist/imgs/wings.jpg');
	wingsImage.setAttribute('alt', 'wings');
	const wingsTitle = document.createElement('h3');
	wingsTitle.classList.add('menu-item-title');
	wingsTitle.textContent = 'Air Fried Wings | $4';
	const wingsDescription = document.createElement('p');
	wingsDescription.classList.add('menu-item-para');
	wingsDescription.textContent =
		'Crispy, bold flavored chicken wings, cooked to perfection';
	const wingsNutrition = document.createElement('p');
	wingsNutrition.classList.add('menu-item-para');
	wingsNutrition.textContent =
		'Calories: 300 | Protein: 29g | Fat: 17g | Carbs: 6.5g';

	const wrapsItem = document.createElement('div');
	wrapsItem.classList.add('menu-item');
	const wrapsImage = document.createElement('img');
	wrapsImage.classList.add('menu-img');
	wrapsImage.setAttribute('src', 'dist/imgs/wraps.jpg');
	wrapsImage.setAttribute('alt', 'wraps');
	const wrapsTitle = document.createElement('h3');
	wrapsTitle.classList.add('menu-item-title');
	wrapsTitle.textContent = 'Chicken Wraps | $6';
	const wrapsDescription = document.createElement('p');
	wrapsDescription.classList.add('menu-item-para');
	wrapsDescription.textContent =
		'Our chicken wraps are a must-try for any health-conscious foodie';
	const wrapsNutrition = document.createElement('p');
	wrapsNutrition.classList.add('menu-item-para');
	wrapsNutrition.textContent =
		'Calories: 554 | Protein: 32g | Fat: 28g | Carbs: 45g';

	const burgerItem = document.createElement('div');
	burgerItem.classList.add('menu-item');
	const burgerImage = document.createElement('img');
	burgerImage.classList.add('menu-img');
	burgerImage.setAttribute('src', 'dist/imgs/burger.jpg');
	burgerImage.setAttribute('alt', 'burger');
	const burgerTitle = document.createElement('h3');
	burgerTitle.classList.add('menu-item-title');
	burgerTitle.textContent = 'Chicken Burger | $8';
	const burgerDescription = document.createElement('p');
	burgerDescription.classList.add('menu-item-para');
	burgerDescription.textContent =
		'Our air fried chicken burgers are a true masterpiece of flavor and texture';
	const burgerNutrition = document.createElement('p');
	burgerNutrition.classList.add('menu-item-para');
	burgerNutrition.textContent =
		'Calories: 550 | Protein: 31g | Fat: 33g | Carbs: 32g';

	const pizzaItem = document.createElement('div');
	pizzaItem.classList.add('menu-item');
	const pizzaImage = document.createElement('img');
	pizzaImage.classList.add('menu-img');
	pizzaImage.setAttribute('src', 'dist/imgs/pizza.jpg');
	pizzaImage.setAttribute('alt', 'pizza');
	const pizzaTitle = document.createElement('h3');
	pizzaTitle.classList.add('menu-item-title');
	pizzaTitle.textContent = 'Pepperoni pizza | $9';
	const pizzaDescription = document.createElement('p');
	pizzaDescription.classList.add('menu-item-para');
	pizzaDescription.textContent =
		'Made with low fat cheese, our pizzas is filling, nutritious, and delicious';
	const pizzaNutrition = document.createElement('p');
	pizzaNutrition.classList.add('menu-item-para');
	pizzaNutrition.textContent =
		'Calories: 494 | Protein: 31g | Fat: 10g | Carbs: 22g';

	const juiceItem = document.createElement('div');
	juiceItem.classList.add('menu-item');
	const juiceImage = document.createElement('img');
	juiceImage.classList.add('menu-img');
	juiceImage.setAttribute('src', 'dist/imgs/juices.jpg');
	juiceImage.setAttribute('alt', 'juice');
	const juiceTitle = document.createElement('h3');
	juiceTitle.classList.add('menu-item-title');
	juiceTitle.textContent = 'Fruit Juice | $3';
	const juiceDescription = document.createElement('p');
	juiceDescription.classList.add('menu-item-para');
	juiceDescription.textContent =
		'Our naturally made fruit juices are of the variety';
	const juiceNutrition = document.createElement('p');
	juiceNutrition.classList.add('menu-item-para');
	juiceNutrition.textContent =
		'Calories: 54 | Protein: 0.9g | Fat: 0.6g | Carbs: 16g';

	content.appendChild(menuMain);
	menuMain.appendChild(h1);
	menuMain.appendChild(menuSection);

	menuSection.appendChild(friesItem);
	friesItem.appendChild(friesImage);
	friesItem.appendChild(friesTitle);
	friesItem.appendChild(friesDescription);
	friesItem.appendChild(friesNutrition);

	menuSection.appendChild(wingsItem);
	wingsItem.appendChild(wingsImage);
	wingsItem.appendChild(wingsTitle);
	wingsItem.appendChild(wingsDescription);
	wingsItem.appendChild(wingsNutrition);

	menuSection.appendChild(wrapsItem);
	wrapsItem.appendChild(wrapsImage);
	wrapsItem.appendChild(wrapsTitle);
	wrapsItem.appendChild(wrapsDescription);
	wrapsItem.appendChild(wrapsNutrition);

	menuSection.appendChild(burgerItem);
	burgerItem.appendChild(burgerImage);
	burgerItem.appendChild(burgerTitle);
	burgerItem.appendChild(burgerDescription);
	burgerItem.appendChild(burgerNutrition);

	menuSection.appendChild(pizzaItem);
	pizzaItem.appendChild(pizzaImage);
	pizzaItem.appendChild(pizzaTitle);
	pizzaItem.appendChild(pizzaDescription);
	pizzaItem.appendChild(pizzaNutrition);

	menuSection.appendChild(juiceItem);
	juiceItem.appendChild(juiceImage);
	juiceItem.appendChild(juiceTitle);
	juiceItem.appendChild(juiceDescription);
	juiceItem.appendChild(juiceNutrition);
}

export default menuElements;
