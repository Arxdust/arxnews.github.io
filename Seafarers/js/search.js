window.addEventListener('load', () => {
    const searchField=document.querySelector("#searchField"),
        searchNews = document.querySelector('#search-news'),
        body = document.querySelector('.body'),
        searchNewsBtnIn = document.querySelector('.last-news .stat-title');

    if (searchField != null && searchNews != null && searchNewsBtnIn != null) {
        const statBoxSearchNews = document.querySelector('.stat-box__search-news'),
            statBox = document.querySelector('.stat-box'),
            searchNewsBtn = document.createElement('div'),
            searchNewsIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>`,
            searchNewsIconClose = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>`,
            ul = document.createElement('ul'),
            disabled = document.querySelectorAll('.last-news ul'),
            div = document.createElement('div');

        div.classList.add('box-scroll');

        searchField.addEventListener("keyup", (e)=>{
            const searchValue = e.target.value;
            if(searchValue.trim().length>0){
                console.log("searchValue", searchValue);
                fetch("search/",{
                    body: JSON.stringify({searchText: searchValue}),
                    method: 'POST',
                })
                .then((res)=> res.json())
                    .then((data)=>{
                        let result = '';

                        data.forEach(item => {
                            let img = '/media/art/' + item['path_img_webp'],
                                url = 'https://seafarer.news/p/' + item['id'];

                            result += `<li style="background-image: url(${img})"><a href="${url}"><span>${item['title']}</span></a></li>`;
                        })

                        ul.innerHTML = result;
                        div.append(ul);
                    })
                        .then((data => {searchNews.append(div)}));
            }
        });

        searchNewsBtn.addEventListener('click', e => {
            e.stopPropagation();
            toggleMenu();
        })

        function toggleMenu() {
            statBoxSearchNews.classList.toggle('show');
            statBox.classList.toggle('search');

            for (let key in disabled) {
                let item = disabled[key];

                item.classList.toggle('disabled-element');
            }

            if (window.innerWidth < 768) {
                body.classList.toggle('hidden');
            }

            if (statBoxSearchNews.classList.contains('show')) {
                searchNewsBtn.innerHTML = searchNewsIconClose;
            } else {
                searchNewsBtn.innerHTML = searchNewsIcon;
            }
        }

        searchNewsBtn.id = 'search-news-btn';
        searchNewsBtn.classList.add('search-news-btn');
        searchNewsBtn.innerHTML = searchNewsIcon;
        searchNewsBtnIn.append(searchNewsBtn);

        document.addEventListener('click', (e) => {
            let target = e.target,
                btn = target == searchNewsBtn,
                box = target == statBoxSearchNews || statBoxSearchNews.contains(target),
                menuActive = statBoxSearchNews.classList.contains('show');

            if (!btn && !box && menuActive) {
                toggleMenu();
            }
        })
    }
})