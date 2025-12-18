document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const testimonialCard = document.querySelector("[data-slide]");
    const prevBtn = document.querySelector("[data-prev]");
    const nextBtn = document.querySelector("[data-next]");
    const bookBtn = document.getElementById("book-btn");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const expanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!expanded));
            navLinks.dataset.open = String(!expanded);
        });
    }

    const testimonials = [
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.",
            author: "Michael Doe — Fashion Designer"
        },
        {
            quote: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas lorem ipsum dolor sit.",
            author: "Tala Singh — Art Director"
        },
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada nam fermentum.",
            author: "Luis Ramos — Music Producer"
        }
    ];

    let slideIndex = 0;

    const renderSlide = () => {
        if (!testimonialCard) {
            return;
        }
        const quoteEl = testimonialCard.querySelector(".quote");
        const authorEl = testimonialCard.querySelector(".author");
        const current = testimonials[slideIndex];
        if (quoteEl && authorEl) {
            quoteEl.textContent = current.quote;
            authorEl.textContent = current.author;
        }
    };

    const moveSlide = (direction) => {
        slideIndex = (slideIndex + direction + testimonials.length) % testimonials.length;
        renderSlide();
    };

    if (testimonialCard) {
        renderSlide();
    }

    prevBtn?.addEventListener("click", () => moveSlide(-1));
    nextBtn?.addEventListener("click", () => moveSlide(1));

    bookBtn?.addEventListener("click", () => {
        alert("Seat reserved! We'll send the Claude Sonnet 4.5 preview to your inbox shortly.");
    });
});
