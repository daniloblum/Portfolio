// Hero Behavior

let heroSection = document.querySelector('#title');
let headerHeight = document.querySelector('.header');
let headerBrand = document.querySelector('.brand__link');
let heroHeight = heroSection.clientHeight;

window.addEventListener('scroll', function () {
	let value1 = window.scrollY + 80; // Ficou fixo
	let value2 = heroHeight * 0.7 - window.scrollY / 70; // Ficou fixo em 70%
	let value3 = heroHeight - window.scrollY * 0.5;

	heroSection.style.clipPath = `polygon(0 0, 100% 0, 100% ${value1}px, 60% 70%, 0 ${value3}px)`;

	if (value1 > value3) {
		headerBrand.classList.remove('d-none');
		headerBrand.classList.add('d-block');
	} else {
		headerBrand.classList.remove('d-block');
		headerBrand.classList.add('d-none');
	}
});

// Scroll to Section

document.addEventListener('DOMContentLoaded', function () {
	// Add smooth scrolling to all links
	document.querySelector('a').addEventListener('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top + 80,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

// Works motions

// Intersection Observer Animation - CARDS

let portfolioCards = document.querySelectorAll('.portfolio__card');

const options = {
	root: null, //it is the viewport
	rootMargin: '-50%',
	threshold: 0,
};

const observerCards = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// console.log(entry.target);
			entry.target.classList.add('zoom--in');
			entry.target.classList.remove('card--out');
		} else {
			// console.log(entry.target)
			entry.target.classList.remove('zoom--in');
			entry.target.classList.add('card--out');
		}
	});
}, options);

portfolioCards.forEach(card => {
	observerCards.observe(card);
});
