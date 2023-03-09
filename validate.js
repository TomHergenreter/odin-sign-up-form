const showPassword = document.getElementById('show-password');
const passwordField = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');

console.log(passwordConfirm);

showPassword.addEventListener('click', (e) => {
    if (showPassword.checked) {
        passwordField.type = 'text';
        passwordConfirm.type = 'text';
    }else{
        passwordField.type = 'password';
        passwordConfirm.type = 'password';
    }
});

passwordConfirm.addEventListener('keyup', confirmMatch);
passwordConfirm.addEventListener('blur', confirmMatch);
passwordConfirm.addEventListener('focus', confirmMatch); 

passwordField.addEventListener('keyup', confirmMatch);
passwordField.addEventListener('blur', confirmMatch);
passwordField.addEventListener('focus', confirmMatch); 

function confirmMatch(){
    if(passwordConfirm.value === passwordField.value){
        passwordConfirm.classList.remove('invalid');
    }else{
        passwordConfirm.classList.add('invalid');
    }
};


