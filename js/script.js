// Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    const visitorMessages = document.getElementById("visitorMessages");
    const newMessage = document.createElement("p");
    newMessage.textContent = `${name} (${email}) says: "${message}"`;
    visitorMessages.appendChild(newMessage);

    this.reset();
  }
});
