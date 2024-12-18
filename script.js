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
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄️'; // Emoji pentru fulg
    snowflake.style.left = Math.random() * 100 + 'vw'; // Poziție random pe lățimea ecranului
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durată variabilă a animației
    snowflake.style.opacity = Math.random(); // Niveluri diferite de transparență
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Dimensiune variabilă

    document.getElementById('snowEffect').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Elimină fulgul după ce trece de ecran
}

// Creează un fulg nou la fiecare 1000ms
setInterval(createSnowflake, 1000);

