
const mydata = JSON.parse(document.getElementById('mydata').textContent)
let headDiscription = document.querySelector('.news-box__header-title h2');
headDiscription.innerHTML = mydata;