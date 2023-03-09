const showPassword = document.getElementById('show-password');
const passwordField = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');
showPassword.addEventListener('click', (e) => {
    

    if (showPassword.checked) {
        passwordField.type = 'text';
        passwordConfirm.type = 'text';
    }else{
        passwordField.type = 'password';
        passwordConfirm.type = 'password';
    }
});


