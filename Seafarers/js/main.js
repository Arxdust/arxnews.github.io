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

    headerMainLogo.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"><path class="st0" d="M1730,4590c-41-3-83-10-92-14c-11-5-18-4-18,3c0,18-29,13-79-13c-25-13-68-29-95-36c-68-16-121-44-177-97 c-34-31-49-41-49-29c0,28-19,18-73-36c-34-34-57-68-65-95c-9-31-17-41-28-36c-12,4-14,0-9-18c7-32-25-95-46-91c-14,2-17-10-21-66 c-3-52-11-85-38-138c-32-66-34-75-38-204c-5-148,9-233,50-299c14-22,21-47,19-68c-1-19,2-33,8-33s11-11,11-25c0-15,6-25,14-25 c18,0,29-35,26-79c-1-19,1-63,5-97c5-50,10-62,21-57c13,5,14-1,8-32c-4-25-3-36,3-32c15,10,25-71,17-132c-4-35-3-51,5-51 c6,0,11-7,11-15c0-12-15-15-79-15c-84,0-91-4-91-55c0-30-20-43-32-21c-14,24-47,20-60-9c-7-15-24-28-42-33s-36-18-42-33 c-16-33-27-276-14-284c6-4,5-16-4-33c-8-15-19-63-26-107c-21-143-60-332-90-437c-47-164-60-251-60-400c0-130,2-143,34-240 c19-57,37-129,41-161s29-135,56-230c69-238,125-469,139-568c6-46,13-99,16-116l5-33h1120h1120l-6,43c-20,152-35,338-35,451v133 l105,6c57,4,126,11,152,17c78,17,244,92,279,127c17,17,56,78,86,135s92,160,137,228c101,149,137,223,151,312c6,37,9,71,8,75 s6,33,14,63c9,30,25,91,36,135s34,118,51,165c16,47,37,123,46,169c17,81,17,84-2,110c-11,14-30,27-42,29c-15,2-21,9-17,18 c4,10-2,14-19,14c-14,0-25,5-25,10c0,6-9,10-21,10c-19,0-21,4-15,38c20,124,20,116-13,154c-16,19-51,46-76,59c-39,21-45,27-40,48 c9,36-14,129-40,158l-23,27l20,45c38,90,49,162,55,364l6,198l71-6c148-14,265-35,305-56c22-11,41-25,41-30s26-9,58-9 c60,0,102,19,102,46c0,12,9,14,45,8c48-7,74,6,96,48c23,43,39,181,39,339c0,153-2,168-21,193c-20,25-23,26-135,26s-116-1-140-27 s-30-27-207-39c-100-7-203-15-229-17c-46-4-46-3-61,35c-12,29-21,38-40,38c-27,0-46-18-73-70c-15-29-19-31-21-15 c-14,85-38,147-65,170c-29,25-63,32-84,17c-16-10-34-48-34-70c0-17-9-20-57-25c-32-3-70-9-84-12c-25-7-26-5-31,45 c-6,56-26,85-68,95c-30,7-76-24-90-61c-8-21-16-24-62-24c-48,0-55-3-80-34c-16-19-28-40-28-45c0-6-18-11-40-11c-29,0-42-5-50-20 c-6-11-9-24-6-28c3-5-4-16-15-25c-10-9-19-29-19-45c0-32-2-32-156-10l-82,11l-6,38c-3,21-12,44-19,51c-8,7-20,38-27,68 c-19,83-48,151-81,192c-38,48-37,77,6,128c34,41,43,60,27,60c-4,0-13-5-19-11c-8-8-6,9,3,47c16,60,12,138-7,150c-6,3-17-2-24-12 c-13-18-14-18-15-1c0,2 c4,11-9,13-62,10c-50-2-65,0-61,10c2,6-1,12-8,13c-7,0-52,5-102,10c-49,5-116,12-147,15c-42,5-55,10-51,20 C1883,4601,1865,4602,1730,4590z M2874,3394c3-9,6-31,6-51v-35l78,3l77,4l7-72c12-118,63-305,119-435l30-68l-19-37 c-23-45-37-106-52-227c-8-65-20-106-45-156c-46-92-62-154-45-184c17-33,5-76-41-146c-54-80-180-197-191-176c-14,24-73,56-105,56 c-17,0-42-9-56-20c-33-26-55-25-115,5c-28,14-63,25-78,25c-23,0-49,20-126,97c-62,61-98,105-98,118c0,12-7,45-15,73 c-18,58-50,87-90,80c-21-4-31,3-60,42c-19,26-35,50-35,54c0,3,13,24,29,47c16,22,33,55,36,72c9,43,50,113,72,122c10,4,59,9,108,10 c50,2,110,8,135,14s79,11,121,11c62,0,81,4,103,21c61,48,76,144,31,197c-14,17-25,34-25,40c0,5,11,17,25,26c28,18,32,43,11,71 c-13,17-11,22,11,43c22,20,24,28,17,60c-4,20-8,53-8,72c-1,32,2,35,43,50c24,8,53,27,63,41c19,24,19,28,4,56c-8,17-27,45-42,62 c-29,34-26,38,41,44c22,2,47,4,56,5S2871,3403,2874,3394z"/></g></svg>`
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


    inviteLoad += 1;
});

invite += 1;