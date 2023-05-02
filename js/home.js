const heroDivider = document.querySelectorAll('#divider path');
const heroHeight = document.querySelector('.hero__divider').scrollHeight;
const headerHeight = document.querySelector('.header');
const headerBrand = document.querySelector('.brand__link');

// Hero behavior
window.addEventListener('scroll', function () {
	const value1 = 100 - ((window.scrollY * 100) / heroHeight) * 1.5;
	const value2 = 70 - ((window.scrollY * 70) / heroHeight) * 1.5;
	const value3 = 0;

	heroDivider.forEach(pathElement => {
		if (pathElement.classList.contains('divider-desktop')) {
			pathElement.setAttribute('d', 'M0 ' + value1 + ' L60 ' + value2 + ' L100 ' + value3 + ' V100 H0 Z');
		} else {
			pathElement.setAttribute('d', 'M0 ' + value1 + ' L100 ' + value2 + ' L100 ' + value3 + ' V100 H0 Z');
		}
	});

	if (value1 <= 0) {
		headerBrand.classList.remove('d-none');
		headerBrand.classList.add('d-block');
	} else {
		headerBrand.classList.remove('d-block');
		headerBrand.classList.add('d-none');
	}
});

// Scroll to Section
$(document).ready(function () {
	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
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
