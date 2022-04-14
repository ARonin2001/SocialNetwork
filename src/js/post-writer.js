// post-writer
const formPostContent = document.querySelector('.form-post__content'),
    formPostPlaceholder = document.querySelector('.form-post__placeholder'),
    title = document.querySelector('.post-write__title');

formPostContent.addEventListener('focus', (e) => {
    formPostPlaceholder.classList.add('form-post__placeholder_unactive');
});
formPostContent.addEventListener('blur', (e) => {
    let lengthContent = formPostContent.innerHTML.length;
    if(lengthContent === 99 || lengthContent == 153)
        formPostPlaceholder.classList.remove('form-post__placeholder_unactive');
});
title.addEventListener('focus', (e) => {
    if(title.innerHTML === "Your Title")
        title.innerHTML = "";
});
title.addEventListener('blur', (e) => {
    if(title.innerHTML == "")
        title.innerHTML = "Your Title";
});