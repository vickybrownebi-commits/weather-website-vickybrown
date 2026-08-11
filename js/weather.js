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
        city: "Illorin",
        temperature: 22,
        condition: "Rainy",
        humidity: 80,
        wind: 7
    },
    {
        city: "Ibadan",
        temperature: 42,
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
    }
];


// Get the container from HTML
const weatherContainer = document.getElementById("weatherContainer");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchMessage = document.getElementById("searchMessage");


// Function to display weather
function displayWeather(data) {

    weatherContainer.innerHTML = "";

    if (data.length === 0) {

        searchMessage.textContent = "Location not found.";

        return;
    }

    searchMessage.textContent = "";

    data.forEach(function(weather) {

        weatherContainer.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="card shadow border-0 h-100">

                    <div class="card-body text-center">

                        <i class="bi bi-cloud-sun fs-1 text-primary"></i>

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


// Display all weather when page loads
displayWeather(weatherData);


// SEARCH
searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchValue = searchInput.value.trim().toLowerCase();

    if (searchValue === "") {

        searchMessage.textContent = "Please enter a location.";

        displayWeather(weatherData);

        return;
    }


    const filteredWeather = weatherData.filter(function(weather) {

        return weather.city.toLowerCase().includes(searchValue);

    });


    displayWeather(filteredWeather);

});