let countdownDate = new Date("Dec 24, 2024 00:00:00").getTime();
let countdownElement = document.getElementById("countdown");

function updateCountdown() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "Crăciun Fericit!";
    } else {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdownElement.innerHTML = `Mai sunt ${days} zile până la Crăciun!`;
    }
}
setInterval(updateCountdown, 1000);

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄️"; // Emoji pentru fulg de zăpadă
    snowflake.style.left = Math.random() * 100 + "vw"; // Poziție aleatoare pe lățimea paginii
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Durată variabilă a animației
    snowflake.style.opacity = Math.random() * 0.8 + 0.2; // Opacitate variabilă
    snowflake.style.fontSize = Math.random() * 20 + 10 + "px"; // Dimensiuni diferite ale fulgilor

    document.body.appendChild(snowflake);

    // Elimină fulgul din DOM după 5 secunde
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Creează fulgi noi la fiecare 500ms
setInterval(createSnowflake, 500);


