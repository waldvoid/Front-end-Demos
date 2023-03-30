document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            item.classList.toggle("rotate");
        })
    })
})