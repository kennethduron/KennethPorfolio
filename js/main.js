document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE NAVIGATION */
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const menuLinks = document.querySelectorAll(".nav-links a");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("toggle");
            navLinks.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            burger?.classList.remove("toggle");
            navLinks?.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

    document.addEventListener("click", (event) => {
        if (
            navLinks &&
            burger &&
            !navLinks.contains(event.target) &&
            !burger.contains(event.target)
        ) {
            burger.classList.remove("toggle");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });

    /* SMOOTH SCROLL */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
