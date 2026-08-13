const weatherData = [
    {
        city: "Lagos",
        temperature: 29,
        condition: "Sunny",
        humidity: 75,
        wind: 12
    },

    {
        city: "Abuja",
        temperature: 27,
        condition: "Cloudy",
        humidity: 68,
        wind: 10
    },


    {
        city: "Kano",
        temperature: 32,
        condition: "Sunny",
        humidity: 55,
        wind: 9
    },

    {
        city: "Ibadan",
        temperature: 26,
        condition: "Cloudy",
        humidity: 70,
        wind: 11
    },

    {
        city: "Enugu",
        temperature: 27,
        condition: "Rainy",
        humidity: 78,
        wind: 13
    },

    {
        city: "Benin City",
        temperature: 30,
        condition: "Sunny",
        humidity: 72,
        wind: 10
    },

    {
        city: "Kaduna",
        temperature: 25,
        condition: "Cloudy",
        humidity: 60,
        wind: 8
    },

    {
        city: "Jos",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "Aba",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "Ilorin",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "New York",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "London",
        temperature: 27,
        condition: "Sunny",
        humidity: 78,
        wind: 13
    },

    {
        city: "Sokoto",
        temperature: 25,
        condition: "Cloudy",
        humidity: 60,
        wind: 8
    },

    {
        city: "Niger",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "Akwa Ibom",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "Osun",
        temperature: 42,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "Washington",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },

    {
        city: "Warri",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    }
];


// GET ELEMENTS FROM HTML

const weatherContainer =
    document.getElementById("weatherContainer");

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const searchMessage =
    document.getElementById("searchMessage");


// FUNCTION TO GET WEATHER ICON

function getWeatherIcon(condition) {

    const weatherCondition = condition.toLowerCase();

    if (weatherCondition === "sunny") {

        return "bi-sun";

    } else if (weatherCondition === "cloudy") {

        return "bi-cloud";

    } else if (weatherCondition === "rainy") {

        return "bi-cloud-rain";

    } else {

        return "bi-cloud-sun";
    }
}


// FUNCTION TO DISPLAY WEATHER

function displayWeather(data) {

    // Clear previous cards
    weatherContainer.innerHTML = "";


    // If no location is found
    if (data.length === 0) {

        searchMessage.textContent =
            "Location not found.";

        return;
    }


    // Clear error message
    searchMessage.textContent = "";


    // Create cards
    data.forEach(function(weather) {

        // Get the correct icon
        const weatherIcon =
            getWeatherIcon(weather.condition);


        weatherContainer.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="card shadow border-0 h-100">

                    <div class="card-body text-center">

                        <i class="bi ${weatherIcon} fs-1 text-primary"></i>

                        <h3 class="card-title mt-3">
                            ${weather.city}
                        </h3>

                        <h2 class="fw-bold">
                            ${weather.temperature}°C
                        </h2>

                        <p class="text-muted">
                            ${weather.condition}
                        </p>

                        <hr>

                        <div class="d-flex justify-content-around">

                            <div>

                                <i class="bi bi-droplet text-primary"></i>

                                <p class="mb-0">
                                    ${weather.humidity}%
                                </p>

                                <small>
                                    Humidity
                                </small>

                            </div>


                            <div>

                                <i class="bi bi-wind text-success"></i>

                                <p class="mb-0">
                                    ${weather.wind} km/h
                                </p>

                                <small>
                                    Wind
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        `;
    });
}


// DISPLAY ALL WEATHER WHEN PAGE LOADS

displayWeather(weatherData);


// SEARCH FUNCTION

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const searchValue =
        searchInput.value.trim().toLowerCase();


    // Empty search
    if (searchValue === "") {

        searchMessage.textContent =
            "Please enter a location.";

        displayWeather(weatherData);

        return;
    }


    // Find matching cities
    const filteredWeather =
        weatherData.filter(function(weather) {

            return weather.city
                .toLowerCase()
                .includes(searchValue);

        });


    // Display results
    displayWeather(filteredWeather);

});
// DARK / LIGHT MODE

// DARK / LIGHT MODE

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


// Check saved theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeIcon.className =
        "bi bi-sun-fill";
}


// Toggle theme

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        // Dark mode → show sun

        themeIcon.className =
            "bi bi-sun-fill";

        localStorage.setItem("theme", "dark");

    } else {

        // Light mode → show moon

        themeIcon.className =
            "bi bi-moon-stars-fill";

        localStorage.setItem("theme", "light");

    }

});