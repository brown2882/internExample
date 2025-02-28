document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function() {
        if (navbarCollapse.classList.contains("show")) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        } else {
            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).show();
        }
    });
});


console.log("hi")