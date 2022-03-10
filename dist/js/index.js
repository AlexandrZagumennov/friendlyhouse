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

/* Табы */
const heroWrapper = document.querySelector('.hero__wrapper');
const tabs = document.querySelectorAll('.hero__item');
let heroSlogan = document.querySelector('.hero__slogan');
const heroSloganName = document.querySelector('.hero__slogan-name'); 
const heroSloganDescription = document.querySelector('.hero__slogan-description'); 
const heroList = document.querySelector('.hero__list');

const tabsOptions = [
	{
		name: 'Сара',
		sloganName: 'Сара ждёт,',
		sloganDescription: 'когда найдётся её человек',
		image: '../img/hero/dog-sara-big.png'
	},
	{
		name: 'Борис',
		sloganName: 'Борис ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: '../img/hero/cat-boris-big.png'
	},
	{
		name: 'Луи',
		sloganName: 'Луи ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: '../img/hero/dog-lui-big.png'
	},
	{
		name: 'Питер',
		sloganName: 'Питер ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: '../img/hero/rabbit-peter-big.png'
	},
	{
		name: 'Кенни',
		sloganName: 'Кенни ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: '../img/hero/cat-canney-big.png'
	},
];

const changeContent = (index) => {
	heroSloganName.textContent =`${tabsOptions[index].sloganName}`;
	heroSloganDescription.textContent =`${tabsOptions[index].sloganDescription}`;
	heroSlogan = `${heroSloganName} ${heroSloganDescription}`;
	heroWrapper.style.backgroundImage = `url(${tabsOptions[index].image})`;
};

const changeActiveTabs = (indexClickedTub) => {
	const activeTab = document.querySelector('.hero__active-tab');
	heroList.append(activeTab);

	tabs.forEach((tab, index) => {
		tab.classList.remove('hero__active-tab');

		if (index === indexClickedTub) {
			tab.classList.add('hero__active-tab');
			heroList.append(tab);
		}
	})

	changeContent(indexClickedTub);
};

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		changeActiveTabs(index);
	})
});

changeContent(0);

/* Табы / END */