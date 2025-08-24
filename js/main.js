// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactive Contact Form
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm?.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(contactForm);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        if (data.includes("success")) {
            formMessage.style.color = "green";
            formMessage.innerText = "✅ Your message has been sent successfully!";
            contactForm.reset();
        } else {
            formMessage.style.color = "red";
            formMessage.innerText = "❌ Oops! Something went wrong. Please try again.";
        }
    })
    .catch(() => {
        formMessage.style.color = "red";
        formMessage.innerText = "⚠️ Network error. Try again later.";
    });
});

// Initialize AOS
AOS.init({ duration: 1000 });

// Initialize Swiper Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
});
