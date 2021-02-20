window.addEventListener('load', function () {
    // render news
    const body = document.querySelector('.body'),
        title = title || null,
        description = description || null,
        articles = articles || null,
        img = img || null;

    if (title != null && description != null && articles != null && img != null) {
        renderNews(title, description, articles, img);
    } else {
        document.querySelector('.text-range').remove();
    }

    function renderNews(title, description, articles, img) {
        const renderNewsH1 = document.querySelector('.news-render h1'),
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
    }

    // last news
    renderLastNews(lastNews);

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
});