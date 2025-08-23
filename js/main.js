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

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        // Display success message
        formMessage.style.color = "green";
        formMessage.innerText = `Thank you ${name}! Your message has been sent successfully.`;

        // Reset form fields
        this.reset();

        // Optional: send form data to a server or service (Formspree, EmailJS, etc.)
        // Example using fetch:
        /*
        fetch("https://formspree.io/f/yourFormID", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        }).then(response => {
            if(response.ok){
                formMessage.innerText = "Message sent successfully!";
                contactForm.reset();
            } else {
                formMessage.style.color = "red";
                formMessage.innerText = "Oops! Something went wrong.";
            }
        });
        */
    } else {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill in all fields correctly.";
    }
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
