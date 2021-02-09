window.addEventListener('load', function () {
    let renderNewsH1 = document.querySelector('.news-render h1');
    let renderNewsH2 = document.querySelector('.news-render h2');
    let newsBoxBody = document.querySelector('.news-box__body');
    let renderText = document.querySelector('.news-box__body-text');
    let preRenderText = renderText;
    let newsRender = document.querySelector('news-render');
    let newsBoxFooter = document.createElement('div');

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

    newsBoxFooter.classList.add('news-box__footer');
    newsRender.append(newsBoxFooter);

    console.dir(renderText);

    renderText.childNodes.forEach(function(item) {
        if (item.tagName == "DIV") {
            let newItem = item;

            item.remove();
            newsBoxFooter.append(newItem);
        }
    })

    newsBoxBody.append(preRenderText);
})