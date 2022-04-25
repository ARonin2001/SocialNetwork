const dialogsUser = document.querySelectorAll('.d-user');

dialogsUser.forEach((el) => {
    el.addEventListener('click', e => {
        el.classList.toggle('active');
    })
})