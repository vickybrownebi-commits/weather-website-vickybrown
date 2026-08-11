// LOGIN

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const message = document.getElementById("loginMessage");

    if (email === "" || password === "") {

        message.textContent =
            "Please enter your email and password.";

        message.className = "text-danger small mb-3";

        return;
    }

    message.textContent = "Login successful! Welcome back 🌤️";

    message.className = "text-success small mb-3";

});


// SIGN UP

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("signupMessage");


    if (name === "") {

        message.textContent =
            "Please enter your name.";

        message.className = "text-danger small mb-3";

        return;
    }


    if (email === "") {

        message.textContent =
            "Please enter your email.";

        message.className = "text-danger small mb-3";

        return;
    }


    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        message.className = "text-danger small mb-3";

        return;
    }


    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        message.className = "text-danger small mb-3";

        return;
    }


    message.textContent =
        "Account created successfully! 🌦️";

    message.className = "text-success small mb-3";

});