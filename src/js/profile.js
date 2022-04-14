// user-languages
const profileLanguagesBottom = document.querySelector('.profile__languages_bottom'),
    profileUserLng = document.querySelector('.profile__user-lng'),
    profileUserLngClose = document.querySelector('.profile__user-lng_close');

profileLanguagesBottom.addEventListener('click', e => {
    profileUserLng.classList.add('active');    
});
profileUserLngClose.addEventListener('click', () => {
    profileUserLng.classList.remove('active');    
});