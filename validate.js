const showPassword = document.getElementById('show-password');
const form = document.getElementById('form');
const passwordField = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');

// Show/hide password
showPassword.addEventListener('click', (e) => {
    if (showPassword.checked) {
        passwordField.type = 'text';
        passwordConfirm.type = 'text';
    }else{
        passwordField.type = 'password';
        passwordConfirm.type = 'password';
    }
});

// Check password match
passwordField.addEventListener('keyup', confirmMatch);
passwordField.addEventListener('blur', confirmMatch);
passwordField.addEventListener('focus', confirmMatch);

passwordConfirm.addEventListener('keyup', confirmMatch);
passwordConfirm.addEventListener('blur', confirmMatch);
passwordConfirm.addEventListener('focus', confirmMatch); 

function confirmMatch(){
    if(passwordConfirm.value === passwordField.value){
        passwordConfirm.setCustomValidity('');
    }else{
        passwordConfirm.setCustomValidity('Passwords do not match!')
    }
};


