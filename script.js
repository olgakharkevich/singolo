
// навигация в header по разделам (подсветка)

const MENU = document.getElementById('menu');
const MENU_MOBILE = document.querySelector('.hamburger');
const HEADER_NAV = document.querySelector('.header__navigation');

MENU.addEventListener('click', click_menu);

function click_menu(event) {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  if (document.documentElement.clientWidth < 767) {
    HEADER_NAV.classList.add('hidden');
    document.querySelector('.logo').classList.remove('active-logo');
    MENU_MOBILE.classList.remove('rotate');
  } 
}


// if (document.documentElement.clientWidth < 767) {
//   HEADER_NAV.addEventListener('blur', () => {
//     HEADER_NAV.classList.add('hidden');
//     document.querySelector('.logo').classList.remove('active-logo');
//     MENU_MOBILE.classList.remove('rotate');
//   });
// }

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



// переход по "якорям"

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('#menu a');

    sections.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    }) 
}


// отключение экранов телефонов

let iph_vert = document.querySelector('.iphone-vertical');
let iph_vert_screen = document.getElementById('iph-vert-screen');
iph_vert.addEventListener('click', (event) => {
  iph_vert_screen.classList.toggle('screen-off');
});

let iph_horiz = document.querySelector('.iphone-horizontal');
let iph_horiz_screen = document.getElementById('iph-horiz-screen');
iph_horiz.addEventListener('click', (event) => {
  iph_horiz_screen.classList.toggle('screen-off');
});


// слайдер (второй вариант)

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


  

  
  
  // // слайдер (первый вариант)
  // const NEXT = 'next';
  // const PREV = 'prev';
  // const LAST_ITEM_INDEX = -1;
  
  // let slider = document.getElementById('id-slider'),
  //     sliderItems = document.getElementById('carousel'),
  //     prev = document.getElementById('left-arrow'),
  //     next = document.getElementById('right-arrow');
  
  // function slide(wrapper, items, prev, next) {
  //   let posInitial,
  //       slides = items.getElementsByClassName('slider__item'),
  //       slidesLength = slides.length,
  //       slideSize = items.getElementsByClassName('slider__item')[0].offsetWidth,
  //       firstSlide = slides[0],
  //       lastSlide = slides[slidesLength - 1],
  //       cloneFirst = firstSlide.cloneNode(true),
  //       cloneLast = lastSlide.cloneNode(true),
  //       index = 0,
  //       allowShift = true;
    
  //   console.log("sss", slideSize);
  //   // клон первого и последнего слайдов
  //   items.appendChild(cloneFirst);
  //   items.insertBefore(cloneLast, firstSlide);
  //   wrapper.classList.add('loaded');
    
  //   // события при клике
  //   prev.addEventListener('click', () => { shiftSlide(PREV) });
  //   next.addEventListener('click', () => { shiftSlide(NEXT) });
    
  //   // перемещение
  //   items.addEventListener('transitionend', checkIndex);
    
  //   function shiftSlide(direction) {
  //     items.classList.add('shifting');
      
  //     if (allowShift) {
  //       posInitial = items.offsetLeft;
  
  //       if (direction === NEXT) {
  //         items.style.left = (posInitial - slideSize) + 'px';
  //         index++;      
  //       } else if (direction === PREV) {
  //         items.style.left = (posInitial + slideSize) + 'px';
  //         index--;      
  //       }
  //     }
      
  //     allowShift = false;
  //   }
      
  //   function checkIndex (){
  //     items.classList.remove('shifting');
  
  //     if (index === LAST_ITEM_INDEX) {
  //       items.style.left = -(slidesLength * slideSize) + 'px';
  //       index = slidesLength - 1;
  //     }
  
  //     if (index === slidesLength) {
  //       items.style.left =  -slideSize + 'px';
  //       index = 0;
  //     }
      
  //     allowShift = true;
  //   }
  // }
  
  
  // slide(slider, sliderItems, prev, next);