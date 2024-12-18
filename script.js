let countdownDate = new Date("Dec 24, 2024 00:00:00").getTime();
let countdownElement = document.getElementById("countdown");

function updateCountdown() {
    let now = new Date().getTime();
    let distance = countdownDate - now;
    if (distance < 0) {
        countdownElement.innerHTML = "Crăciun Fericit!";
    } else {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdownElement.innerHTML = `${days} zile ${hours} ore ${minutes} minute`;
    }
}
setInterval(updateCountdown, 1000);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄️'; // Emoji fulg de zăpadă
    snowflake.style.position = 'absolute';
    snowflake.style.left = Math.random() * 100 + 'vw'; // Distribuție pe toată lățimea paginii
    snowflake.style.top = '-10%'; // Începe de deasupra ecranului
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Diferite dimensiuni
    snowflake.style.opacity = Math.random(); // Diferite niveluri de transparență
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durata diferită pentru fiecare fulg
    document.getElementById('snowEffect').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 500); // Crează un fulg nou la fiecare 300ms
