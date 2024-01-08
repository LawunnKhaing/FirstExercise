document.getElementById("actionButton").addEventListener("click", function() {
    var description = document.getElementById("description");
    var descriptionStyle = window.getComputedStyle(description);

    if (descriptionStyle.display === "none" || descriptionStyle.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
});


document.getElementById("currentYear").textContent = new Date().getFullYear();

