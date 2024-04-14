document.addEventListener("DOMContentLoaded", function() {
    let heart = document.getElementById("heart");

    heart.onclick = () => {
        heart.style.color = "#cc190d";
        heart.textContent = "I Love You ❤️Jana❤️";
    }
});
