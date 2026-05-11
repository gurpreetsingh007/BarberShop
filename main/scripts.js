document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const sliderCard = document.querySelector("[data-slide]");
    const prevBtn = document.querySelector("[data-prev]");
    const nextBtn = document.querySelector("[data-next]");
    const reservationForm = document.getElementById("reservation-form");
    const faqItems = document.querySelectorAll(".faq-item");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const expanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!expanded));
            navLinks.classList.toggle("open", !expanded);
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const testimonials = [
        {
            quote: "It feels like walking into a lounge, not a lobby. I always leave with a cut that turns heads.",
            author: "Isabella — Creative Director"
        },
        {
            quote: "The squad remembered my last style and refined it on the fly. That's why I trust Majhail Barber.",
            author: "Jerome — Photographer"
        },
        {
            quote: "Legit the only shop where booking, vibes, and compliments happen before I hit the door.",
            author: "Marcus — DJ"
        }
    ];

    let slideIndex = 0;

    const renderSlide = () => {
        if (!sliderCard) {
            return;
        }
        const quoteEl = sliderCard.querySelector(".quote");
        const authorEl = sliderCard.querySelector(".author");
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

    if (sliderCard) {
        renderSlide();
    }

    prevBtn?.addEventListener("click", () => moveSlide(-1));
    nextBtn?.addEventListener("click", () => moveSlide(1));

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question?.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            faqItems.forEach((faq) => faq.classList.remove("open"));
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });

    reservationForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(reservationForm);
        const name = formData.get("name") || "friend";
        alert(`Thanks ${name}! Your seat is locked. We'll confirm via text in a few minutes.`);
        reservationForm.reset();
    });
});
