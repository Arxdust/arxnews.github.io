let txtDiv = document.querySelector('.news-box__body-text');
let newDiv = document.createElement('div')
let txt = null;

newDiv.innerHTML = `{{ full_data.articles }}`;
txt = newDiv.innerText;
txtDiv.innerHTML = txt;