const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("nav__link--active"));

        // Add active class to clicked link
        link.classList.add("nav__link--active");
    });
});
