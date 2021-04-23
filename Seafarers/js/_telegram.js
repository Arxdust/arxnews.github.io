windows.addEventListener('load', ()=> {
    const loginTelegram = document.querySelectorAll('.login-telegram');
    const popupTelegramContainer = document.querySelector('.popup-telegram-container');


    loginTelegram.forEach(elem => {
        elem.addEventListener('click', ()=> {
            popupTelegramContainer.classList.toggle('show');
            console.log(elem, 'done!')
        })
    })
})