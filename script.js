function showPage(pageId) {

    const pages = document.querySelectorAll(".main-content section");

    pages.forEach(function (page) {

        page.style.display = "none";

    });

    document.getElementById(pageId).style.display = "block";
}

const buttons = document.querySelectorAll(".nav-button");

buttons.forEach(function (button) {

    button.onclick = function () {

        buttons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        showPage(button.dataset.page);

    };

});

document
    .getElementById("projectsShortcut")
    .onclick = function(){

    showPage("projectsPage");

    buttons.forEach(function(btn){

        btn.classList.remove("active");

    });

    document
        .querySelector(
            '[data-page="projectsPage"]'
        )
        .classList.add("active");

};

document
    .getElementById("contactShortcut")
    .onclick = function(){

    showPage("contactPage");

    buttons.forEach(function(btn){

        btn.classList.remove("active");

    });

    document
        .querySelector(
            '[data-page="contactPage"]'
        )
        .classList.add("active");

};