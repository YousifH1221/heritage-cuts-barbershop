document.addEventListener("DOMContentLoaded", function () {
    const filterInput = document.getElementById("filter-input");
    const noResults = document.getElementById("no-results");

    filterInput.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();
        let visibleCount = 0;

        const cards = document.querySelectorAll(".project-card");

        cards.forEach(function (card) {
            const title = card
                .querySelector(".card-title")
                .textContent
                .toLowerCase();

            const category = card
                .querySelector(".card-category")
                .textContent
                .toLowerCase();

            const description = card
                .querySelector(".card-description")
                .textContent
                .toLowerCase();

            if (
                title.includes(query) ||
                category.includes(query) ||
                description.includes(query)
            ) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }
    });
});