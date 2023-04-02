document.addEventListener("DOMContentLoaded", function () {
    const shareButton =  document.getElementById("share-button");
    const sharePanel = document.getElementById("share-panel");

    shareButton.addEventListener("click", function () {

        setTimeout(function () {
            if (!sharePanel.classList.contains("visible")) {
                sharePanel.classList.add("visible");
                sharePanel.ariaHidden = "false";
                sharePanel.tabIndex = "0";

            } else if (sharePanel.classList.contains("visible")){
                sharePanel.classList.remove("visible");
                sharePanel.ariaHidden = "true";
                sharePanel.tabIndex = "-1";
            }
        }, 100);
    })
})