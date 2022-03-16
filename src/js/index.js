/* Мобильное меню */
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
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
		image: 'img/hero/dog-sara-big.png'
	},
	{
		name: 'Борис',
		sloganName: 'Борис ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: 'img/hero/cat-boris-big.png'
	},
	{
		name: 'Луи',
		sloganName: 'Луи ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: 'img/hero/dog-lui-big.png'
	},
	{
		name: 'Питер',
		sloganName: 'Питер ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: 'img/hero/rabbit-peter-big.png'
	},
	{
		name: 'Кенни',
		sloganName: 'Кенни ждёт,',
		sloganDescription: 'когда найдётся его человек',
		image: 'img/hero/cat-canney-big.png'
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


/* Табы / END */


/* Модальное окно */
	// Блокировка скролла
	const disableScroll = () => {
		const widthScroll = window.innerWidth - document.body.offsetWidth;

		document.body.dbScrollY = window.scrollY;

		document.body.style.cssText = `
			position: fixed;
			top: ${-window.scrollY}px;
			left: 0;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			padding-right: ${widthScroll}px;
		`
		};

		const enableScroll = () => {
			document.body.style.cssText = '';
			window.scroll({
				top: document.body.dbScrollY,
		})
	}

	// Модальное окно
	const modalOpen = document.querySelectorAll('.modal__open'),
	    //  modalClose = document.querySelector('.modal__close'),
	      modalOverlay = document.querySelector('.modal__overlay');

	const runModalOpen = () => {
		modalOverlay.classList.add('modal__overlay-open');
		disableScroll();
	};
	  
	const runModalClose = () => {
		modalOverlay.classList.remove('modal__overlay-open');
		enableScroll();
	};

	modalOpen.forEach(item => {
		item.addEventListener('click', () => {
			runModalOpen();
		});
	})
	  
	modalOverlay.addEventListener('click', event => {
		target = event.target;
	  
		if (target.matches('.modal__close') || target.matches('.modal__overlay')) {
			runModalClose();
		 }
	});

/* Модальное окно / END  */


/* Яндекс карта */
ymaps.ready(init);
function init() {
	const myMap = new ymaps.Map("map", {
		center: [55.849206, 37.375674],
		zoom: 13
	});

	const mark = new ymaps.Placemark([55.849206, 37.375674], 
		{
			hintContent: 'Friendly House приют для животных',
			balloonContent: '103929, Москва, Пятницкое шоссе, дом 28'
		},
		{
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: '../img/footer/mark.svg',
			// Размеры метки.
			iconImageSize: [39, 59],
		});

	myMap.geoObjects.add(mark);

	myMap.behaviors.disable('scrollZoom'); // запрещаем зум карты колёсиком мыши
	myMap.behaviors.disable('drag'); // запрещаем скролл свайпом

	myMap.controls.remove('geolocationControl'); // удаляем геолокация (Ваше местонахождение)
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип
	myMap.controls.remove('fullscreenControl'); // удаляем переход в полноэкранный режим
	myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerCOntrol'); // удаляем контрол правил
};

/* Яндекс карта / END  */