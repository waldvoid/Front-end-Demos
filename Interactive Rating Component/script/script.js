document.addEventListener("DOMContentLoaded", function() {
    const modalItemCompleted = document.getElementById("item-completed");
    const modalItem = document.getElementById("item");
    const modalItemLink = document.getElementById("item-link");
    const buttonRating1 = document.getElementById("rating-1");
    const buttonRating2 = document.getElementById("rating-2");
    const buttonRating3 = document.getElementById("rating-3");
    const buttonRating4 = document.getElementById("rating-4");
    const buttonRating5 = document.getElementById("rating-5");

    modalItemLink.onclick = () => {
        modalItem.style.display = "none";
        modalItemCompleted.style.display = "flex";
        document.getElementById("feedback-result").innerHTML = getRatingValue();
    }

    function getRatingValue() {
        if (buttonRating1.checked) {
            return buttonRating1.value;
        } else if (buttonRating2.checked) {
            return buttonRating2.value;
        } else if (buttonRating3.checked) {
            return buttonRating3.value;
        } else if (buttonRating4.checked) {
            return buttonRating4.value;
        } else if (buttonRating5.checked) {
            return buttonRating5.value;
        }
    }


});
