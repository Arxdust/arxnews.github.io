window.addEventListener('load', () => {
    let iframe = document.querySelectorAll('iframe');

    iframe.addEventListener('load', () => {
        let head = document.querySelectorAll('iframe head'),
            link = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarers/css/iframe.css';

        head.append(link);
    })
})