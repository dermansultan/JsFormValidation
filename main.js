const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const passWord = document.getElementById('passWord');
const passWordCon = document.getElementById('passWordCon');

const emailValid = function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("That's not an email...?")
    } else {
        email.setCustomValidity("");
    }
}

const zipCodeValid = function (event) {
    if (zipCode.validity.typeMismatch) {
        zipCode.setCustomValidity("Proper zipcode pls")
    } else {
        zipCode.setCustomValidity("");
    }
}

const passWordConValid = function (event) {
    if (passWordCon.value !== passWord.value){
        passWordCon.setCustomValidity("Passwords do not match!");
    } else {
        passWordCon.setCustomValidity("");
    }
}

email.addEventListener('input', emailValid);
zipCode.addEventListener('input', zipCodeValid);
passWordCon.addEventListener('input', passWordConValid);