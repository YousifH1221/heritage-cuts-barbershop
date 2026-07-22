document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorMessage = field.nextElementSibling;

        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorMessage = field.nextElementSibling;

        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        clearError("name");
        clearError("email");
        clearError("message");

        if (name === "") {
            showError("name", "Please enter your name.");
            isValid = false;
        }

        if (email === "") {
            showError("email", "Please enter your email.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("email", "Please enter a valid email.");
            isValid = false;
        }

        if (message.length < 20) {
            showError(
                "message",
                "Your message must be at least 20 characters."
            );

            isValid = false;
        }

        if (isValid) {
            form.innerHTML =
                '<p class="success-message">Thank you! Your message has been submitted.</p>';
        }
    });

    ["name", "email", "message"].forEach(function (id) {
        document.getElementById(id).addEventListener("input", function () {
            clearError(id);
        });
    });
});