// ==========================================
// WEATHER POSTS JAVASCRIPT
// ==========================================

// Get HTML elements
const postsContainer = document.getElementById("postsContainer");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");


// ==========================================
// CITIES
// ==========================================

const cities = [
    {
        name: "Lagos",
        country: "Nigeria",
        latitude: 6.5244,
        longitude: 3.3792,
        image: "png/369858188170026895.jpg"
    },

    {
        name: "Abuja",
        country: "Nigeria",
        latitude: 9.0765,
        longitude: 7.3986,
        image: "png/hurricane(1).jpg"
    },

    {
        name: "Kano",
        country: "Nigeria",
        latitude: 12.0022,
        longitude: 8.5920,
        image: "png/hurricane.jpg"
    },

    {
        name: "Ibadan",
        country: "Nigeria",
        latitude: 7.3775,
        longitude: 3.9470,
        image: "png/Best Sunny Weather Photos.jpg"
    },

    {
        name: "Enugu",
        country: "Nigeria",
        latitude: 6.4584,
        longitude: 7.5464,
        image: "png/8725793024362228(1).jpg"
    },

    {
        name: "Benin City",
        country: "Nigeria",
        latitude: 6.3350,
        longitude: 5.6037,
        image: "png/8725793024362228.jpg"
    },

    {
        name: "Kaduna",
        country: "Nigeria",
        latitude: 10.5105,
        longitude: 7.4165,
        image: "png/Cloudy 🌧️🌪️.jpg"
    },

    {
        name: "Jos",
        country: "Nigeria",
        latitude: 9.8965,
        longitude: 8.8583,
        image: "png/369858188170026895.jpg"
    },

    {
        name: "New York",
        country: "USA",
        latitude: 40.7128,
        longitude: -74.0060,
        image: "png/hurricane(1).jpg"
    },

    {
        name: "London",
        country: "United Kingdom",
        latitude: 51.5074,
        longitude: -0.1278,
        image: "png/Cloudy 🌧️🌪️.jpg"
    },

    {
        name: "Washington",
        country: "USA",
        latitude: 38.9072,
        longitude: -77.0369,
        image: "png/Best Sunny Weather Photos.jpg"
    },

    {
        name: "Accra",
        country: "Ghana",
        latitude: 5.6037,
        longitude: -0.1870,
        image: "png/8725793024362228.jpg"
    }
];


// ==========================================
// WEATHER CODE FUNCTION
// ==========================================

function getWeatherInfo(code) {

    if (code === 0) {

        return {
            description: "Clear sky",
            icon: "bi-sun-fill"
        };

    }

    if (code === 1) {

        return {
            description: "Mostly clear",
            icon: "bi-sun"
        };

    }

    if (code === 2) {

        return {
            description: "Partly cloudy",
            icon: "bi-cloud-sun"
        };

    }

    if (code === 3) {

        return {
            description: "Overcast",
            icon: "bi-clouds"
        };

    }

    if ([45, 48].includes(code)) {

        return {
            description: "Foggy",
            icon: "bi-cloud-fog"
        };

    }

    if ([51, 53, 55].includes(code)) {

        return {
            description: "Light drizzle",
            icon: "bi-cloud-drizzle"
        };

    }

    if ([56, 57].includes(code)) {

        return {
            description: "Freezing drizzle",
            icon: "bi-cloud-drizzle"
        };

    }

    if ([61, 63, 65].includes(code)) {

        return {
            description: "Rainy",
            icon: "bi-cloud-rain"
        };

    }

    if ([66, 67].includes(code)) {

        return {
            description: "Freezing rain",
            icon: "bi-cloud-rain-heavy"
        };

    }

    if ([71, 73, 75, 77].includes(code)) {

        return {
            description: "Snowy",
            icon: "bi-snow"
        };

    }

    if ([80, 81, 82].includes(code)) {

        return {
            description: "Rain showers",
            icon: "bi-cloud-rain"
        };

    }

    if ([85, 86].includes(code)) {

        return {
            description: "Snow showers",
            icon: "bi-cloud-snow"
        };

    }

    if ([95].includes(code)) {

        return {
            description: "Thunderstorm",
            icon: "bi-cloud-lightning-rain"
        };

    }

    if ([96, 99].includes(code)) {

        return {
            description: "Thunderstorm with hail",
            icon: "bi-cloud-lightning-rain"
        };

    }


    return {
        description: "Weather conditions unavailable",
        icon: "bi-cloud"
    };
}


// ==========================================
// FETCH WEATHER FOR ONE CITY
// ==========================================

function fetchWeather(city) {

    const apiUrl =
        "https://api.open-meteo.com/v1/forecast" +
        `?latitude=${city.latitude}` +
        `&longitude=${city.longitude}` +
        "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code" +
        "&timezone=auto";


    return fetch(apiUrl)

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    `Unable to fetch weather for ${city.name}`
                );

            }

            return response.json();

        })

        .then(function(data) {

            return {

                city: city,

                weather: data.current

            };

        });

}


// ==========================================
// CREATE WEATHER CARD
// ==========================================

function createWeatherCard(weatherData, index) {

    const city = weatherData.city;
    const weather = weatherData.weather;

    const weatherInfo =
        getWeatherInfo(weather.weather_code);


    return `

        <div class="col-md-6 col-lg-4">

            <article class="card weather-post-card h-100 border-0 shadow-sm overflow-hidden">


                <!-- IMAGE -->

                <div class="weather-image-wrapper">

                    <img
                        src="${city.image}"
                        class="weather-post-image"
                        alt="${city.name} weather"
                    >

                    <div class="weather-image-overlay"></div>


                    <div class="weather-image-content">

                        <span class="badge bg-light text-dark">

                            Weather Update ${index + 1}

                        </span>

                    </div>

                </div>


                <!-- CARD CONTENT -->

                <div class="card-body p-4">


                    <!-- CITY -->

                    <div class="d-flex justify-content-between align-items-start mb-3">

                        <div>

                            <h3 class="h4 fw-bold mb-1">

                                ${city.name}

                            </h3>

                            <small class="text-muted">

                                <i class="bi bi-geo-alt me-1"></i>

                                ${city.country}

                            </small>

                        </div>


                        <i
                            class="bi ${weatherInfo.icon} weather-main-icon"
                        ></i>

                    </div>


                    <!-- TEMPERATURE -->

                    <div class="d-flex align-items-center gap-2 mb-2">

                        <span class="display-6 fw-bold">

                            ${Math.round(weather.temperature_2m)}°C

                        </span>

                    </div>


                    <!-- DESCRIPTION -->

                    <p class="weather-description mb-4">

                        ${weatherInfo.description}

                    </p>


                    <!-- WEATHER DETAILS -->

                    <div class="row g-3">


                        <!-- HUMIDITY -->

                        <div class="col-6">

                            <div class="weather-detail">

                                <i class="bi bi-droplet-fill"></i>

                                <div>

                                    <small>
                                        Humidity
                                    </small>

                                    <strong>
                                        ${weather.relative_humidity_2m}%
                                    </strong>

                                </div>

                            </div>

                        </div>


                        <!-- WIND -->

                        <div class="col-6">

                            <div class="weather-detail">

                                <i class="bi bi-wind"></i>

                                <div>

                                    <small>
                                        Wind
                                    </small>

                                    <strong>
                                        ${Math.round(weather.wind_speed_10m)} km/h
                                    </strong>

                                </div>

                            </div>

                        </div>


                    </div>


                    <!-- FOOTER -->

                    <hr class="my-4">


                    <div class="d-flex justify-content-between align-items-center">

                        <small class="text-muted">

                            <i class="bi bi-clock me-1"></i>

                            Current conditions

                        </small>


                        <span class="text-primary fw-semibold">

                            Live weather

                        </span>

                    </div>

                </div>

            </article>

        </div>

    `;
}


// ==========================================
// LOAD WEATHER
// ==========================================

function loadWeather() {

    loading.classList.remove("d-none");

    errorMessage.classList.add("d-none");

    postsContainer.innerHTML = "";


    const weatherRequests =
        cities.map(function(city) {

            return fetchWeather(city);

        });


    Promise.all(weatherRequests)

        .then(function(results) {

            loading.classList.add("d-none");


            results.forEach(function(weatherData, index) {

                postsContainer.innerHTML +=
                    createWeatherCard(
                        weatherData,
                        index
                    );

            });

        })

        .catch(function(error) {

            console.error(error);


            loading.classList.add("d-none");

            errorMessage.classList.remove("d-none");


            errorMessage.innerHTML = `

                <i class="bi bi-exclamation-triangle-fill me-2"></i>

                We couldn't connect to the weather service.
                Please check your internet connection and try again.

            `;

        });

}


// ==========================================
// START
// ==========================================

loadWeather();