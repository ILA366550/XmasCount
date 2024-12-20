let questions = [
    {
        question: "Care este numele renului cu nasul roșu?",
        options: ["Blitzen", "Rudolph", "Prancer", "Vixen"]
    },
    {
        question: "Ce animal este asociat cu Moș Crăciun?",
        options: ["Ren", "Urs", "Zebră", "Leu"]
    },
    {
        question: "Cine a scris 'Colind de Crăciun'?",
        options: ["Charles Dickens", "J.K. Rowling", "Shakespeare", "Hemingway"]
    },
    {
        question: "Ce culoare are tipica pălărie de Moș Crăciun?",
        options: ["Verde", "Albastru", "Roșu", "Galben"]
    },
    {
        question: "În filmul clasic de Crăciun 'Singur Acasă', care este numele băiatului care rămâne acasă?",
        options: ["Kevin McCallister", "George Bailey", "Ralphie Parker", "Buddy the Elf"]
    },
    {
        question: "Care este colindul tradițional care începe cu versul 'O, ce veste minunată'?",
        options: ["O, brad frumos", "O, ce veste minunată", "Adeste Fideles", "Santa Claus Is Coming to Town"]
    },
    {
        question: "În ce țară se află cel mai mare brad de Crăciun, care este decorat anual pe Piazza Venezia, la Roma?",
        options: ["Italia", "Germania", "Franța", "Suedia"]
    },
    {
        question: "Ce actor joacă rolul principal în filmul 'Elf' (2003), unde interprează un om crescut de elfi?",
        options: ["Jim Carrey", "Will Ferrell", "Robin Williams", "Ben Stiller"]
    },
    {
        question: "Care este numele cărții celebre de Charles Dickens, care a fost publicată în 1843 și este una dintre cele mai populare povești de Crăciun?",
        options: ["A Christmas Carol", "The Grinch Who Stole Christmas", "The Polar Express", "The Nutcracker"]
    },
    {
        question: "Care colind are următorul refren: 'Fie ca acest Crăciun să fie mai bun decât cel dinainte'?",
        options: ["Jingle Bells", "Last Christmas", "Happy Xmas (War Is Over)", "Do They Know It's Christmas?"]
    },
    {
        question: "Care este numele personajului interpretat de Bill Murray în filmul 'Scrooged' (1988), o adaptare modernă a 'A Christmas Carol'?",
        options: ["Frank Cross", "Buddy the Elf", "Clark Griswold", "George Bailey"]
    },
    {
        question: "Care este colindul care începe cu versul 'Pe la noi în sătuc'?",
        options: ["O, brad frumos", "Trei păstori", "Colindul crăciunului", "Steaua sus răsare"]
    },
    {
        question: "În ce țară este tradiția de a pune o ghirlandă pe ușă ca simbol al bunăstării și al norocului în timpul Crăciunului?",
        options: ["Italia", "Germania", "Anglia", "Spania"]
    },
    {
        question: "Ce actor joacă rolul Moșului în filmul 'The Santa Clause' (1994)?",
        options: ["Tim Allen", "Tom Hanks", "Robin Williams", "Will Ferrell"]
    },
    {
        question: "Care este numele renului care este cunoscut pentru a fi cel mai rapid dintre toți renii lui Moș Crăciun?",
        options: ["Blitzen", "Comet", "Dasher", "Cupid"]
    },
    {
        question: "În ce an a fost lansat celebrul film de Crăciun 'The Polar Express'?",
        options: ["2000", "2001", "2002", "2004"]
    }
];

const answers = [
    "Rudolph", 
    "Ren", 
    "Charles Dickens", 
    "Roșu", 
    "Kevin McCallister", 
    "O, ce veste minunată", 
    "Italia", 
    "Will Ferrell", 
    "A Christmas Carol", 
    "Happy Xmas (War Is Over)", 
    "Frank Cross", 
    "Trei păstori", 
    "Germania", 
    "Tim Allen", 
    "Dasher", 
    "2004"
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 300;
let isGameActive = false;

const questionContainer = document.getElementById("question-container");
const timerElement = document.getElementById("time");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("start-btn");

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <div>
            ${question.options.map(option => `<button class="option">${option}</button>`).join('')}
        </div>
    `;

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => {
        button.addEventListener("click", function () {
            checkAnswer(button.textContent);
        });
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = answers[currentQuestionIndex];

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function startGame() {
    isGameActive = true;
    score = 0;
    currentQuestionIndex = 0;
    timeRemaining = 300;
    startButton.disabled = true;
    resultElement.innerHTML = "";
    displayQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerElement.textContent = timeRemaining;
        } else {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);

    let finalMessage = "";
    if (score > 10) {
        finalMessage = "🎅 Felicitări! Moș Crăciun este foarte mândru de tine și știe că vei avea un Crăciun minunat! 🎄";
    } else {
        finalMessage = "🎅 Oh, nu! Moș Crăciun este puțin supărat. Mai încearcă și vei reuși! 🎁";
    }

    resultElement.innerHTML = `
        <p>Scor final: ${score} din ${questions.length}</p>
        <p>${finalMessage}</p>
    `;
    startButton.disabled = false;
    startButton.textContent = "Reîncepe jocul";
}

startButton.addEventListener("click", function () {
    if (!isGameActive) {
        startGame();
    } else {
        location.reload(); 
    }
});
