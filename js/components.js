// Load the website header
fetch("components/header.html")
    .then(function(response) {
        return response.text();
    })
    .then(function(headerContent) {
        document.getElementById("header-placeholder").innerHTML =
            headerContent;
            setupThemeButton();
    })
    .catch(function(error) {
        console.log("The header could not be loaded.", error);
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