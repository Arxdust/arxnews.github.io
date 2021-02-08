// windows.addEventListener('load', function () {
//     let renderNewsH1 = document.querySelector('.news-render h1');
//     let renderNewsH2 = document.querySelector('.news-render h2');
//     let renderText = document.querySelector('.news-box__body-text');
//
//     function render(item) {
//         let div = document.createElement('div');
//         let txt = null;
//
//         div.innerHTML = item;
//         txt = div.innerText;
//         return txt;
//     }
//
//     renderNewsH1.innerHTML = render(title);
//     renderNewsH2.innerHTML = render(description);
//     renderText.innerHTML = render(articles);
// })

let txtDiv = document.querySelector('.news-box__body-text');
let newDiv = document.createElement('div')
let txt = null;

newDiv.innerHTML = `{{ full_data.articles }}`;
txt = newDiv.innerText;
txtDiv.innerHTML = txt;