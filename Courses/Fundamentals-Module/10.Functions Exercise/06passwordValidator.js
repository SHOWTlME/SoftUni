function passwordValidator(password) {

    function isValidLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return `Password must be between 6 and 10 characters`;
        }
    }

    function isValidChars(password) {
        let isValidPass = true;
        for (let i = 0; i < password.length; i++) {
            let isValid = true;
            code = password[i].charCodeAt(0);
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }
        }

        return isValidPass ? true : "Password must consist only of letters and digits"
    }

    function atLeastTwoDigits(password) {
        let digits = 0;
        for (let i = 0; i < password.length; i++) {
            code = password[i].charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digits++;
            }
        }

        return digits >= 2 ? true : "Password must have at least 2 digits"
    }

    let result = [];
    if (isValidLength(password) !== true) {
        result.push(isValidLength(password));
    }
    if (isValidChars(password) !== true) {
        result.push(isValidChars(password))
    }
    if (atLeastTwoDigits(password) !== true) {
        result.push(atLeastTwoDigits(password));
    }
    if (atLeastTwoDigits(password) === true && isValidChars(password) === true && isValidLength(password) === true) {
        result.push('Password is valid');
    }

    return result.join('\n')
}

console.log(passwordValidator(''));