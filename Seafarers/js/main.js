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
                a = document.createElement('a'),
                imgUrl = item['img'];
            new Promise((resolve, reject) => {
                let img = new Image();
                img.src = imgUrl;

                img.onload = () => resolve(imgUrl);
                img.onerror = () => reject(new Error(`Img undefined: ${imgUrl}`));
            }).then(url => {imgUrl = url}, error => {imgUrl = preImg});

            typeof item['title'] == 'string' ? title.innerHTML = item['title'] : title.innerHTML = 'Title';
            typeof item['img'] == 'string' ? divImg.style.backgroundImage = `url(${imgUrl})` : divImg.style.backgroundImage = `url(${preImg})`;

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
        headerNavBtn = document.createElement('div');

    headerNavBtn.classList.add('header-nav-btn');

    headerNavBtn.addEventListener('click', function() {
        headerNavBtn.classList.toggle('open');
        headerNav.classList.toggle('open');
    })

    inviteLoad += 1;
});

invite += 1;