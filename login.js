const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (callback) => {
    callback.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "12345") {
        alert("You have successfully logged in.");
       window. location. replace("list.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})