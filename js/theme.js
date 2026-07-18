// Apply the saved theme when the page opens


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}


// Set up the theme button after the header loads
function setupThemeButton() {
    const themeButton = document.getElementById("theme-button");

    if (themeButton === null) {
        return;
    }

    updateThemeButtonText(themeButton);

    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateThemeButtonText(themeButton);
    });
}


// Change the button text based on the current theme


function updateThemeButtonText(themeButton) {
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
}