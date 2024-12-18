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
const canvas = document.getElementById('santaCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Imagine pentru Moș Crăciun cu sania și renii
const santaImage = new Image();
santaImage.src = 'Images/santa_sleigh_rudolph.png'; // Asigură-te că acest fișier există

let santaX = -300; // Poziția inițială în afara ecranului
let santaY = canvas.height * 0.2; // Poziția pe verticală

function drawSanta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Șterge canvas-ul
    ctx.drawImage(santaImage, santaX, santaY, 500, 500); // Desenează Moș Crăciun

    santaX += 5; // Mișcă sania spre dreapta

    // Când Moș Crăciun iese de pe ecran, reîncepe
    if (santaX > canvas.width) {
        santaX = -300;
    }

    requestAnimationFrame(drawSanta); // Reapelez funcția pentru un efect de animație
}

santaImage.onload = () => {
    drawSanta(); // Începe animația după ce imaginea s-a încărcat
};

// Redimensionare canvas la schimbarea dimensiunii ferestrei
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    santaY = canvas.height * 0.2;
});

