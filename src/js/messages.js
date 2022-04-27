const dialogsUser = document.querySelectorAll('.d-user');

dialogsUser.forEach((el) => {
    el.addEventListener('click', e => {
        for(let i = 0; i < dialogsUser.length; i++) {
            deleteActiveClass(dialogsUser[i]);
        }
        el.classList.toggle('active');
    })
})

const deleteActiveClass = (e) => {
    if(e.classList.contains('active')) {
        e.classList.remove('active');
    }
}

const textareaPlaceholder = document.querySelector('.s-message__textarea-placeholder'),
    writer = document.querySelector('#s-message__writer');

textareaPlaceholder.addEventListener('click', () => {
    textareaPlaceholder.classList.remove('active');
    writer.classList.add('active')
    writer.focus();
})
writer.addEventListener('blur', () => {
    writer.classList.remove('active');
    textareaPlaceholder.classList.add('active')
})