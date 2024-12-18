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
            countdownElement.innerHTML = `... in ${days} zile!`;
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

const canvas = document.getElementById('santaCanvas');
const ctx = canvas.getContext('2d');

// Setarea dimensiunilor canvas-ului
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Imaginea Moș Crăciun
const santaImage = new Image();
santaImage.src = 'Images/santa_sleigh_rudolph.png'; // Calea corectă către imagine

// Poziționare inițială
let santaX = -400; // Start din afara ecranului (stânga)
const santaY = canvas.height * 0.3; // Aproximativ 30% de sus

function drawSanta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Curăță canvas-ul

    // Desenează imaginea cu redimensionare automată
    const santaWidth = 400; // Lățimea imaginii
    const santaHeight = santaImage.height * (santaWidth / santaImage.width); // Păstrează proporțiile

    ctx.drawImage(santaImage, santaX, santaY, santaWidth, santaHeight);

    // Mișcă imaginea spre dreapta
    santaX += 3; // Viteza de deplasare

    // Când iese de pe ecran, reîncepe din stânga
    if (santaX > canvas.width) {
        santaX = -400;
    }

    requestAnimationFrame(drawSanta); // Continuă animația
}

// Inițierea animației după încărcarea imaginii
santaImage.onload = () => {
    drawSanta();
};

// Redimensionarea canvas-ului automat la schimbarea ferestrei
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


