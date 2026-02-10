document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const allLinks = document.querySelectorAll("a");
    const menuLinks = document.querySelectorAll(".nav-links a");

    /* Hover opacity effect */
    allLinks.forEach(link => {
        link.addEventListener("mouseover", () => link.style.opacity = "0.8");
        link.addEventListener("mouseout", () => link.style.opacity = "1");
    });

    /* Smooth scroll */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* 🔥 BURGER TOGGLE + BLOQUEAR SCROLL */
    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle");
        navLinks.classList.toggle("active");
        document.body.classList.toggle("menu-open"); // bloquea scroll lateral
    });

    /* 🔥 Cerrar menú al hacer click en links del menú */
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("toggle");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

    /* 🔥 Cerrar menú al hacer click fuera */
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            burger.classList.remove("toggle");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });

});