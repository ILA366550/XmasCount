document.addEventListener("DOMContentLoaded", () => {
    let countdownDate = new Date("Dec 25, 2024 00:00:00").getTime();
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
    setInterval(updateCountdown, 1000); // Actualizează numărătoarea la fiecare secundă

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄️";
        snowflake.style.left = Math.random() * 100 + "vw"; // Poziție pe lățimea ecranului
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Durată variabilă
        snowflake.style.opacity = Math.random() * 0.8 + 0.2; // Transparente variabile
        snowflake.style.fontSize = Math.random() * 20 + 10 + "px"; // Dimensiuni variabile

        const snowEffectContainer = document.getElementById("snowEffect");
        snowEffectContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Elimină fulgul după 5 secunde
    }

    // Creează fulgi de zăpadă în mod continuu
    setInterval(createSnowflake, 500);
});
