document.addEventListener("DOMContentLoaded", () => {
    // Hover opacity effect for all links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseover", () => link.style.opacity = "0.8");
        link.addEventListener("mouseout", () => link.style.opacity = "1");
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after click
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Burger menu toggle
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            navLinks.classList.remove("active");
            burger.classList.remove("toggle");
        }
    });
});
