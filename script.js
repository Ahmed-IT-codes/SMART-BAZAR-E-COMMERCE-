const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll("#products .col-md-4");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {

        const productName = card
            .querySelector(".card-title")
            .textContent
            .toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });
});

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {

        const productName = card.querySelector(".card-title").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });
});
// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

});


// ================= FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill all fields.";
        formMessage.style.color = "red";

    } else {

        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";

        contactForm.reset();
    }

});