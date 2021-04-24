function addstyle() {
    const link = document.createElement('link'),
        body = document.querySelector('.body');

    if (!body.classList.contains('onload')) {
        body.classList.add('onload');
    }

    link.rel = 'stylesheet';
    link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarers/css/style.css';
    document.head.appendChild(link);

    link.onload = function(){
        body.classList.add('ready');

        setTimeout(function() {
            body.classList.remove('onload');
        }, 200);
    };
}

window.addEventListener('load', function() {
    'use strict'
    // logo
    const headerMainLogo = document.querySelector('.logo-img');

    headerMainLogo.innerHTML = `<svg aria-hidden="true" focusable="false" xlink:href="data:image/png; xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 500 500"><path d="M173 41c-4.1.3-8.3 1-9.2 1.4-1.1.5-1.8.4-1.8-.3 0-1.8-2.9-1.3-7.9 1.3-2.5 1.3-6.8 2.9-9.5 3.6-6.8 1.6-12.1 4.4-17.7 9.7-3.4 3.1-4.9 4.1-4.9 2.9 0-2.8-1.9-1.8-7.3 3.6-3.4 3.4-5.7 6.8-6.5 9.5-.9 3.1-1.7 4.1-2.8 3.6-1.2-.4-1.4 0-.9 1.8.7 3.2-2.5 9.5-4.6 9.1-1.4-.2-1.7 1-2.1 6.6-.3 5.2-1.1 8.5-3.8 13.8-3.2 6.6-3.4 7.5-3.8 20.4-.5 14.8.9 23.3 5 29.9 1.4 2.2 2.1 4.7 1.9 6.8-.1 1.9.2 3.3.8 3.3s1.1 1.1 1.1 2.5c0 1.5.6 2.5 1.4 2.5 1.8 0 2.9 3.5 2.6 7.9-.1 1.9.1 6.3.5 9.7.5 5 1 6.2 2.1 5.7 1.3-.5 1.4.1.8 3.2-.4 2.5-.3 3.6.3 3.2 1.5-1 2.5 7.1 1.7 13.2-.4 3.5-.3 5.1.5 5.1.6 0 1.1.7 1.1 1.5 0 1.2-1.5 1.5-7.9 1.5-8.4 0-9.1.4-9.1 5.5 0 3-2 4.3-3.2 2.1-1.4-2.4-4.7-2-6 .9-.7 1.5-2.4 2.8-4.2 3.3s-3.6 1.8-4.2 3.3c-1.6 3.3-2.7 27.6-1.4 28.4.6.4.5 1.6-.4 3.3-.8 1.5-1.9 6.3-2.6 10.7-2.1 14.3-6 33.2-9 43.7-4.7 16.4-6 25.1-6 40 0 13 .2 14.3 3.4 24 1.9 5.7 3.7 12.9 4.1 16.1s2.9 13.5 5.6 23c6.9 23.8 12.5 46.9 13.9 56.8.6 4.6 1.3 9.9 1.6 11.6l.5 3.3h224l-.6-4.3c-2-15.2-3.5-33.8-3.5-45.1v-13.3l10.5-.6c5.7-.4 12.6-1.1 15.2-1.7 7.8-1.7 24.4-9.2 27.9-12.7 1.7-1.7 5.6-7.8 8.6-13.5s9.2-16 13.7-22.8c10.1-14.9 13.7-22.3 15.1-31.2.6-3.7.9-7.1.8-7.5s.6-3.3 1.4-6.3c.9-3 2.5-9.1 3.6-13.5s3.4-11.8 5.1-16.5c1.6-4.7 3.7-12.3 4.6-16.9 1.7-8.1 1.7-8.4-.2-11-1.1-1.4-3-2.7-4.2-2.9-1.5-.2-2.1-.9-1.7-1.8.4-1-.2-1.4-1.9-1.4-1.4 0-2.5-.5-2.5-1 0-.6-.9-1-2.1-1-1.9 0-2.1-.4-1.5-3.8 2-12.4 2-11.6-1.3-15.4-1.6-1.9-5.1-4.6-7.6-5.9-3.9-2.1-4.5-2.7-4-4.8.9-3.6-1.4-12.9-4-15.8l-2.3-2.7 2-4.5c3.8-9 4.9-16.2 5.5-36.4l.6-19.8 7.1.6c14.8 1.4 26.5 3.5 30.5 5.6 2.2 1.1 4.1 2.5 4.1 3s2.6.9 5.8.9c6 0 10.2-1.9 10.2-4.6 0-1.2.9-1.4 4.5-.8 4.8.7 7.4-.6 9.6-4.8 2.3-4.3 3.9-18.1 3.9-33.9 0-15.3-.2-16.8-2.1-19.3-2-2.5-2.3-2.6-13.5-2.6s-11.6.1-14 2.7-3 2.7-20.7 3.9c-10 .7-20.3 1.5-22.9 1.7-4.6.4-4.6.3-6.1-3.5-1.2-2.9-2.1-3.8-4-3.8-2.7 0-4.6 1.8-7.3 7-1.5 2.9-1.9 3.1-2.1 1.5-1.4-8.5-3.8-14.7-6.5-17-2.9-2.5-6.3-3.2-8.4-1.7-1.6 1-3.4 4.8-3.4 7 0 1.7-.9 2-5.7 2.5-3.2.3-7 .9-8.4 1.2-2.5.7-2.6.5-3.1-4.5-.6-5.6-2.6-8.5-6.8-9.5-3-.7-7.6 2.4-9 6.1-.8 2.1-1.6 2.4-6.2 2.4-4.8 0-5.5.3-8 3.4-1.6 1.9-2.8 4-2.8 4.5 0 .6-1.8 1.1-4 1.1-2.9 0-4.2.5-5 2-.6 1.1-.9 2.4-.6 2.8.3.5-.4 1.6-1.5 2.5-1 .9-1.9 2.9-1.9 4.5 0 3.2-.2 3.2-15.6 1l-8.2-1.1-.6-3.8c-.3-2.1-1.2-4.4-1.9-5.1-.8-.7-2-3.8-2.7-6.8-1.9-8.3-4.8-15.1-8.1-19.2-3.8-4.8-3.7-7.7.6-12.8 3.4-4.1 4.3-6 2.7-6-.4 0-1.3.5-1.9 1.1-.8.8-.6-.9.3-4.7 1.6-6 1.2-13.8-.7-15-.6-.3-1.7.2-2.4 1.2-1.3 1.8-1.4 1.8-1.5.1 0-2.3-3.2-2.2-5.3.3-2 2.4-3.7 1.8-3.7-1.1 0-1-.5-1.9-1.1-1.9s-.9-.6-.6-1.4c.4-1.1-.4-1.4-3.2-1.2-2.9.1-3.7-.3-3.3-1.2.4-1.1-.9-1.3-6.2-1-5 .2-6.5 0-6.1-1 .2-.6-.1-1.2-.8-1.3-.7 0-5.2-.5-10.2-1-4.9-.5-11.6-1.2-14.7-1.5-4.2-.5-5.5-1-5.1-2 .6-1.5-1.2-1.6-14.7-.4zm114.4 119.6c.3.9.6 3.1.6 5.1v3.5l7.8-.3 7.7-.4.7 7.2c1.2 11.8 6.3 30.5 11.9 43.5l3 6.8-1.9 3.7c-2.3 4.5-3.7 10.6-5.2 22.7-.8 6.5-2 10.6-4.5 15.6-4.6 9.2-6.2 15.4-4.5 18.4 1.7 3.3.5 7.6-4.1 14.6-5.4 8-18 19.7-19.1 17.6-1.4-2.4-7.3-5.6-10.5-5.6-1.7 0-4.2.9-5.6 2-3.3 2.6-5.5 2.5-11.5-.5-2.8-1.4-6.3-2.5-7.8-2.5-2.3 0-4.9-2-12.6-9.7-6.2-6.1-9.8-10.5-9.8-11.8 0-1.2-.7-4.5-1.5-7.3-1.8-5.8-5-8.7-9-8-2.1.4-3.1-.3-6-4.2-1.9-2.6-3.5-5-3.5-5.4 0-.3 1.3-2.4 2.9-4.7 1.6-2.2 3.3-5.5 3.6-7.2.9-4.3 5-11.3 7.2-12.2 1-.4 5.9-.9 10.8-1 5-.2 11-.8 13.5-1.4s7.9-1.1 12.1-1.1c6.2 0 8.1-.4 10.3-2.1 6.1-4.8 7.6-14.4 3.1-19.7-1.4-1.7-2.5-3.4-2.5-4 0-.5 1.1-1.7 2.5-2.6 2.8-1.8 3.2-4.3 1.1-7.1-1.3-1.7-1.1-2.2 1.1-4.3 2.2-2 2.4-2.8 1.7-6-.4-2-.8-5.3-.8-7.2-.1-3.2.2-3.5 4.3-5 2.4-.8 5.3-2.7 6.3-4.1 1.9-2.4 1.9-2.8.4-5.6-.8-1.7-2.7-4.5-4.2-6.2-2.9-3.4-2.6-3.8 4.1-4.4 2.2-.2 4.7-.4 5.6-.5s2 .5 2.3 1.4z"/></svg>`;

    // animation header
    const headerBg = document.querySelector('.header-bg'),
        shipImg = document.querySelector('.ship-img');

    if (shipImg != null) {
        animateShip();
    }

    function animateShip() {
        if (typeof sessionStorage.getItem('animation') == 'string') {
            headerBg.style.animation = 'none';
            shipImg.style.animation = 'none';
        }

        headerBg.addEventListener('animationend', function(event) {
            event.target.style.animation = 'none';
            sessionStorage.setItem('animation', 'done');
        });
    }

    //header-nav
    const headerNav = document.querySelector('.header-nav'),
        headerBox = document.querySelector('.header-box'),
        headerNavBtn = document.createElement('div'),
        headerNavBtnLine = document.createElement('div'),
        toggleHeaderNav = () => {
            headerNavBtn.classList.toggle('open');
            headerNav.classList.toggle('open');
        },
        bodyHidden = () => {
            (body.classList.contains('hidden')) ? body.classList.remove('hidden') : body.classList.add('hidden');
        };


    headerNavBtn.classList.add('header-nav-btn');

    headerNavBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleHeaderNav();
        bodyHidden();
    });

    headerNavBtn.append(headerNavBtnLine);
    headerBox.append(headerNavBtn);

    document.addEventListener('click', e => {
        const target = e.target,
            btnMenu = target == headerNavBtn,
            menu = target == headerNav || headerNav.contains(target),
            menuActive = headerNav.classList.contains('open');

        if (!menu && !btnMenu && menuActive) {
            toggleHeaderNav();
            bodyHidden();
        }
    })

    // switch-theme
    const switchTheme = document.querySelector('.switch-theme'),
        body = document.querySelector('.body');

    if (localStorage.getItem('theme') == 'white') {
        body.classList.add('white');
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
        body.classList.remove('white');
    }

    switchTheme.addEventListener('click', function(){
        let e = body.classList.contains('dark');

        if (e) {
            body.classList.remove('dark');
            body.classList.add('white');
            localStorage.setItem('theme', 'white');
        } else {
            body.classList.add('dark');
            body.classList.remove('white');
            localStorage.setItem('theme', 'dark');
        }
    });

    // button top
    const buttonTop = document.createElement('div');

    buttonTop.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>`
    buttonTop.classList.add('button-top');
    body.append(buttonTop);

    window.addEventListener('scroll', trackScroll);
    buttonTop.addEventListener('click', scrollTop);

    function trackScroll() {
        let scrolled = window.pageYOffset,
            coords = document.documentElement.clientHeight / 3;

        scrolled > coords ? buttonTop.classList.add('show') : buttonTop.classList.remove('show');
    }

    function scrollTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(scrollTop, 0);
        }
    }

    // popup
    const popupBox = document.querySelector('.popup-box'),
        popupClose = document.querySelector('.popup-close'),
        loginTelegram = document.querySelectorAll('.login-telegram'),
        popupTelegram = document.querySelector('.popup-telegram'),
        popupShow = function(elem) {
            elem.classList.add('show');
            popupBox.classList.add('show');
            if (!body.classList.contains('hidden')) {
                body.classList.add('hidden');
            }
        };

    // telegram
    if (popupBox != null && popupClose != null && loginTelegram != null && popupTelegram != null) {
        loginTelegram.forEach((event) => {
            console.log(event);
            event.addEventListener('click', () => {
                popupTelegram.classList.add('show');
                popupBox.classList.add('show');
                if (!body.classList.contains('hidden')) {
                    body.classList.add('hidden');
                };
            });
        })

        popupClose.addEventListener('click', e => {
            e.target.parentElement.classList.remove('show');
            e.target.nextElementSibling.classList.remove('show');
            bodyHidden();
        })
    } else {
        console.log('telegram login not-found');
    }


    // main-menu link
    // const mainMenuElem = document.createElement('div'),
    //     headerNavMain = document.querySelector('.header-nav__main');
    //
    // if (mainMenuElem != null) {
    //     mainMenu();
    // }
    //
    // function mainMenu() {
    //     const mainMenuUl = document.createElement('ul'),
    //         arrLinkMenu = [
    //             {
    //                 title: 'Main',
    //                 link: 'https://seafarer.news',
    //                 icon: `<svg aria-hidden="true" focusable="false" xlink:href="data:image/png; xmlns=" http:="" www.w3.org="" 2000="" svg"="" role="img" viewBox="0 0 500 500"><path d="M173 41c-4.1.3-8.3 1-9.2 1.4-1.1.5-1.8.4-1.8-.3 0-1.8-2.9-1.3-7.9 1.3-2.5 1.3-6.8 2.9-9.5 3.6-6.8 1.6-12.1 4.4-17.7 9.7-3.4 3.1-4.9 4.1-4.9 2.9 0-2.8-1.9-1.8-7.3 3.6-3.4 3.4-5.7 6.8-6.5 9.5-.9 3.1-1.7 4.1-2.8 3.6-1.2-.4-1.4 0-.9 1.8.7 3.2-2.5 9.5-4.6 9.1-1.4-.2-1.7 1-2.1 6.6-.3 5.2-1.1 8.5-3.8 13.8-3.2 6.6-3.4 7.5-3.8 20.4-.5 14.8.9 23.3 5 29.9 1.4 2.2 2.1 4.7 1.9 6.8-.1 1.9.2 3.3.8 3.3s1.1 1.1 1.1 2.5c0 1.5.6 2.5 1.4 2.5 1.8 0 2.9 3.5 2.6 7.9-.1 1.9.1 6.3.5 9.7.5 5 1 6.2 2.1 5.7 1.3-.5 1.4.1.8 3.2-.4 2.5-.3 3.6.3 3.2 1.5-1 2.5 7.1 1.7 13.2-.4 3.5-.3 5.1.5 5.1.6 0 1.1.7 1.1 1.5 0 1.2-1.5 1.5-7.9 1.5-8.4 0-9.1.4-9.1 5.5 0 3-2 4.3-3.2 2.1-1.4-2.4-4.7-2-6 .9-.7 1.5-2.4 2.8-4.2 3.3s-3.6 1.8-4.2 3.3c-1.6 3.3-2.7 27.6-1.4 28.4.6.4.5 1.6-.4 3.3-.8 1.5-1.9 6.3-2.6 10.7-2.1 14.3-6 33.2-9 43.7-4.7 16.4-6 25.1-6 40 0 13 .2 14.3 3.4 24 1.9 5.7 3.7 12.9 4.1 16.1s2.9 13.5 5.6 23c6.9 23.8 12.5 46.9 13.9 56.8.6 4.6 1.3 9.9 1.6 11.6l.5 3.3h224l-.6-4.3c-2-15.2-3.5-33.8-3.5-45.1v-13.3l10.5-.6c5.7-.4 12.6-1.1 15.2-1.7 7.8-1.7 24.4-9.2 27.9-12.7 1.7-1.7 5.6-7.8 8.6-13.5s9.2-16 13.7-22.8c10.1-14.9 13.7-22.3 15.1-31.2.6-3.7.9-7.1.8-7.5s.6-3.3 1.4-6.3c.9-3 2.5-9.1 3.6-13.5s3.4-11.8 5.1-16.5c1.6-4.7 3.7-12.3 4.6-16.9 1.7-8.1 1.7-8.4-.2-11-1.1-1.4-3-2.7-4.2-2.9-1.5-.2-2.1-.9-1.7-1.8.4-1-.2-1.4-1.9-1.4-1.4 0-2.5-.5-2.5-1 0-.6-.9-1-2.1-1-1.9 0-2.1-.4-1.5-3.8 2-12.4 2-11.6-1.3-15.4-1.6-1.9-5.1-4.6-7.6-5.9-3.9-2.1-4.5-2.7-4-4.8.9-3.6-1.4-12.9-4-15.8l-2.3-2.7 2-4.5c3.8-9 4.9-16.2 5.5-36.4l.6-19.8 7.1.6c14.8 1.4 26.5 3.5 30.5 5.6 2.2 1.1 4.1 2.5 4.1 3s2.6.9 5.8.9c6 0 10.2-1.9 10.2-4.6 0-1.2.9-1.4 4.5-.8 4.8.7 7.4-.6 9.6-4.8 2.3-4.3 3.9-18.1 3.9-33.9 0-15.3-.2-16.8-2.1-19.3-2-2.5-2.3-2.6-13.5-2.6s-11.6.1-14 2.7-3 2.7-20.7 3.9c-10 .7-20.3 1.5-22.9 1.7-4.6.4-4.6.3-6.1-3.5-1.2-2.9-2.1-3.8-4-3.8-2.7 0-4.6 1.8-7.3 7-1.5 2.9-1.9 3.1-2.1 1.5-1.4-8.5-3.8-14.7-6.5-17-2.9-2.5-6.3-3.2-8.4-1.7-1.6 1-3.4 4.8-3.4 7 0 1.7-.9 2-5.7 2.5-3.2.3-7 .9-8.4 1.2-2.5.7-2.6.5-3.1-4.5-.6-5.6-2.6-8.5-6.8-9.5-3-.7-7.6 2.4-9 6.1-.8 2.1-1.6 2.4-6.2 2.4-4.8 0-5.5.3-8 3.4-1.6 1.9-2.8 4-2.8 4.5 0 .6-1.8 1.1-4 1.1-2.9 0-4.2.5-5 2-.6 1.1-.9 2.4-.6 2.8.3.5-.4 1.6-1.5 2.5-1 .9-1.9 2.9-1.9 4.5 0 3.2-.2 3.2-15.6 1l-8.2-1.1-.6-3.8c-.3-2.1-1.2-4.4-1.9-5.1-.8-.7-2-3.8-2.7-6.8-1.9-8.3-4.8-15.1-8.1-19.2-3.8-4.8-3.7-7.7.6-12.8 3.4-4.1 4.3-6 2.7-6-.4 0-1.3.5-1.9 1.1-.8.8-.6-.9.3-4.7 1.6-6 1.2-13.8-.7-15-.6-.3-1.7.2-2.4 1.2-1.3 1.8-1.4 1.8-1.5.1 0-2.3-3.2-2.2-5.3.3-2 2.4-3.7 1.8-3.7-1.1 0-1-.5-1.9-1.1-1.9s-.9-.6-.6-1.4c.4-1.1-.4-1.4-3.2-1.2-2.9.1-3.7-.3-3.3-1.2.4-1.1-.9-1.3-6.2-1-5 .2-6.5 0-6.1-1 .2-.6-.1-1.2-.8-1.3-.7 0-5.2-.5-10.2-1-4.9-.5-11.6-1.2-14.7-1.5-4.2-.5-5.5-1-5.1-2 .6-1.5-1.2-1.6-14.7-.4zm114.4 119.6c.3.9.6 3.1.6 5.1v3.5l7.8-.3 7.7-.4.7 7.2c1.2 11.8 6.3 30.5 11.9 43.5l3 6.8-1.9 3.7c-2.3 4.5-3.7 10.6-5.2 22.7-.8 6.5-2 10.6-4.5 15.6-4.6 9.2-6.2 15.4-4.5 18.4 1.7 3.3.5 7.6-4.1 14.6-5.4 8-18 19.7-19.1 17.6-1.4-2.4-7.3-5.6-10.5-5.6-1.7 0-4.2.9-5.6 2-3.3 2.6-5.5 2.5-11.5-.5-2.8-1.4-6.3-2.5-7.8-2.5-2.3 0-4.9-2-12.6-9.7-6.2-6.1-9.8-10.5-9.8-11.8 0-1.2-.7-4.5-1.5-7.3-1.8-5.8-5-8.7-9-8-2.1.4-3.1-.3-6-4.2-1.9-2.6-3.5-5-3.5-5.4 0-.3 1.3-2.4 2.9-4.7 1.6-2.2 3.3-5.5 3.6-7.2.9-4.3 5-11.3 7.2-12.2 1-.4 5.9-.9 10.8-1 5-.2 11-.8 13.5-1.4s7.9-1.1 12.1-1.1c6.2 0 8.1-.4 10.3-2.1 6.1-4.8 7.6-14.4 3.1-19.7-1.4-1.7-2.5-3.4-2.5-4 0-.5 1.1-1.7 2.5-2.6 2.8-1.8 3.2-4.3 1.1-7.1-1.3-1.7-1.1-2.2 1.1-4.3 2.2-2 2.4-2.8 1.7-6-.4-2-.8-5.3-.8-7.2-.1-3.2.2-3.5 4.3-5 2.4-.8 5.3-2.7 6.3-4.1 1.9-2.4 1.9-2.8.4-5.6-.8-1.7-2.7-4.5-4.2-6.2-2.9-3.4-2.6-3.8 4.1-4.4 2.2-.2 4.7-.4 5.6-.5s2 .5 2.3 1.4z"></path></svg>`
    //             },
    //             {
    //                 title: 'Search news',
    //                 link: 'https://seafarer.news#search-news-btn',
    //                 icon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>`
    //             },
    //             {
    //                 title: 'Last news',
    //                 link: 'https://seafarer.news#last-news',
    //                 icon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"></path></svg>`
    //             },
    //             {
    //                 title: 'News of the year',
    //                 link: 'https://seafarer.news#news-year',
    //                 icon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>`
    //             },
    //             {
    //                 title: 'News of the month',
    //                 link: 'https://seafarer.news#news-month',
    //                 icon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>`
    //             },
    //             {
    //                 title: 'News of the week',
    //                 link: 'https://seafarer.news#news-week',
    //                 icon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>`
    //             },
    //         ];
    //
    //     arrLinkMenu.forEach(item => {
    //         const li = document.createElement('li'),
    //             a = document.createElement('a');
    //
    //         a.href = item['link'];
    //         a.innerHTML = item['icon'] + item['title'];
    //         li.append(a);
    //         mainMenuUl.append(li);
    //     })
    //
    //     mainMenuElem.classList.add('main-menu');
    //     mainMenuElem.append(mainMenuUl);
    //     headerNavMain.append(mainMenuElem);
    // }

    // footer
    // const footer = document.querySelector('.footer .container'),
    //     footerBox = document.createElement('ul'),
    //     link = [
    //         {
    //             text: 'Telegram',
    //             link: 'https://seafarer.news/r/?stat_redir=SeafarerNews',
    //             linkText: '@SeafarerNews',
    //         },
    //         {
    //             text: 'Contact',
    //             link: 'https://seafarer.news/r/?stat_redir=ArxRaut',
    //             linkText: '@ArxRaut',
    //         },
    //         {
    //             text: 'Design & Frontend',
    //             link: 'https://seafarer.news/r/?stat_redir=SergiusX',
    //             linkText: '@SergiusX',
    //         },
    //     ];
    //
    // footerBox.classList.add('footer-box');
    //
    // footer.append(footerBox);
    //
    // link.forEach(function(item) {
    //     const li = document.createElement('li'),
    //         a = document.createElement('a');
    //
    //     a.classList.add('footer-link');
    //     a.innerHTML = `<span>${item['text']}</span><span>${item['linkText']}</span>`;
    //     a.href = item['link'];
    //     a.target = "_blank";
    //     li.append(a);
    //     footerBox.append(li);
    // });

    // copyright
    
});