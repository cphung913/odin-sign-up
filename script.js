const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passwordInput = document.getElementById("pass");
const passwordConfirm = document.getElementById("confirm");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener('submit', checkPassword);

function checkPassword(e) {
    error.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordConfirm.classList.remove("invalid");
    e.preventDefault();
    if (passwordInput.value == passwordConfirm.value) {
        return true;
    } else {
        error.textContent = "passwords do not match";
        passwordInput.value = "";
        passwordConfirm.value = "";

        passwordInput.classList.add("invalid");
        passwordConfirm.classList.add("invalid");
        return false;
    }
}
