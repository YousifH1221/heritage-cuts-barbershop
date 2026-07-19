// Load the website header
fetch("components/header.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (headerContent) {
        document.getElementById("header-placeholder").innerHTML =
            headerContent;

        setupThemeToggle();
    })
    .catch(function (error) {
        console.log("Header error", error);
    });
    
// Load the website footer
fetch("components/footer.html")
    .then(function(response) {
        return response.text();
    })
    .then(function(footerContent) {
        document.getElementById("footer-placeholder").innerHTML =
            footerContent;
    })
    .catch(function(error) {
        console.log("The footer could not be loaded.", error);
    });