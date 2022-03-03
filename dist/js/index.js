/* Мобильное меню */
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
	console.log('+')
	burger.classList.toggle('active');
	navigation.classList.toggle('active');
});

navigation.addEventListener('click', (event) => {
	const closeNav = event.target.closest('.navigation__link');

	if (closeNav) {
		headerNavigation.classList.remove('active');
		burger.classList.remove('active');
	}
});
/* Мобильное меню / END */