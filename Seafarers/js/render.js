window.addEventListener('load', function () {
    let renderNewsH1 = document.querySelector('.news-render h1');
    let renderNewsH2 = document.querySelector('.news-render h2');
    let renderText = document.querySelector('.news-box__body-text');
    let newsBoxBody = document.querySelector('.news-box__body');

    function render(item) {
        let div = document.createElement('div');
        let txt = null;

        div.innerHTML = item;
        txt = div.innerText;
        return txt;
    }

    renderNewsImgInText(renderText);

    renderNewsH1.innerHTML = render(title);
    renderNewsH2.innerHTML = render(description);
    renderText.innerHTML = render(articles);
})

function renderNewsImgInText(item) {
    item.forEach(function() {
        let x = document.querySelector('figure');
        let y = document.querySelector('figure img');

        x.classList.add('news-box__header-img');
        x.classList.add('unselect');

        x.addEventListener('click', function() {
            x.classList.toggle('view');

            if (x.classList.contains("view")) {
                newsBoxImg.classList.remove('zoom');
            }
        })

        x.addEventListener('mouseover',function() {
            if (x.classList.contains("view") == false) {
                y.classList.add('zoom');
                y.classList.remove('zoomout');
            } else {
                y.classList.remove('zoom');
            }
        });

        x.addEventListener('mouseout',
        function(){
            if (x.classList.contains("view") == false) {
                y.classList.add('zoomout');
                y.classList.remove('zoom');
            } else {
                y.classList.remove('zoom');
            }
        });
    })
}