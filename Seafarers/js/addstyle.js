function addstyle() {
    const link = document.createElement('link'),
        body = document.querySelector('.body');

    if (!body.classList.contains('onload')) {
        body.classList.add('onload');
    }

    link.rel = 'stylesheet';
    link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarers/css/style.css';
    document.head.appendChild(link);

    link.onload = function(){
        body.classList.add('ready');

        setTimeout(function() {
            body.classList.remove('onload');
        }, 200);
    };
}