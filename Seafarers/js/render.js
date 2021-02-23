window.addEventListener('load', function () {
    // render news
    const body = document.querySelector('.body'),
        mainBox = document.querySelector('.main-box'),
        preImg = 'https://arxdust.github.io/arxnews.github.io/Seafarers/images/pre-img.jpg';

    for (let key in mainBox.children) {
        if (mainBox.children[key].classList == 'news-box') {
            renderNews();
            break;
        }
    }

    function renderNews() {
        const renderText = document.querySelector('.news-box__body-text'),
            newsRender = document.querySelector('.news-render'),
            newsBoxImg = document.querySelector('.news-box__img');

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

                    div.classList.add('footer-media');
                    div.addEventListener('click', () => {
                        div.classList.toggle('show');
                        body.classList.toggle('hidden');
                    })

                    item.remove();
                    div.append(newItem);
                    newsBoxFooter.append(div);
                }
            });

            newsBoxFooter.classList.add('news-box__footer');
            newsRender.append(newsBoxFooter);
        }

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

        // text-range
        const newsTitle = document.querySelector('.news-box__header-title h1'),
            newsDescription = document.querySelector('.news-box__header-title h2'),
            newsText = document.querySelector('.news-box__body-text'),
            rangeBox = document.createElement('div'),
            rangeBoxSpan = document.createElement('span'),
            rangeBoxInput = document.createElement('input'),
            headerBavHeader = document.querySelector('.header-nav__header');

        rangeBoxSpan.innerText = 'Font size';
        rangeBoxInput.type = 'range';
        rangeBoxInput.classList.add('text-range');
        rangeBox.classList.add('range-box');
        rangeBox.append(rangeBoxSpan);
        rangeBox.append(rangeBoxInput);
        headerBavHeader.append(rangeBox);


        if (typeof localStorage.getItem('textRange') == "string") {
            rangeBoxInput.valueAsNumber = parseInt(localStorage.getItem('textRange'))
        } else {
            rangeBoxInput.valueAsNumber = 0;
        }

        let countTextRange = rangeBoxInput.valueAsNumber;

        fTextRange();

        rangeBoxInput.addEventListener('input', function(event) {
            countTextRange = event.target.valueAsNumber;
            fTextRange();
        });

        rangeBoxInput.addEventListener('mouseup', lStorageText);
        rangeBoxInput.addEventListener('touchend', lStorageText);

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
            newsDescription.style.marginTop = 15 + 15 / 100 * countTextRange + 'px';
            newsText.style.fontSize = 1 + 1 / 100 * countTextRange + 'rem';
            newsText.style.lineHeight = 1.4 + 1.4 / 100 * countTextRange + 'rem';
        }

        // comment link
        const commentThisBoxLink = document.querySelector('.comment-this-box a'),
            commentThisBoxLinkSpan = document.createElement('span'),
            commentTHisBoxLinkSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>`,
            commentThisBoxLinkText = 'Write a comment';


        commentThisBoxLinkSpan.insertAdjacentHTML('beforeEnd', commentThisBoxLinkText);
        commentThisBoxLinkSpan.insertAdjacentHTML('beforeEnd', commentThisBoxLinkSpan);
        commentThisBoxLinkSpan.insertAdjacentHTML('afterBegin', commentTHisBoxLinkSvg);

        // tab-menu-btn
        const btnComment = document.querySelector('.btn-comment'),
            btnCommentSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>`

        btnComment.insertAdjacentHTML('afterBegin', btnCommentSvg);
    }

    // last news
    if (typeof lastNews != "undefined") {
        renderLastNews(lastNews);
    }

    function renderLastNews(arr) {
        if (Array.isArray(arr)) {
            const newsMenu = document.querySelector('.news-menu'),
                newsUl = document.createElement('ul');

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

    //tab-menu footer

    const tabMenuFooter = [
        {
            title: ''
        },
    ]
});