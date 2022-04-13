/*
.error-message {
    display: none;
}

.form-control.error .error-message {
    display: block;
    color: red;
}

.form-control.error input {
    border: 2px solid red;
}

.form-control.success input {
    border: 2px solid green;
}
*/

const form = document.querySelector(".form");

const errors = [];

const showError = (input, msg) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector(".error-message").innerText = msg;
    errors.push("error");
};

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

// Check functions
function checkEmail(input) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, "This field is required");
        } else {
            showSuccess(input);
        }
    });
};

const checkLenght = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `Must be at least ${min} characters long`);
    } else if (input.value.length > max) {
        showError(input, `Can not have more than ${max} characters`);
    } else {
        showSuccess(input);
    }
};

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const passConfirm = document.getElementById("password-confirm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    errors.length = 0;
    checkRequired([firstName, lastName, email, pass, passConfirm]);
    checkEmail(email);
    if (!errors.length) {
        console.log("no errors")
        form.submit();
    }
});
