let accordionCounter = 0;
function add(item, accordionText) {
    setTimeout(function() {
        // time interval for transition into accordion-item::after
        item.classList.add("rotate");
        accordionText.style.maxHeight = "100%";
        accordionText.style.paddingTop = "1em";
        accordionText.style.overflow = "visible";
        accordionText.style.opacity = "100%";
        accordionCounter++;

        // accessibility
        accordionText.ariaHidden = "false";
        item.querySelector("#accordion-h2").ariaExpanded = "true";
    }, 100);
}

function remove(item, accordionText) {
        // time interval for transition into accordion-item::after
        item.classList.remove("rotate");
        accordionText.style.maxHeight = "0";
        accordionText.style.overflow = "hidden";
        accordionText.style.paddingTop = "0";
        accordionText.style.opacity = "0";

        // accessibility
        accordionText.ariaHidden = "true";
        item.querySelector("#accordion-h2").ariaExpanded  = "false";
}

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    const accordionItemOpenStart = accordionItems.item(1);
    const accordionItemOpenStartText = accordionItemOpenStart.querySelector(".accordion-text");

    add(accordionItemOpenStart, accordionItemOpenStartText);

    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const accordionText = item.querySelector(".accordion-text");

            // if accordion has rotate class on, remove it
            if(item.classList.contains("rotate")) {
                    remove(item, accordionText);
                    accordionCounter--;
            // if accordion doesn't have rotate class on and there's also an accordion open , remove all and open clicked accordion
            } else if (!item.classList.contains("rotate") && accordionCounter === 1) {
                for (let i = 0; i < accordionItems.length ; i++) {
                    setTimeout(function () {
                        let accordionText = accordionItems[i].querySelector(".accordion-text");
                        accordionItems[i].classList.remove("rotate");
                        accordionText.style.maxHeight = "0";
                        accordionText.style.overflow = "hidden";
                        accordionText.style.paddingTop = "0";
                        accordionText.style.opacity = "0";
                        // accessibility
                        accordionText.ariaHidden = "true";
                        accordionItems[i].querySelector("#accordion-h2").ariaExpanded = "false";
                    }, 100);
                }
                add(item, accordionText);
                accordionCounter = 0;
            // if accordion doesn't have rotate class on and there's no opened accordion, open clicked accordion
            } else if(!item.classList.contains("rotate") && accordionCounter === 0) {
                add(item, accordionText);
            }
            })
        })
    })
