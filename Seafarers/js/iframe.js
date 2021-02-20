window.addEventListener('load', () => {
    let iframe = document.querySelectorAll('iframe');

    let head = document.querySelectorAll('iframe head'),
        link = document.createElement('link');

    console.dir('dir:', head);

    link.rel = 'stylesheet';
    link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarers/css/iframe.css';

    head.append(link);
})