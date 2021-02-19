window.addEventListener('load', function () {
    // render news
    const body = document.querySelector('.body'),
        renderNewsH1 = document.querySelector('.news-render h1'),
        renderNewsH2 = document.querySelector('.news-render h2'),
        newsBoxBody = document.querySelector('.news-box__body'),
        renderText = document.querySelector('.news-box__body-text'),
        newsRender = document.querySelector('.news-render'),
        newsBoxImg = document.querySelector('.news-box__img'),
        preImg = 'https://arxdust.github.io/arxnews.github.io/Seafarers/images/pre-img.jpg',
        preRenderText = renderText;

    function render(item) {
        let div = document.createElement('div'),
            txt = null;

        div.innerHTML = item;
        txt = div.innerText;
        return txt;
    }

    renderText.remove();

    renderNewsH1.innerHTML = render(title);
    renderNewsH2.innerHTML = render(description);
    renderText.innerHTML = render(articles);
    checkUrlImg(img).then( result => { newsBoxImg.src = img }, error => { newsBoxImg.src = preImg });

    scanRenderText();

    function scanRenderText() {
        for (let key in renderText.childNodes) {
            let tagName = renderText.childNodes[key].tagName;

            if (tagName == "DIV" || tagName == "FIGURE" || tagName == "IMG") {
                renderNewsBoxFooter();
            }
        }
    }

    function renderNewsBoxFooter() {
        let newsBoxFooter = document.createElement('div');

        renderText.childNodes.forEach(function(item) {
            if (item.tagName == "DIV" || item.tagName == "FIGURE" || item.tagName == "IMG") {
                let div = document.createElement('div'),
                    newItem = item;

                item.remove();
                div.append(newItem);
                newsBoxFooter.append(div);
            }
        });

        newsBoxFooter.classList.add('news-box__footer');
        newsRender.append(newsBoxFooter);
    }

    newsBoxBody.append(preRenderText);

    // view-img
    const newsBoxHeaderImg = document.querySelector('.news-box__header-img');

    newsBoxHeaderImg.addEventListener('click', function(){
        newsBoxHeaderImg.classList.toggle('view');
        body.classList.toggle('hidden');

        if (document.querySelector(".news-box__header-img").classList.contains("view")) {
            newsBoxImg.classList.remove('zoom');
        }
    })

    // zoom-img
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

    // render comment
    const comment = document.querySelector('.comment'),
        commentUl = document.createElement('ul'),
        commentThisBox = document.querySelector('comment-this-box');

    renderBackendComments(commentNews);

    function renderBackendComments(arr) {
        if (Array.isArray(arr)) {
            renderComments(arr);
        }
    }

    function renderComments(arr) {
        arr.forEach(function(item) {
            let li = document.createElement('li'),
                divImg = document.createElement('div'),
                nameP = document.createElement('p'),
                commentP = document.createElement('p'),
                name = item['userName'],
                img = item['userImg'],
                comment = item['userText'];

            divImg.classList.add('user-img-box');
            commentP.classList.add('user-comment');
            nameP.classList.add('user-name');

            checkUrlImg(img).then( result => {divImg.style.backgroundImage = `url(${img})`});
            nameP.innerText = name;
            commentP.innerText = comment;
            li.innerHTML = `${divImg}<div class='name'>${nameP}</div><div class="comment-box"><div class="post">${commentP}</div></div>`

            commentUl.append(li);
        });

        comment.append(commentUl);
    }

    renderLinkComment(linkComment);

    function renderLinkComment(url) {
        let a = document.createElement('a'),
            span = document.createElement('span'),
            svg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#231f20" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>`

        a.href = url;
        a.target = "_blank";
        span.innerText = 'Write a comment...';
        a.innerHTML = `${span + svg}`;

        commentThisBox.append(a);
    }

    // last news
    const newsMenu = document.querySelector('.news-menu'),
        newsUl = document.createElement('ul');

    renderBackendLastNews(lastNews);

    function renderBackendLastNews(arr) {
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

            typeof item['title'] == 'string' ? title.innerHTML = item['title'] : title.innerHTML = 'Title';

            checkUrlImg(imgUrl).then( result => {divImg.style.backgroundImage = `url(${imgUrl})`}, error => {divImg.style.backgroundImage = `url(${preImg})`})

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
    function checkUrlImg(imgUrl) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = imgUrl;

            img.onload = () => resolve(imgUrl);
            img.onerror = () => reject(new Error(`Img undefined: ${imgUrl}`));
        });
    }

    // text-range
    const textRange = document.querySelector('.text-range'),
        newsTitle = document.querySelector('.news-box__header-title h1'),
        newsDescription = document.querySelector('.news-box__header-title h2'),
        newsText = document.querySelector('.news-box__body-text');

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
        newsTitle.style.fontSize = 1.5 + 1.5 / 100 * countTextRange + 'rem';
        newsTitle.style.lineHeight = 1.7 + 1.7 / 100 * countTextRange + 'rem';
        newsTitle.style.marginBottom = 15 + 15 / 100 * countTextRange + 'px';
        newsDescription.style.fontSize = 1.2 + 1.2 / 100 * countTextRange + 'rem';
        newsDescription.style.lineHeight = 1.4 + 1.4 / 100 * countTextRange + 'rem';
        newsDescription.style.marginBottom = 15 + 15 / 100 * countTextRange + 'px';
        newsText.style.fontSize = 1 + 1 / 100 * countTextRange + 'rem';
        newsText.style.lineHeight = 1.4 + 1.4 / 100 * countTextRange + 'rem';
    }
});