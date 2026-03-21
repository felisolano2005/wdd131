document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (menuButton.textContent === "☰") {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});