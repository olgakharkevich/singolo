// навигация в header по разделам (подсветка)

const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
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
};

// слайдер (не работает, ну, работает но не так)

document.getElementById('id-home').addEventListener('click', function(el) {
    let parent = document.querySelector('.slider__container');
    let first = parent.querySelector('.slider__item');
    let last = parent.querySelector('.slider__item:last-child');
    if (el.target.closest('div').classList.contains('left-arrow')) {parent.appendChild(first); console.log("1111")};
    console.log("222");
    if (el.target.closest('div').classList.contains('right-arrow')) {parent.insertBefore(last, first); console.log("333")};
    console.log("4444");
});


// картинки в портфолио 

let buttons = document.querySelector('.block-4-button');
let pics = document.querySelectorAll('.column-4-row-3>span')
buttons.addEventListener('click', (event) => {
    buttons.querySelectorAll('button').forEach(el => el.classList.remove('active-button'));
    event.target.classList.add('active-button');
    let j, temp;
    for (let i = pics.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        document.querySelector('.column-4-row-3').insertBefore(pics[j], pics[i]); 
    }
} )




// function slide-left() {

// }

// function slide-right() {

// } 


// let sl = 1; //номер текущего слайда
// let carousel = document.getElementById('carousel');

// carousel.addEventListener('click', (event) => {
//     carousel.querySelectorAll('.slider__item').forEach(el => el.classList.remove('active-slide'));
//     if (sl == 1) { console.log("11111");
//     if (event.target.closest('div').classList.contains('slider__control')) {
//         document.getElementById('id-slide-2').classList.add('active-slide');
//         sl = 2;
//         console.log("2222")
//         }} else {
//             console.log("3333"); 
//         document.getElementById('id-slide-1').classList.add('active-slide');
//         sl = 1;
//      }
    


// });


 // if (event.target.closest('div').classList.contains('left-arrow')) {
    //     if (i == 1) {
    //         document.getElementById('id-slide-2').classList.add('active-slide');
    //         i = 2;
    //     }
    // } else if (event.target.closest('div').classList.contains('right-arrow')) {
    //     console.log("rrrrrr")
    // } else {console.log("nnnnnn")}

