window.addEventListener('load', () => {
    let iframe = document.querySelectorAll('iframe'),
        link = document.createElement('link'),
        widgetMessageUser = document.querySelectorAll('tgme_widget_message_user')
    console.dir('dir:', widgetMessageUser);

    widgetMessageUser.style.display = 'none';

    // link.rel = 'stylesheet';
    // link.href = 'https://arxdust.github.io/arxnews.github.io/Seafarers/css/iframe.css';
    //
    // head.append(link);
})