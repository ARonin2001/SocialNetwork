const usersTitle = document.querySelectorAll('.users__header-title');

for(let i = 0; i < usersTitle.length; i++) {
    usersTitle[i].addEventListener('click', e => {
        for(let i = 0; i < usersTitle.length; i++) {
            if(usersTitle[i] == e.target || e.path[1] == usersTitle[i]) {
                usersTitle[i].classList.add('active');
            } else if(usersTitle[i].classList.contains('active')) {
                usersTitle[i].classList.remove('active');
            }
        }
    });
}

// parameters 
const usersTitleParameter = document.querySelector('.users__title-parameter'),
    usersParameters = document.querySelector('.users__parameters');

usersTitleParameter.addEventListener('click', e => {
    usersParameters.classList.toggle('active');
});