document.addEventListener("DOMContentLoaded", function () {
    loadSavedTheme();
});


function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);

    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {
        toggleBtn.textContent =
            theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode";
    }

    localStorage.setItem("theme", theme);
}


function loadSavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme("light");
    }
}


function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");

    if (!toggleBtn) {
        return;
    }

    const currentTheme =
        document.body.getAttribute("data-theme") || "light";

    toggleBtn.textContent =
        currentTheme === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";

    toggleBtn.addEventListener("click", function () {
        const currentTheme =
            document.body.getAttribute("data-theme");

        if (currentTheme === "dark") {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }
    });
}