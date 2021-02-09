window.addEventListener('load', function () {
    let renderNewsH1 = document.querySelector('.news-render h1');
    let renderNewsH2 = document.querySelector('.news-render h2');
    let renderText = document.querySelector('.news-box__body-text');
    let newsBoxBody = document.querySelector('.news-box__body');
    let newsBody = document.querySelector('news-body');

    function render(item) {
        let div = document.createElement('div');
        let txt = null;

        div.innerHTML = item;
        txt = div.innerText;
        return txt;
    }

    renderNewsH1.innerHTML = render(title);
    renderNewsH2.innerHTML = render(description);
    renderText.innerHTML = render(articles);

    let createDiv = document.createElement('div');
        createDiv.classList.add('body-text-media');
        renderText.append(createDiv);

    console.dir(renderText);

    renderText.childNodes.forEach(function(item) {
        if (item.tagName == "DIV") {
            console.dir(item);
            console.log(item.tagName)
            createDiv.append(item);
            item.remove();
        }
    })

    // let  renderImg = renderText.childNodes.className('aligncenter');
    // renderImg.classList.add('news-box__header-img');
    // renderImg.classList.add('unselect');
})