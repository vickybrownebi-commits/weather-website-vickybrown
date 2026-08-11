const postsContainer = document.getElementById("postsContainer");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");


// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";


// Fetch posts
fetch(apiUrl)

    .then(function(response) {

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return response.json();

    })

    .then(function(posts) {

        // Remove loading message
        loading.classList.add("d-none");


        // Display only the first 12 posts
        posts.slice(0, 12).forEach(function(post) {

            postsContainer.innerHTML += `

                <div class="col-md-6 col-lg-4">

                    <div class="card h-100 shadow-sm border-0">

                        <div class="card-body">

                            <div class="mb-3">

                                <i class="bi bi-cloud-sun-fill 
                                text-primary fs-1">
                                </i>

                            </div>


                            <span class="badge bg-primary mb-2">
                                Weather Update #${post.id}
                            </span>


                            <h5 class="card-title text-capitalize">
                                ${post.title}
                            </h5>


                            <p class="card-text text-muted">
                                ${post.body}
                            </p>


                            <button
                                class="btn btn-outline-primary"
                                type="button"
                            >
                                Read More
                            </button>

                        </div>

                    </div>

                </div>

            `;

        });

    })

    .catch(function(error) {

        // Hide loading
        loading.classList.add("d-none");


        // Show error
        errorMessage.classList.remove("d-none");

        errorMessage.textContent =
            "Sorry, we could not load the posts. Please try again.";

        console.error(error);

    });