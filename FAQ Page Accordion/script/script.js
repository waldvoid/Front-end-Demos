let isAnyAccordionOpen = false;
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const accordionText = item.querySelector(".accordion-text");
            if(item.classList.contains("rotate")) {
                // time interval for transition into accordion-item::after
                setTimeout(function() {
                    item.classList.remove("rotate");
                    accordionText.style.width = "0";
                    accordionText.style.height = "0";
                    accordionText.style.overflow = "hidden";
                    accordionText.style.paddingTop = "0";
                }, 100);
                isAnyAccordionOpen = false;
            } else {
                accordionItems.forEach(function (item){
                    item.classList.remove("rotate");
                    accordionText.style.width = "0";
                    accordionText.style.height = "0";
                    accordionText.style.overflow = "hidden";
                    accordionText.style.paddingTop = "0";
                })
            }
            item.classList.add("rotate");
            accordionText.style.width = "100%";
            accordionText.style.height = "100%";
            accordionText.style.paddingTop = "2em";
            accordionText.style.overflow = "visible";
            isAnyAccordionOpen = true;
            })
        })
    })
