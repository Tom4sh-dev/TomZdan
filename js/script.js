const navMobile = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__link');
const navBtn = document.querySelector('.hamburger');

const sections = document.querySelectorAll('.section');
const headerTitle = document.querySelector('.header__title');

const handleNav = () => {
	navMobile.classList.toggle('nav--mobile-active');
	navBtn.classList.toggle('is-active');
	headerTitle.classList.toggle('header__title--hide');
	sections.forEach((section) => {
		section.classList.toggle('section--hide');
	});

	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav--mobile-active');
			navBtn.classList.remove('is-active');
			headerTitle.classList.remove('header__title--hide');
			sections.forEach((section) => {
				section.classList.remove('section--hide');
			});
		});
	});
};

navBtn.addEventListener('click', handleNav);
