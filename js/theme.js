// ============================
// WEATHERNOW THEME TOGGLE
// ============================

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


// APPLY SAVED THEME

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeIcon.className =
        "bi bi-sun-fill";
}


// TOGGLE THEME

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        // DARK MODE
        themeIcon.className =
            "bi bi-sun-fill";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        // LIGHT MODE
        themeIcon.className =
            "bi bi-moon-stars-fill";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});