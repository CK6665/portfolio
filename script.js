// ================================
// Navigation
// ================================

const pages = document.querySelectorAll(".main-content section");
const navButtons = document.querySelectorAll(".nav-button");

function showPage(pageId) {

    // Hide every page
    pages.forEach(function (page) {
        page.style.display = "none";
    });

    // Show selected page
    document.getElementById(pageId).style.display = "block";

    // Update active navigation button
    navButtons.forEach(function (button) {
        button.classList.remove("active");
    });

    document
        .querySelector(`[data-page="${pageId}"]`)
        .classList.add("active");
}

// ================================
// Sidebar Navigation
// ================================

navButtons.forEach(function (button) {

    button.onclick = function () {

        showPage(button.dataset.page);

    };

});

// ================================
// Hero Buttons
// ================================

document
    .getElementById("projectsShortcut")
    .onclick = function () {

        showPage("projectsPage");

    };

document
    .getElementById("contactShortcut")
    .onclick = function () {

        showPage("contactPage");

    };

// ================================
// Dark Mode
// ================================

const themeButton = document.getElementById("themeToggle");

function updateThemeButton() {

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

}

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

updateThemeButton();

themeButton.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

    updateThemeButton();

};

// ================================
// Default Page
// ================================

showPage("homePage");