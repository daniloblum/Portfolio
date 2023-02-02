// STICKY HEADER

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('#title').scrollHeight;

	if (window.scrollY > 80) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}

	console.log(header);
	console.log(header.scrollHeight);
});

// (function () {
// })();
