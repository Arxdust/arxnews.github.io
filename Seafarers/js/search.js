window.addEventListener('load', () => {
    const searchField=document.querySelector("#searchField"),
        searchNews = document.querySelector('#search-news'),
        ul = document.createElement("ul");

    if (searchField != null && searchNews != null) {
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
                        data.forEach(item => {
                            let li = document.createElement("li"),
                                a = document.createElement('a'),
                                span = document.createElement('span');

                            li.style.backgroundImage = item['path_img_webp'];
                            a.href = `https://seafarer.news/p/${item['id']}`;
                            span.innerText = item['title'];

                            a.append(span);
                            li.append(a);
                            ul.append(li);
                        })
                    })
                        .then( (result => searchNews.append(ul)));
            }
        });
    }
})