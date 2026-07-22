document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    fetch("data/posts.json")
        .then(response => response.json())
        .then(posts => {

            posts.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });

            posts.forEach((post, index) => {
                const postElement = document.createElement("div");
                postElement.classList.add("post-card", "project-card");

                const postDate = new Date(post.date + "T00:00:00");

                const formattedDate = postDate.toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });

                let latestPost = "";

                if (index === 0) {
                    latestPost =
                        '<span class="latest-badge">Latest Post</span>';
                }

                postElement.innerHTML = `
                    ${latestPost}

                    <h2 class="card-title">${post.title}</h2>

                    <p class="post-meta">
                        ${formattedDate} | <span class="card-category">${post.category}</span>
                    </p>

                    <p class="card-description">${post.summary}</p>

                    <button class="read-more-button">
                        Read More
                    </button>

                    <p class="post-content">
                        ${post.content}
                    </p>
                `;

                blogList.appendChild(postElement);

                const readMoreButton =
                    postElement.querySelector(".read-more-button");

                const postContent =
                    postElement.querySelector(".post-content");

                readMoreButton.addEventListener("click", function () {
                    if (postContent.style.display === "block") {
                        postContent.style.display = "none";
                        readMoreButton.textContent = "Read More";
                    } else {
                        postContent.style.display = "block";
                        readMoreButton.textContent = "Show Less";
                    }
                });
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});