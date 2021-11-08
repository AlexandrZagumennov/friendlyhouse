const catBoris = document.getElementById('cat-boris');
const dogLui = document.getElementById('dog-lui');
const rabbitPeter = document.getElementById('rabbit-peter');
const catCanney = document.getElementById('cat-canne');
const dogSara = document.getElementById('dog-sara');
const mainImage = document.querySelector('.banner__row-item_center');
const bannerTitle = document.getElementById('banner__title');

const changeBoris = () => {
	mainImage.style.backgroundImage = 'url(img/banner/cat-boris-big.png)';
	bannerTitle.innerHTML = `
	<h2 class="banner__title" id = "banner__title"><span class="banner__subtitle">Борис ждёт,<br> </span> когда найдётся его<br>
	человек</h2>
	`
	catBoris.classList.add('banner__hide');

	dogSara.classList.remove('banner__hide');
	dogLui.classList.remove('banner__hide');
	rabbitPeter.classList.remove('banner__hide');
	catCanney.classList.remove('banner__hide');
};

const changeLui = () => {
	mainImage.style.backgroundImage = 'url(img/banner/dog-lui-big.png)';
	bannerTitle.innerHTML = `
	<h2 class="banner__title" id = "banner__title"><span class="banner__subtitle">Луи ждёт,<br> </span> когда найдётся его<br>
	человек</h2>
	`
	dogLui.classList.add('banner__hide');

	catBoris.classList.remove('banner__hide');
	dogSara.classList.remove('banner__hide');
	rabbitPeter.classList.remove('banner__hide');
	catCanney.classList.remove('banner__hide');
};

const changePeter = () => {
	mainImage.style.backgroundImage = 'url(img/banner/rabbit-peter-big.png)';
	bannerTitle.innerHTML = `
	<h2 class="banner__title" id = "banner__title"><span class="banner__subtitle">Питер ждёт,<br> </span> когда найдётся его<br>
	человек</h2>
	`
	rabbitPeter.classList.add('banner__hide');

	dogSara.classList.remove('banner__hide');
	dogLui.classList.remove('banner__hide');
	catCanney.classList.remove('banner__hide');
	catBoris.classList.remove('banner__hide');
};

const changeCanney = () => {
	mainImage.style.backgroundImage = 'url(img/banner/cat-canney-big.png)';
	bannerTitle.innerHTML = `
	<h2 class="banner__title" id = "banner__title"><span class="banner__subtitle">Кенни ждёт,<br> </span> когда найдётся его<br>
	человек</h2>
	`
	catCanney.classList.add('banner__hide');

	dogSara.classList.remove('banner__hide');
	dogLui.classList.remove('banner__hide');
	catBoris.classList.remove('banner__hide');
	rabbitPeter.classList.remove('banner__hide');
};

const changeSara = () => {
	mainImage.style.backgroundImage = 'url(img/banner/dog-sara-big.png)';
	bannerTitle.innerHTML = `
	<h2 class="banner__title" id = "banner__title"><span class="banner__subtitle">Сара ждёт,<br> </span> когда найдётся её<br>
	человек</h2>
	`
	dogSara.classList.add('banner__hide');

	dogLui.classList.remove('banner__hide');
	catBoris.classList.remove('banner__hide');
	rabbitPeter.classList.remove('banner__hide');
	catCanney.classList.remove('banner__hide');
};

catBoris.addEventListener('click', changeBoris);
dogLui.addEventListener('click', changeLui);
rabbitPeter.addEventListener('click', changePeter);
catCanney.addEventListener('click', changeCanney);
dogSara.addEventListener('click', changeSara);

//POPUP
$(document).ready(function($) {
	$('.popup__open').click(function() {
		$('.popup__fade').fadeIn(500);
		$('html').addClass('popup__no-scroll');
		return false;
	});	
	
	$('.popup__close').click(function() {
		$(this).parents('.popup__fade').fadeOut(300);
		$('html').removeClass('popup__no-scroll');
		return false;
	});		

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup__fade').fadeOut(300);
			$('html').removeClass('popup__no-scroll');
		}
	});
	
	$('.popup__fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut(300);
			$('html').removeClass('popup__no-scroll');	
		}
	});	
});

// Отправка формы
$('.form').submit(function (e) {
	e.preventDefault();
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/todos',
		type: 'POST',
		data: $(this).serialize(),
		success(data) {
			$('.form__title').text('Спасибо, Ваша заявка принята. Номер заявки ' + data.id)
			$('.form').trigger('reset');
		},
		error() {
			$('.form__title').text('Что-то пошло не так. Попробуйте позже.')
		}
	})
	
});

// Бургер - меню
$('.header__menu').on('click', function() {
	$('.header__navigation').toggle('header__hide-nav')
});