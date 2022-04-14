'use strict';

function accordionBlock(element) {
    if (element.style.maxHeight){
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = element.scrollHeight + "px";
    } 
}

function toggleActiveButtonFilter(elements, selectedElement, elementClass) {
    for(let i = 0; i < elements.length; i++) 
        elements[i].classList.remove(elementClass);
    selectedElement.classList.add(elementClass);
}

// header menu
const headerUl = document.querySelector('.header__ul'),
    ulFirstLink = document.querySelector('.header__ul-link'),
    headerSubUl = document.querySelector('.header__sub-ul');

ulFirstLink.addEventListener('click', (e) => {
    let target = e.target;
    let name = target.className;

    if(name !== "header__sub-ul-li" && name != "header__sub-ul-link" 
        && name !== "header__sub-ul-link-name" && 
        name !== "fa-solid fa-person-through-window header__sub-ul_icon") {
        headerUl.classList.toggle('header__ul_active');
        headerSubUl.classList.toggle('header__sub-ul_active');  

        accordionBlock(headerSubUl);
    }   
});

// aside left menu
const menuLiContainer = document.querySelector('.menu__li-container'),
    menuSubUl = document.querySelector('.menu__sub-ul'),
    menuUl = document.querySelector('.menu__ul');

menuLiContainer.addEventListener('click', (e) => {
    menuLiContainer.classList.toggle('menu__li-container_active');

    accordionBlock(menuSubUl);
});

// filter
const buttons = document.querySelectorAll('.filter__btn');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        e = buttons[i];
        toggleActiveButtonFilter(buttons, e, 'filter__btn_active');
    });
}

// posts 
const likes = document.querySelectorAll('.post__likes'),
    defaultLike = document.querySelectorAll('.post__like-img'),
    likedImg = document.querySelectorAll('.post__like-img_red');

for(let i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', e => {
        defaultLike[i].classList.toggle('unactive');
        likes[i].classList.toggle('active');
        likedImg[i].classList.toggle('active');
    });
}

// btn-up scorlling
const btnUp = document.querySelector('.btn-up'),
    header = document.querySelector('#header');

btnUp.addEventListener('click', () => {
    header.scrollIntoView({block: "center", behavior: "smooth"});
});

// languages
const languageContainer = document.querySelectorAll('.language__container');

for(let i = 0; i < languageContainer.length; i++) {
    languageContainer[i].addEventListener('click', e => {
        languageContainer[i].classList.toggle('active');
    });
}

