

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showHideButton = document.getElementById('show-hide');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    })

    emailInput.addEventListener('blur', function() {
        validateEmail();
    })

    emailInput.addEventListener('change', function() {
        clearError(emailError);
    })

    passwordInput.addEventListener('change', function() {
        clearError(passwordError);
    })

    confirmPasswordInput.addEventListener('change', function() {
        clearError(confirmPasswordError);
    })

    showHideButton.addEventListener('click', function() {
        if(passwordInput.type === 'password') {
            passwordInput.type = 'text';
            confirmPasswordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
            confirmPasswordInput.type = 'password';
        } 
    })
    

    function validateForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isPasswordMatch = validatePasswordMatch();

        if(isEmailValid && isPasswordValid && isPasswordMatch){
            saveToLocalStorage();
            alert('Form is valid');
        }
    }

    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const emailValue = emailInput.value.trim(); // trim elimina espacios en blanco

        if(!emailRegex.test(emailValue)) {
            showError(emailError, 'Email is not valid');
            return false;
        }

        return true;

    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();

        if(passwordValue.length < 8) {
            showError(passwordError, 'Password must be at least 8 characters');
            return false;
        }

        return true;

    }

    function validatePasswordMatch() {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if(passwordValue !== confirmPasswordValue) {
            showError(confirmPasswordError, 'Passwords do not match');
            return false;
        }

        return true;

    }

    function showError(errorElement, message) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    function saveToLocalStorage() {
        const emailValue = emailInput.value.trim();
        localStorage.setItem('email', emailValue);
        const body = bodyBuilderJSON();
        console.log(body);
    }

    function bodyBuilderJSON() {
        return {
            email: emailInput.value,
            password: passwordInput.value,
        }
    }

})