const form = document.querySelector('.hero__form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = e.target.email;
    const validEmail = validateEmail(email.value);

    if (validEmail) {
        form.classList.remove('error');
        email.value = '';
    } else {
        form.classList.add('error');
    };
});

const validateEmail = email => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat))
        return true;
    else
        return false;
};