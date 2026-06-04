const navLinks = document.querySelectorAll(".nav-links a");

function handleNavigation(event) {
    

    const sectionName = event.target.textContent.trim();

    console.log(`Navigating to: ${sectionName}`);
}

navLinks.forEach((link) => {
    link.addEventListener("click", handleNavigation);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");
});