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
                const tagName = renderText.childNodes[key].tagName;

                if (tagName == "DIV" || tagName == "FIGURE" || tagName == "IMG") {
                    renderNewsBoxFooter();
                    break;
                }
            }
        }

        //render footer
        function renderNewsBoxFooter() {
            const newsBoxFooter = document.createElement('div'),
                newsBoxFooterUl = document.createElement('ul');

            renderText.childNodes.forEach(function(item) {
                if (item.tagName == "DIV" || item.tagName == "FIGURE" || item.tagName == "IMG") {
                    const li = document.createElement('li'),
                        newItem = item;

                    li.classList.add('footer-media');
                    clickToggle(li);

                    item.remove();
                    li.append(newItem);
                    newsBoxFooterUl.append(li);
                }
            });

            newsBoxFooter.classList.add('news-box__footer');
            newsBoxFooter.append(newsBoxFooterUl);
            newsRender.append(newsBoxFooter);
        }

        function clickToggle(elem) {
            elem.addEventListener('click', () => {
                elem.classList.toggle('show');
                body.classList.toggle('hidden');
            });
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

        // text-range
        const newsTitle = document.querySelector('.news-box__header-title h1'),
            newsDescription = document.querySelector('.news-box__header-title h2'),
            newsText = document.querySelector('.news-box__body-text'),
            rangeBoxInput = document.querySelector('.text-range'),
            rangeLi = document.querySelectorAll('.text-range ul li');

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
            rangeLi.forEach(item => {
                console.log(item);
                item.style.marginLeft = 20 + 10 / 100 * countTextRange + 'px';
            })
        }

        // comment link
        const commentThisBoxLink = document.querySelector('.comment-this-box a'),
            commentThisBoxLinkSpan = document.createElement('span'),
            commentTHisBoxLinkSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>`;

        commentThisBoxLinkSpan.innerText = 'Write a comment';
        commentThisBoxLink.innerHTML = commentTHisBoxLinkSvg;
        commentThisBoxLink.append(commentThisBoxLinkSpan);

        // tab-menu-btn
        const btnComment = document.querySelector('.btn-comment'),
            btnCommentSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>`,
            btnShareSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>`;

        btnComment.insertAdjacentHTML('afterBegin', btnCommentSvg);

        // share
        const elemShare = document.querySelector('.share');


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
});