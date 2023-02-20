// STICKY HEADER

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('#title').scrollHeight;

	if (window.scrollY > 80) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}
});

// (function () {
// })();

const btnToggle = document.querySelector('#menuToggle');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const btnItemMenu = document.querySelectorAll('.menu-mobile a');

btnToggle.addEventListener('click', function () {
	const menuMobile = document.querySelector('.menu-mobile');

	menuMobile.classList.toggle('show');
});
btnCloseMenu.addEventListener('click', function () {
	const menuMobile = document.querySelector('.menu-mobile');

	menuMobile.classList.toggle('show');
});

btnItemMenu.forEach(element => {
	element.addEventListener('click', function () {
		closeMenu();
	});
});

function openMenu() {
	document.querySelector('.menu-mobile').classList.add('show');
}
function closeMenu() {
	document.querySelector('.menu-mobile').classList.remove('show');
}
