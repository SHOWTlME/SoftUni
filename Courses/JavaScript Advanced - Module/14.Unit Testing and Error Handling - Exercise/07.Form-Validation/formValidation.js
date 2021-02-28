function validate() {
    const usernameEl = document.getElementById('username');
    const emailEl = document.getElementById('email');
    const passEl = document.getElementById('password');
    const confirmPassEl = document.getElementById('confirm-password');
    const checkbox = document.getElementById('company');
    const companyEl = document.getElementById('companyInfo');
    const companyNumEl = document.getElementById('companyNumber');
    const submitBtn = document.getElementById('submit');
    const divValid = document.getElementById('valid');
 
    const validUsername = /^([^\W_]){3,20}$/;
    const validPassword = /^\w{5,15}$/;
    const validEmail = /^(.+@(.+)?\.(.+)?)$/;
 
    checkbox.addEventListener('change', showCompanyInfo);
    submitBtn.addEventListener('click', validateInput);
 
    function showCompanyInfo() {
        companyEl.style.display = checkbox.checked ? 'block' : 'none';
    }
 
    function validateInput(ev) {
        ev.preventDefault();
        let validInput = true;
 
        redBorderIfInvalid(usernameEl, validUsername);
        redBorderIfInvalid(emailEl, validEmail);
        redBorderIfInvalid(passEl, validPassword);
 
        if (confirmPassEl.value != passEl.value || passEl.style.borderColor == 'red') {
            confirmPassEl.style.borderColor = 'red';
            passEl.style.borderColor = 'red';
            validInput = false;
        }
 
        if (checkbox.checked) {
            let num = companyNumEl.value;
 
            if (num >= 1000 && num <= 9999) {
                companyNumEl.style.border = 'none';
            } else {
                companyNumEl.style.borderColor = 'red';
                validInput = false;
            }
        }
 
        divValid.style.display = validInput ? 'block' : 'none';
 
        function redBorderIfInvalid(el, regex) {
            if (el.value.match(regex)) {
                el.style.border = 'none';
            } else {
                el.style.borderColor = 'red';
            }
 
            if (el.style.borderColor == 'red') {
                validInput = false;
            }
        }
    }
}