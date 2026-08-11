const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const agreement = document.getElementById("agreement").checked;


    // Error elements
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const cityError = document.getElementById("cityError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const agreementError = document.getElementById("agreementError");

    // Clear previous errors

    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    cityError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    agreementError.textContent = "";


    let isValid = true;


    // NAME VALIDATION

    if (name === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must be at least 3 characters.";

        isValid = false;
    }


    // PHONE VALIDATION

    const phonePattern = /^[0-9]{10,15}$/;

    if (phone === "") {

        phoneError.textContent =
            "Please enter your phone number.";

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Please enter a valid phone number.";

        isValid = false;
    }


    // EMAIL VALIDATION

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // CITY VALIDATION

    if (city === "") {

        cityError.textContent =
            "Please enter your city.";

        isValid = false;
    }


    // SUBJECT VALIDATION

    if (subject === "") {

        subjectError.textContent =
            "Please select what you need help with.";

        isValid = false;
    }


    // MESSAGE VALIDATION

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters.";

        isValid = false;
    }


    // CHECKBOX VALIDATION

    if (!agreement) {

        agreementError.textContent =
            "Please confirm your information.";

        isValid = false;
    }


    // IF EVERYTHING IS VALID

    if (isValid) {

        const successMessage =
            document.getElementById("successMessage");

        successMessage.classList.remove("d-none");

        // Reset the form

        contactForm.reset();

        // Hide success message after 5 seconds

        setTimeout(function () {

            successMessage.classList.add("d-none");

        }, 5000);

    }

});