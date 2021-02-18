let invite = 0;
let inviteLoad = 0;

// pre-load css
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
    // logo
    const headerMainLogo = document.querySelector('.logo-img');

    headerMainLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs/><path d="M173 41c-4.1.3-8.3 1-9.2 1.4-1.1.5-1.8.4-1.8-.3 0-1.8-2.9-1.3-7.9 1.3-2.5 1.3-6.8 2.9-9.5 3.6-6.8 1.6-12.1 4.4-17.7 9.7-3.4 3.1-4.9 4.1-4.9 2.9 0-2.8-1.9-1.8-7.3 3.6-3.4 3.4-5.7 6.8-6.5 9.5-.9 3.1-1.7 4.1-2.8 3.6-1.2-.4-1.4 0-.9 1.8.7 3.2-2.5 9.5-4.6 9.1-1.4-.2-1.7 1-2.1 6.6-.3 5.2-1.1 8.5-3.8 13.8-3.2 6.6-3.4 7.5-3.8 20.4-.5 14.8.9 23.3 5 29.9 1.4 2.2 2.1 4.7 1.9 6.8-.1 1.9.2 3.3.8 3.3s1.1 1.1 1.1 2.5c0 1.5.6 2.5 1.4 2.5 1.8 0 2.9 3.5 2.6 7.9-.1 1.9.1 6.3.5 9.7.5 5 1 6.2 2.1 5.7 1.3-.5 1.4.1.8 3.2-.4 2.5-.3 3.6.3 3.2 1.5-1 2.5 7.1 1.7 13.2-.4 3.5-.3 5.1.5 5.1.6 0 1.1.7 1.1 1.5 0 1.2-1.5 1.5-7.9 1.5-8.4 0-9.1.4-9.1 5.5 0 3-2 4.3-3.2 2.1-1.4-2.4-4.7-2-6 .9-.7 1.5-2.4 2.8-4.2 3.3s-3.6 1.8-4.2 3.3c-1.6 3.3-2.7 27.6-1.4 28.4.6.4.5 1.6-.4 3.3-.8 1.5-1.9 6.3-2.6 10.7-2.1 14.3-6 33.2-9 43.7-4.7 16.4-6 25.1-6 40 0 13 .2 14.3 3.4 24 1.9 5.7 3.7 12.9 4.1 16.1s2.9 13.5 5.6 23c6.9 23.8 12.5 46.9 13.9 56.8.6 4.6 1.3 9.9 1.6 11.6l.5 3.3h224l-.6-4.3c-2-15.2-3.5-33.8-3.5-45.1v-13.3l10.5-.6c5.7-.4 12.6-1.1 15.2-1.7 7.8-1.7 24.4-9.2 27.9-12.7 1.7-1.7 5.6-7.8 8.6-13.5s9.2-16 13.7-22.8c10.1-14.9 13.7-22.3 15.1-31.2.6-3.7.9-7.1.8-7.5s.6-3.3 1.4-6.3c.9-3 2.5-9.1 3.6-13.5s3.4-11.8 5.1-16.5c1.6-4.7 3.7-12.3 4.6-16.9 1.7-8.1 1.7-8.4-.2-11-1.1-1.4-3-2.7-4.2-2.9-1.5-.2-2.1-.9-1.7-1.8.4-1-.2-1.4-1.9-1.4-1.4 0-2.5-.5-2.5-1 0-.6-.9-1-2.1-1-1.9 0-2.1-.4-1.5-3.8 2-12.4 2-11.6-1.3-15.4-1.6-1.9-5.1-4.6-7.6-5.9-3.9-2.1-4.5-2.7-4-4.8.9-3.6-1.4-12.9-4-15.8l-2.3-2.7 2-4.5c3.8-9 4.9-16.2 5.5-36.4l.6-19.8 7.1.6c14.8 1.4 26.5 3.5 30.5 5.6 2.2 1.1 4.1 2.5 4.1 3s2.6.9 5.8.9c6 0 10.2-1.9 10.2-4.6 0-1.2.9-1.4 4.5-.8 4.8.7 7.4-.6 9.6-4.8 2.3-4.3 3.9-18.1 3.9-33.9 0-15.3-.2-16.8-2.1-19.3-2-2.5-2.3-2.6-13.5-2.6s-11.6.1-14 2.7-3 2.7-20.7 3.9c-10 .7-20.3 1.5-22.9 1.7-4.6.4-4.6.3-6.1-3.5-1.2-2.9-2.1-3.8-4-3.8-2.7 0-4.6 1.8-7.3 7-1.5 2.9-1.9 3.1-2.1 1.5-1.4-8.5-3.8-14.7-6.5-17-2.9-2.5-6.3-3.2-8.4-1.7-1.6 1-3.4 4.8-3.4 7 0 1.7-.9 2-5.7 2.5-3.2.3-7 .9-8.4 1.2-2.5.7-2.6.5-3.1-4.5-.6-5.6-2.6-8.5-6.8-9.5-3-.7-7.6 2.4-9 6.1-.8 2.1-1.6 2.4-6.2 2.4-4.8 0-5.5.3-8 3.4-1.6 1.9-2.8 4-2.8 4.5 0 .6-1.8 1.1-4 1.1-2.9 0-4.2.5-5 2-.6 1.1-.9 2.4-.6 2.8.3.5-.4 1.6-1.5 2.5-1 .9-1.9 2.9-1.9 4.5 0 3.2-.2 3.2-15.6 1l-8.2-1.1-.6-3.8c-.3-2.1-1.2-4.4-1.9-5.1-.8-.7-2-3.8-2.7-6.8-1.9-8.3-4.8-15.1-8.1-19.2-3.8-4.8-3.7-7.7.6-12.8 3.4-4.1 4.3-6 2.7-6-.4 0-1.3.5-1.9 1.1-.8.8-.6-.9.3-4.7 1.6-6 1.2-13.8-.7-15-.6-.3-1.7.2-2.4 1.2-1.3 1.8-1.4 1.8-1.5.1 0-2.3-3.2-2.2-5.3.3-2 2.4-3.7 1.8-3.7-1.1 0-1-.5-1.9-1.1-1.9s-.9-.6-.6-1.4c.4-1.1-.4-1.4-3.2-1.2-2.9.1-3.7-.3-3.3-1.2.4-1.1-.9-1.3-6.2-1-5 .2-6.5 0-6.1-1 .2-.6-.1-1.2-.8-1.3-.7 0-5.2-.5-10.2-1-4.9-.5-11.6-1.2-14.7-1.5-4.2-.5-5.5-1-5.1-2 .6-1.5-1.2-1.6-14.7-.4zm114.4 119.6c.3.9.6 3.1.6 5.1v3.5l7.8-.3 7.7-.4.7 7.2c1.2 11.8 6.3 30.5 11.9 43.5l3 6.8-1.9 3.7c-2.3 4.5-3.7 10.6-5.2 22.7-.8 6.5-2 10.6-4.5 15.6-4.6 9.2-6.2 15.4-4.5 18.4 1.7 3.3.5 7.6-4.1 14.6-5.4 8-18 19.7-19.1 17.6-1.4-2.4-7.3-5.6-10.5-5.6-1.7 0-4.2.9-5.6 2-3.3 2.6-5.5 2.5-11.5-.5-2.8-1.4-6.3-2.5-7.8-2.5-2.3 0-4.9-2-12.6-9.7-6.2-6.1-9.8-10.5-9.8-11.8 0-1.2-.7-4.5-1.5-7.3-1.8-5.8-5-8.7-9-8-2.1.4-3.1-.3-6-4.2-1.9-2.6-3.5-5-3.5-5.4 0-.3 1.3-2.4 2.9-4.7 1.6-2.2 3.3-5.5 3.6-7.2.9-4.3 5-11.3 7.2-12.2 1-.4 5.9-.9 10.8-1 5-.2 11-.8 13.5-1.4s7.9-1.1 12.1-1.1c6.2 0 8.1-.4 10.3-2.1 6.1-4.8 7.6-14.4 3.1-19.7-1.4-1.7-2.5-3.4-2.5-4 0-.5 1.1-1.7 2.5-2.6 2.8-1.8 3.2-4.3 1.1-7.1-1.3-1.7-1.1-2.2 1.1-4.3 2.2-2 2.4-2.8 1.7-6-.4-2-.8-5.3-.8-7.2-.1-3.2.2-3.5 4.3-5 2.4-.8 5.3-2.7 6.3-4.1 1.9-2.4 1.9-2.8.4-5.6-.8-1.7-2.7-4.5-4.2-6.2-2.9-3.4-2.6-3.8 4.1-4.4 2.2-.2 4.7-.4 5.6-.5s2 .5 2.3 1.4z"/></svg>`;
    // switch-theme
    let switchTheme = document.querySelector('.switch-theme'),
        body = document.querySelector('.body');

    if (localStorage.getItem('theme') == 'white') {
        body.classList.add('white');
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
        body.classList.remove('white');
    }

    switchTheme.addEventListener('click', function(){
        let dark = body.classList.contains('dark');

        if (dark) {
            body.classList.remove('dark');
            body.classList.add('white');
            localStorage.setItem('theme', 'white');
        } else {
            body.classList.add('dark');
            body.classList.remove('white');
            localStorage.setItem('theme', 'dark');
        }
    })
    
    // text-range
    const textRange = document.querySelector('.text-range'),
        newsTitle = document.querySelector('.news-title'),
        newsDescription = document.querySelector('.news-box__header-title h2'),
        newsText = document.querySelector('.news-box__body-text');

    if (typeof localStorage.getItem('textRange') == "string") {
        textRange.valueAsNumber = parseInt(localStorage.getItem('textRange'))
    } else {
        textRange.valueAsNumber = 0;
    }

    let countTextRange = textRange.valueAsNumber;

    funcTextRange();

    textRange.addEventListener('input', function(event) {
        countTextRange = event.target.valueAsNumber;
        funcTextRange();
    });

    textRange.addEventListener('mouseup', lStorageText);
    textRange.addEventListener('touchend', lStorageText);

    function lStorageText() {
        localStorage.setItem('textRange', countTextRange);
    }

    function funcTextRange() {
        newsTitle.style.fontSize = 30 + 10 / 100 * countTextRange + 'px';
        newsTitle.style.lineHeight = 36 + 16 / 100 * countTextRange + 'px';
        newsDescription.style.fontSize = 20 + 10 / 100 * countTextRange + 'px';
        newsDescription.style.lineHeight = 26 + 16 / 100 * countTextRange + 'px';
        newsText.style.fontSize = 16 + 8 / 100 * countTextRange + 'px';
        newsText.style.lineHeight = 22 + 11 / 100 * countTextRange + 'px';
    }

    // animation header
    const headerBg = document.querySelector('.header-bg'),
        shipImg = document.querySelector('.ship-img');

    if (typeof sessionStorage.getItem('animation') == 'string') {
        headerBg.style.animation = 'none';
        shipImg.style.animation = 'none';
    }

    headerBg.addEventListener('animationend', function(event) {
        event.target.style.animation = 'none';
        sessionStorage.setItem('animation', 'done');
    });

    // view-img
    const newsBoxHeaderImg = document.querySelector('.news-box__header-img');

    newsBoxHeaderImg.addEventListener('click', function(){
        newsBoxHeaderImg.classList.toggle('view');

        if (document.querySelector(".news-box__header-img").classList.contains("view")) {
            newsBoxImg.classList.remove('zoom');
        }
    })

    // zoom-img
    const newsBoxImg = document.querySelector('.news-box__img');

    newsBoxHeaderImg.addEventListener('mouseover',
    function(){
        if (document.querySelector(".news-box__header-img").classList.contains("view") == false) {
            newsBoxImg.classList.add('zoom');
            newsBoxImg.classList.remove('zoomout');
        } else {
            newsBoxImg.classList.remove('zoom');
        }
    });

    newsBoxHeaderImg.addEventListener('mouseout',
    function(){
        if (document.querySelector(".news-box__header-img").classList.contains("view") == false) {
            newsBoxImg.classList.add('zoomout');
            newsBoxImg.classList.remove('zoom');
        } else {
            newsBoxImg.classList.remove('zoom');
        }
    });

    // autosize textarea
    let tx = document.querySelectorAll('.textarea');

    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px');
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }

    // footer
    const footer = document.querySelector('.footer .container'),
        footerBox = document.createElement('ul'),
        link = [
        {
            text: 'Telegram',
            link: 'https://t.me/SeafarerNews',
            linkText: '@SeafarerNews',
            value: 0,
        },
        {
            text: 'Contact',
            link: 'https://t.me/ArxRaut',
            linkText: '@ArxRaut',
            value: 0,
        },
        {
            text: 'Design & Frontend',
            link: 'https://t.me/SergiusX',
            linkText: '@SergiusX',
            value: 0,
        },
    ];

    footerBox.classList.add('footer-box');

    footer.append(footerBox);

    link.forEach(function(item) {
        let li = document.createElement('li'),
            a = document.createElement('a');

        a.classList.add('link');
        a.innerText = item['linkText'];
        a.href = item['link'];
        a.target = "_blank";
        a.addEventListener('click', function() {
            item['value'] += 1;
            console.log(item['value']);
        });

        li.innerHTML += '<span>' + item['text'] + ' </span>';
        li.append(a);
        footerBox.append(li);
    });

    // last news
    const newsMenu = document.querySelector('.news-menu'),
        preImg = 'https://arxdust.github.io/arxnews.github.io/Seafarers/images/pre-img.jpg',
        newsUl = document.createElement('ul');

    arrayIsArray(lastNews);

    function arrayIsArray(arr) {
        if (Array.isArray(arr)) {
            renderLastNews(arr);
        }
    }

    function renderLastNews(arr) {
        arr.forEach(function(item) {
            let li = document.createElement('li'),
                title = document.createElement('span'),
                divImg = document.createElement('div'),
                divBg = document.createElement('div'),
                a = document.createElement('a');

            typeof item['title'] == 'string' ? title.innerHTML = item['title'] : title.innerHTML = 'Title';
            typeof item['img'] == 'string' ? divImg.style.backgroundImage = `url(${item['img']})` : divImg.style.backgroundImage = `url(${preImg})`;

            divImg.classList.add('pre-img');
            a.href = item['url'];
            a.setAttribute('title', '');
            a.classList.add('news-link');

            a.append(title, divBg, divImg);
            li.append(a);
            newsUl.append(li);
        });

        newsUl.classList.add('unselect');
        newsMenu.append(newsUl);
    }

    // checkUrlImg
    function checkUrlImg() {
        new Promise((resolve, reject) => {
            let img = new Image();
            img.src = imgUrl;

            img.onload = () => resolve(imgUrl);
            img.onerror = () => reject(new Error(`Img undefined: ${imgUrl}`));
        }).then(url => {imgUrl = url}, error => {imgUrl = preImg});
    }

    // event touch
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null,
        yDown = null;

    function getTouches(evt) {
        return evt.touches || evt.originalEvent.touches;
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        let xWindows = window.innerWidth,
            yWindows = window.innerHeight,
            xUp = evt.touches[0].clientX,
            yUp = evt.touches[0].clientY,
            xDiff = xDown - xUp,
            yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff < -10 ) {
                /* left swipe */
                if (xWindows / 4 > xDown) {
                    newsMenu.classList.add('swipe');
                }
            } else if (xDiff > 10) {
                /* right swipe */
                // if (xWindows - (xWindows / 3) < xDown) {
                //     newsMenu.classList.remove('swipe')
                // }
                newsMenu.classList.remove('swipe')
            }
            // xDiff < 0 ? newsMenu.classList.add('swipe') : newsMenu.classList.remove('swipe');
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

    //header-nav
    const headerNav = document.querySelector('.header-nav'),
        headerBox = document.querySelector('.header-box'),
        headerNavBtn = document.createElement('div'),
        headerNavBtnLine = document.createElement('div');

    headerNavBtn.classList.add('header-nav-btn');

    headerNavBtn.addEventListener('click', function() {
        headerNavBtn.classList.toggle('open');
        headerNav.classList.toggle('open');
    })

    headerNavBtn.append(headerNavBtnLine);
    headerBox.append(headerNavBtn);

    //switch-theme
    const btnSwitchTheme = document.createElement('div'),
        headerNavHeader = document.querySelector('.header-nav__header'),
        darkTheme = document.createElement('div'),
        whiteTheme = document.createElement('div');

    darkTheme.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>`;
    whiteTheme.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>`

    btnSwitchTheme.classList.add('btn-switch-theme');
    darkTheme.classList.add('dark-theme');
    whiteTheme.classList.add('white-theme');

    btnSwitchTheme.append(darkTheme);
    btnSwitchTheme.append(whiteTheme);
    headerNavHeader.append(btnSwitchTheme);

    //font-size
    const btnSwitchFont = document.createElement('div');

    btnSwitchFont.insertAdjacentHTML('beforeend', `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="font" className="svg-inline--fa fa-font fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"></path> </svg>`);

    btnSwitchFont.classList.add('btn-switch-font');

    btnSwitchFont.append(btnFont);
    headerNavHeader.append(btnSwitchFont)

    inviteLoad += 1;
});

invite += 1;