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

