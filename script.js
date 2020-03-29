
// навигация в header по разделам (подсветка)

const MENU = document.getElementById('menu');
const MENU_MOBILE = document.querySelector('.hamburger');
const HEADER_NAV = document.querySelector('.header__navigation');

MENU.addEventListener('click', () => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  // для Mobile
  if (document.documentElement.clientWidth < 767) {
    HEADER_NAV.classList.add('hidden');
    document.querySelector('.logo').classList.remove('active-logo');
    MENU_MOBILE.classList.remove('rotate');
    document.body.style.overflowY = 'auto';
  } 
});


// меню на Mobile-375

MENU_MOBILE.addEventListener('click', () => {
  HEADER_NAV.classList.toggle('hidden');
  document.querySelector('.logo').classList.toggle('active-logo');
  MENU_MOBILE.classList.toggle('rotate');
  if (HEADER_NAV.classList.contains('hidden')) {
    document.body.style.overflowY = 'auto';
  } else {
    document.body.style.overflowY = 'hidden';
  }
});


// скролл (выделение позиций меню)

let isScrolling;

window.addEventListener('scroll', function() {

	window.clearTimeout( isScrolling );
  
	isScrolling = setTimeout(function() {

    let curPos = window.scrollY;
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('#menu a');
    let header_height = document.querySelector('.header .wrapper').offsetHeight;
    
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('hover'));
    
    sections.forEach((el) => {
      if ( (el.offsetTop <= (curPos + header_height)) && ((el.offsetTop + el.offsetHeight) > (curPos + header_height)) )  {
          links.forEach((a) => {
            if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                  a.classList.add('active');
              }
          })
      }
    })

	}, 50);

}, false);


// отключение экранов телефонов

let iph_vert_button = document.getElementById('iph-vert-button');
let iph_vert_screen = document.getElementById('iph-vert-screen');
iph_vert_button.addEventListener('click', (event) => {
  iph_vert_screen.classList.toggle('screen-off');
});

let iph_horiz_button = document.getElementById('iph-horiz-button');
let iph_horiz_screen = document.getElementById('iph-horiz-screen');
iph_horiz_button.addEventListener('click', (event) => {
  iph_horiz_screen.classList.toggle('screen-off');
});


// слайдер 

let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active-slide', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active-slide');
		isEnabled = true;
	});
}

function nextItem(n) {
  hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.getElementById('left-arrow').addEventListener('click', function() {
	if (isEnabled) {
    previousItem(currentItem);
	}
});

document.getElementById('right-arrow').addEventListener('click', function() {
  if (isEnabled) {
		nextItem(currentItem);
	}
});


// картинки в портфолио 

let buttons = document.querySelector('.block-4-button');
let pics = document.querySelectorAll('.column-4-row-3>span');

buttons.addEventListener('click', (event) => {
  buttons.querySelectorAll('button').forEach(el => {
      if (event.target.getAttribute('type') === 'button') {
        el.classList.remove('active-button');
        event.target.classList.add('active-button');
        for (let i = pics.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          document.querySelector('.column-4-row-3').insertBefore(pics[j], pics[i]); 
        }
      }
    })
  } );
  

  // рамка вокруг картинок
  
let block_pics = document.querySelector('.column-4-row-3');

block_pics.addEventListener('click', (event) => {
  pics.forEach(el => el.classList.remove('active-pic'));
    event.target.closest('span').classList.add('active-pic');
  });
  
    
  // модальное окно
  
const BUTTON = document.getElementById('id-submit');
const CLOSE_BUTTON = document.getElementById('close-message');

BUTTON.addEventListener('click', (event) => {
  if (document.form_submit.checkValidity()) {
    event.preventDefault();
    document.body.style.overflowY = 'hidden';

    let subject = document.getElementById('id-subject').value.toString();
    if (subject === '') {subject = 'No subject'} 
    else {subject = 'Subject: ' + subject};
    document.getElementById('result-subject').innerText = subject;

    let describe = document.getElementById('id-describe').value.toString();
    if (describe === '') {describe = 'No description'} 
    else {describe = 'Description: ' + describe};
    document.getElementById('result-describe').innerText = describe;

    document.getElementById('message-block').classList.remove('hidden');
  }
});
  
  CLOSE_BUTTON.addEventListener('click', () => {
    document.body.style.overflowY = 'auto';
    document.getElementById('result-subject').innerText = '';
    document.getElementById('result-describe').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.form_submit.reset();
  });

  
// вместо :hover

// function hover_on(i) {
//   document.querySelectorAll('.navigation a')[i].classList.add('hover');
//   }

// function hover_off(i) {
//   document.querySelectorAll('.navigation a')[i].classList.remove('active', 'hover');
// }
  