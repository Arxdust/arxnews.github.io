let invite = 0;
let inviteLoad = 0;

// pre-load css
function addstyle() {
    let link = document.createElement('link');
    let loader = document.querySelector('.loader');

    loader.animate([
        { backgroundColor: '#0694d4', easing: 'ease-out' },
        { backgroundColor: '#3dc5ff', easing: 'ease-in' },
        { backgroundColor: '#0694d4', easing: 'ease-out' },
    ],  {
        duration: 1000,
        iterations: Infinity
    });

    link.rel = 'stylesheet';
    link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarers/css/style.css';
    document.head.appendChild(link);
    link.onload = function(){
        loader.style.opacity = 0;
        
        setTimeout(function() {
            loader.remove();
        }, 200);
    };
}

window.addEventListener('load', function() {
    // switch-theme
    const switchTheme = document.querySelector('.switch-theme');
    const body = document.querySelector('.body');

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
    })
    
    // text-range
    const textRange = document.querySelector('.text-range');
    const newsTitle = document.querySelector('.news-title');
    const newsDescription = document.querySelector('.news-box__header-title h2');
    const newsText = document.querySelector('.news-box__body-text');

    if (typeof localStorage.getItem('textRange') == "string") {
        textRange.valueAsNumber = parseInt(localStorage.getItem('textRange'))
    } else {
        textRange.valueAsNumber = 0;
    }

    let countTextRange = textRange.valueAsNumber;

    fTextRange();

    textRange.addEventListener('input', function(event) {
        countTextRange = event.target.valueAsNumber;
        fTextRange();
    });

    textRange.addEventListener('mouseup', lStorageText);
    textRange.addEventListener('touchend', lStorageText);

    function lStorageText() {
        localStorage.setItem('textRange', countTextRange);
    }

    function fTextRange() {
        newsTitle.style.fontSize = 30 + 30 / 100 * countTextRange + 'px';
        newsDescription.style.fontSize = 20 + 20 / 100 * countTextRange + 'px';
        newsText.style.fontSize = 16 + 16 / 100 * countTextRange + 'px';
        newsText.style.lineHeight = 22 + 22 / 100 * countTextRange + 'px';
    }

    // animation header
    const headerBg = document.querySelector('.header-bg');
    const shipImg = document.querySelector('.ship-img');

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
    var tx = document.querySelectorAll('.textarea');
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px');
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }

    // footer
    let footer = document.querySelector('.footer .container');
    let footerBox = document.createElement('ul');
    let link = [
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
        let li = document.createElement('li');
        let a = document.createElement('a');

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

    // menu-box

    let titleMenuBox = document.createElement('h1');
    let mainContainer = document.querySelector('.main .container');
    let newsBox = document.querySelector('.news-box');
    let newsMenu = document.createElement('div');
    let newsUl = document.createElement('ul');
    let newsRenderH1 = document.querySelector('.news-render h1');
    let newsRenderH2 = document.querySelector('.news-render h2');
    let newsRenderImg = document.querySelector('.news-render img');
    let wWindow = window.innerWidth;
    let hWindow = window.innerHeight;
    let news = [
        {
            img: 'https://telegra.ph/file/c9660ebd112acc14366a6.jpg',
            title: 'Молодых моряков используют как дешевую рабсилу за 200 USD/месяц',
            hover: 0,
            click: 0,
        },
        {
            img: 'https://telegra.ph/file/18867ee65b873b472d2d0.jpg',
            title: 'Моряк должен равноценно и работать, и отдыхать на судне',
            hover: 0,
            click: 0,
        },
        {
            img: '../images/Black.jpg',
            title: 'Title',
            hover: 0,
            click: 0,
        },
        {
            img: 'https://cdn4.telesco.pe/file/WhUWpJ8AWpAfYZipvK4zMsEy13W-92QDV1ywLTZ7FiSHJUuOoenXJJwn6CeqW5WF_CdaNS7nfCeDnqxoQ1Gpa1wZiZiDkJo8DNVW1EF6vzrNMrhMoPblIFtkz9WKhhqjom2BrIfwrvw8-wWgZ5IvjT_Z5OFMWb4WL5yQ35DMPHHMbzQBe-lYZQtpiJ6MfP2CDiMfmOB8Dz637feCtf4nQsVvrnjdJlgWbe9a33niU0iNGpIKkjMqCD0jU64LDC4EDwUnvvZMTq7TsigcCP13d7W3AximsGNIyTQzPk4L1ZMhYdvqfdArG94vfYMFZJPvE3Je-rAiRDmn1octZ5ajBA.jpg',
            title: 'Средний курс в банках Украины',
            hover: 0,
            click: 0,
        },
    ];

    newsUl.classList.add('unselect');
    titleMenuBox.innerText = "Last news";

    news.forEach(function(item) {
        let li = document.createElement('li');
        let title = document.createElement('p');
        let divImg = document.createElement('div');
        let divBg = document.createElement('div');

        li.addEventListener('mouseenter', function() {
            item['hover'] += 1;
        })

        li.addEventListener('click', function(e) {
            e.preventDefault();
            item['click'] += 1;
            console.dir(newsBoxImg);
            newsRenderH1.innerHTML = item['title'];
            newsRenderImg.src = item['img'];
            newsMenu.classList.remove('swipe');
            document.scrollingElement.scrollTop = 0;
        });

        divImg.classList.add('pre-img');
        divImg.style.backgroundImage = 'url(' + item['img'] + ')';
        title.innerHTML = item['title'];
        li.append(title, divBg, divImg);
        newsUl.append(li);
    });

    newsMenu.append(titleMenuBox, newsUl);

    funcMenuBox();

    function funcMenuBox() {
        newsMenu.classList.add('news-menu');
        newsMenu.id = "newsMenu";
        newsBox.append(newsMenu);
    }

    // event touch
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;                                                        
    let yDown = null;

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

        let xWindows = window.innerWidth;
        let yWindows = window.innerHeight;

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

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

    // news footer box
    const newsFooterBox = document.querySelector('.news-footer-box');
    newsFooterBox.classList.add('disabled');

    // document.addEventListener('touchmove', scrollFixedBlock);

    // function scrollFixedBlock(event) {
    //     console.dir(event.target);
    //     newsMenu.classList.add('swipe');
    // }

    // newsMenu.scrollIntoView();


    // function footerLinkClick(event) {
    //     console.dir(event.target);
    // }
    
    // tab-menu
    // $('.tab-menu a').click(function(e){
    //     e.preventDefault();

    //     $(this).parent().siblings().removeClass('active');
    //     $(this).parent().addClass('active');

    //     let tab = $(this).attr('href');
    //     $(tab).siblings().removeClass('active');
    //     $(tab).addClass('active');
    // });

    // context menu
    // const context = document.querySelector('.context');

    // document.addEventListener('contextmenu', function(event){
    //     event.preventDefault();

    //     let clientX = event.clientX;
    //     let clientY = event.clientY;
    //     let contextStyle = window.getComputedStyle(context);
    //     let wContext = parseInt(contextStyle.getPropertyValue('width') + 2*contextStyle.getPropertyValue('border-width'));
    //     let hContext = parseInt(contextStyle.getPropertyValue('height') + 2*contextStyle.getPropertyValue('border-height'));
    //     let wWindows = window.innerWidth;
    //     let hWindows = window.innerHeight;

    //     if(clientX >= wWindows - wContext) {
    //         clientX -= wContext;
    //     };

    //     if(clientY >= hWindows - hContext) {
    //         clientY -= hContext;
    //     };

    //     context.classList.add('show');
    //     context.style.left = clientX + 'px';
    //     context.style.top = clientY + 'px';

    //     document.addEventListener('click', onHideContext);
    // });

    // function onHideContext(event){
    //     context.classList.remove('show');
    // }

    inviteLoad += 1;
});

invite += 1;