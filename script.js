// ===============================
// Mobile Navigation Menu
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            destination === "" ||
            date === ""
        ) {
            alert("Please fill in all the required fields.");
            return;
        }

        alert("Your booking request has been submitted successfully!");

        contactForm.reset();

    });

}