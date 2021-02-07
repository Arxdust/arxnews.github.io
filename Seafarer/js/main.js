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
    link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarer/css/style.css';
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
});