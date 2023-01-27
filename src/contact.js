const content = document.getElementById('content');

function contactElements() {
	const contactMain = document.createElement('main');
	contactMain.setAttribute('id', 'contact-main');
	const h1 = document.createElement('h1');
	h1.setAttribute('id', 'contact-heading');
	h1.textContent = 'Contact Us';

	const p1 = document.createElement('p');
	p1.classList.add('contact-text');
	p1.textContent = `If you have any questions or comments, please don't hesitate to reach out to us.`;

	const ul = document.createElement('ul');
	ul.classList.add('contact-list');
	ul.innerHTML = `
	<li>Phone: 555-555-5555</li>
	<li>Email: foodismood@email.com</li>
	<li>Follow us on social media: 
	<a href="https://www.facebook.com/foodismood" class="social-link"
	>Facebook</a> | 
	<a href="https://www.twitter.com/foodismood" class="social-link"
	>Twitter</a> | 
	<a href="https://www.instagram.com/foodismood" class="social-link"
	>Instagram</a></li>`;

	content.appendChild(contactMain);
	contactMain.appendChild(h1);
	contactMain.appendChild(p1);
	contactMain.appendChild(ul);

	// return contactMain.id;
}

export default contactElements;
