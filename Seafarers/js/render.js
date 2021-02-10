window.addEventListener('load', function () {
    let renderNewsH1 = document.querySelector('.news-render h1');
    let renderNewsH2 = document.querySelector('.news-render h2');
    let newsBoxBody = document.querySelector('.news-box__body');
    let renderText = document.querySelector('.news-box__body-text');
    let preRenderText = renderText;
    let newsRender = document.querySelector('.news-render');

    function render(item) {
        let div = document.createElement('div');
        let txt = null;

        div.innerHTML = item;
        txt = div.innerText;
        return txt;
    }

    renderText.remove();
    renderNewsH1.innerHTML = render(title);
    renderNewsH2.innerHTML = render(description);
    renderText.innerHTML = render(articles);

    scanRenderText();

    function scanRenderText() {
        for (let key in renderText.childNodes) {
            if (key.tagName == "DIV") {
                renderNewsBoxFooter();
                break;
            }
        }
    }

    function renderNewsBoxFooter() {
        let newsBoxFooter = document.createElement('div');

        renderText.childNodes.forEach(function(item) {
            if (item.tagName == "DIV") {
                let newItem = item;

                item.remove();
                newsBoxFooter.append(newItem);
            }
        });

        newsBoxFooter.classList.add('news-box__footer');
        newsRender.append(newsBoxFooter);
    }

    newsBoxBody.append(preRenderText);
});