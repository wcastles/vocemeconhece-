/* =========================================
   QUEM ME CONHECE MAIS?
========================================= */


/* =========================================
   PERGUNTAS
========================================= */

const questions = [

    /* 1 */

    {
        number: 1,

        question: "Qual é a minha cor preferida?",

        type: "multiple",

        answers: [
            "Vermelho",
            "Verde",
            "Roxo",
            "Azul"
        ],

        correct: 3
    },


    /* 2 */

    {
        number: 2,

        question: "Qual é o meu livro preferido?",

        type: "multiple",

        answers: [
            "Jantar Secreto",
            "A Hipótese do Amor",
            "Anne de Green Gables",
            "Crime e Castigo"
        ],

        correct: 0
    },


    /* 3 */

    {
        number: 3,

        question: "Qual é o meu anime preferido?",

        type: "multiple",

        answers: [
            "Death Note",
            "Haikyuu",
            "Naruto",
            "Demon Slayer"
        ],

        correct: 3
    },


    /* 4 */

    {
        number: 4,

        question: "Eu tenho uma gata?",

        type: "multiple",

        answers: [
            "Simm, muito linda e fofa",
            "Não tenho, nunca tive"
        ],

        correct: 0
    },


    /* 5 */

    {
        number: 5,

        question: "Qual é a minha série de conforto?",

        type: "multiple",

        answers: [
            "Outer Banks",
            "Anne with an E",
            "You",
            "Gilmore Girls"
        ],

        correct: 1
    },


    /* 6 */

    {
        number: 6,

        question: "Qual é a minha banda preferida?",

        type: "multiple",

        answers: [
            "The Cure",
            "KISS",
            "Crystal Castles",
            "Tame Impala"
        ],

        correct: 2
    },


    /* 7 */

    {
        number: 7,

        question: "Qual é o meu filme de conforto?",

        type: "multiple",

        answers: [
            "Coraline",
            "O Espetacular Homem-Aranha",
            "Madagascar 3",
            "Alice no País das Maravilhas"
        ],

        correct: 3
    },


    /* =====================================
       8 — FLASHCARD
    ===================================== */

    {
        number: 8,

        question: "Eu sou time Jacob ou Edward?",

        type: "flashcard",

        answers: [

            {
                name: "Jacob",

                image: "images/jacob.jpg",

                back: "claro que nao ne",

                correct: false
            },

            {
                name: "Edward",

                image: "images/edward.jpg",

                back: "time de vampiros gente",

                correct: true
            }

        ]
    },


    /* =====================================
       9 — RANKING
    ===================================== */

    {
        number: 9,

        question:
            "Organize meus medos em escala, do maior para o menor:",

        type: "ranking",

        /*
            ORDEM CORRETA

            1 - Agulhas
            2 - Balões
            3 - Estátuas realistas
            4 - Palhaços
        */

        correctOrder: [

            "Agulhas",
            "Balões",
            "Estátuas realistas",
            "Palhaços"

        ],

        /*
            ORDEM QUE APARECE
            PARA A PESSOA

            Não está na ordem correta.
        */

        shuffled: [

            "Palhaços",
            "Balões",
            "Agulhas",
            "Estátuas realistas"

        ]
    },


    /* 10 */

    {
        number: 10,

        question: "Qual toque eu não permito em mim?",

        type: "multiple",

        answers: [

            "Orelhas",
            "Joelho",
            "Dobra do braço",
            "Umbigo"

        ],

        correct: 2
    },


    /* 11 */

    {
        number: 11,

        question: "Qual é o meu desenho preferido?",

        type: "multiple",

        answers: [

            "Tom e Jerry",
            "Jovens Titãs",
            "O Incrível Mundo de Gumball",
            "Bob Esponja"

        ],

        correct: 3
    },


    /* 12 */

    {
        number: 12,

        question: "Qual é o meu sobrenome?",

        type: "multiple",

        answers: [

            "Polleto",
            "Poletto"

        ],

        correct: 1
    },


    /* 13 */

    {
        number: 13,

        question: "Quando faço aniversário?",

        type: "multiple",

        answers: [

            "10/06",
            "06/01",
            "01/06",
            "06/10"

        ],

        correct: 2
    },


    /* 14 */

    {
        number: 14,

        question: "Qual é o meu arcano pessoal?",

        type: "multiple",

        answers: [

            "Os Enamorados",
            "A Roda da Fortuna",
            "O Enforcado",
            "O Mundo"

        ],

        correct: 1
    }

];


/* =========================================
   VARIÁVEIS
========================================= */

let currentQuestion = 0;

let score = 0;

let playerName = "";

let answered = false;


/* =========================================
   ELEMENTOS
========================================= */

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const nameInput =
    document.getElementById("player-name");

const startButton =
    document.getElementById("start-button");

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const answersContainer =
    document.getElementById("answers");

const feedback =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("next-button");

const scoreElement =
    document.getElementById("score");

const progress =
    document.getElementById("progress");

const progressText =
    document.getElementById("progress-text");

const rankingArea =
    document.getElementById("ranking-area");

const rankingList =
    document.getElementById("ranking-list");

const rankingButton =
    document.getElementById("ranking-button");

const resultName =
    document.getElementById("result-name");

const finalScore =
    document.getElementById("final-score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");


/* =========================================
   COMEÇAR QUIZ
========================================= */

startButton.addEventListener("click", () => {

    playerName =
        nameInput.value.trim();


    if (playerName === "") {

        nameInput.focus();

        nameInput.style.borderColor =
            "#ff9f43";

        return;
    }


    nameInput.style.borderColor = "";


    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = "0";


    startScreen.classList.remove("active");

    quizScreen.classList.add("active");


    loadQuestion();

});


/* =========================================
   CARREGAR PERGUNTA
========================================= */

function loadQuestion() {

    answered = false;


    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        `Pergunta ${question.number}`;


    questionText.textContent =
        question.question;


    progressText.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    const percentage =
        ((currentQuestion + 1) /
        questions.length) * 100;


    progress.style.width =
        `${percentage}%`;


    feedback.textContent = "";

    feedback.className =
        "feedback";


    nextButton.classList.add("hidden");


    answersContainer.innerHTML = "";

    rankingList.innerHTML = "";

    rankingArea.classList.add("hidden");


    if (question.type === "multiple") {

        loadMultipleChoice(question);

    }


    else if (question.type === "flashcard") {

        loadFlashcards(question);

    }


    else if (question.type === "ranking") {

        loadRanking(question);

    }

}


/* =========================================
   QUESTÕES DE MÚLTIPLA ESCOLHA
========================================= */

function loadMultipleChoice(question) {

    answersContainer.classList.remove("hidden");


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        button,
                        index,
                        question
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================
   SELECIONAR RESPOSTA
========================================= */

function selectAnswer(
    button,
    index,
    question
) {

    /*
       Impede escolher mais de uma
       resposta.
    */

    if (answered) return;


    answered = true;


    const allAnswers =
        document.querySelectorAll(
            ".answer"
        );


    allAnswers.forEach(
        answer => {

            answer.disabled = true;

        }
    );


    /* ==============================
       ACERTO
    ============================== */

    if (index === question.correct) {

        button.classList.add(
            "correct"
        );


        score++;

        scoreElement.textContent =
            score;


        showFeedback(
            "Você acertou, uhuu! 💙",
            true
        );

    }


    /* ==============================
       ERRO
    ============================== */

    else {

        button.classList.add(
            "wrong"
        );


        /*
           Mostra a resposta correta.
        */

        allAnswers[
            question.correct
        ].classList.add(
            "correct"
        );


        showFeedback(
            "Você errou! 🧡",
            false
        );

    }


    /*
       Pergunta 12:
       correta = azul-bebê
       errada = laranja
    */

    if (question.number === 12) {

        allAnswers.forEach(
            (answer, i) => {

                if (
                    i === question.correct
                ) {

                    answer.classList.add(
                        "correct"
                    );

                }

                else {

                    answer.classList.add(
                        "wrong"
                    );

                }

            }
        );

    }


    nextButton.classList.remove(
        "hidden"
    );

}


/* =========================================
   FEEDBACK
========================================= */

function showFeedback(
    message,
    correct
) {

    feedback.textContent =
        message;


    if (correct) {

        feedback.classList.add(
            "correct-feedback"
        );

    }

    else {

        feedback.classList.add(
            "wrong-feedback"
        );

    }

}


/* =========================================
   FLASHCARDS
========================================= */

function loadFlashcards(question) {

    answersContainer.classList.remove(
        "hidden"
    );


    const wrapper =
        document.createElement("div");


    wrapper.className =
        "flashcard-options";


    question.answers.forEach(
        (answer, index) => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "flashcard";


            const inner =
                document.createElement(
                    "div"
                );


            inner.className =
                "flashcard-inner";


            /* ======================
               FRENTE
            ====================== */

            const front =
                document.createElement(
                    "div"
                );


            front.className =
                "flashcard-front";


            const img =
                document.createElement(
                    "img"
                );


            img.src =
                answer.image;


            img.alt =
                answer.name;


            /*
               Se a imagem não existir,
               aparece um espaço reservado.
            */

            img.onerror = function () {

                this.style.display =
                    "none";


                const placeholder =
                    document.createElement(
                        "div"
                    );


                placeholder.className =
                    "image-placeholder";


                placeholder.textContent =
                    `IMAGEM DO ${answer.name.toUpperCase()}`;


                front.appendChild(
                    placeholder
                );

            };


            front.appendChild(
                img
            );


            /* ======================
               VERSO
            ====================== */

            const back =
                document.createElement(
                    "div"
                );


            back.className =
                "flashcard-back";


            const title =
                document.createElement(
                    "h3"
                );


            title.textContent =
                answer.name;


            const message =
                document.createElement(
                    "p"
                );


            message.textContent =
                answer.back;


            back.appendChild(
                title
            );


            back.appendChild(
                message
            );


            inner.appendChild(
                front
            );


            inner.appendChild(
                back
            );


            card.appendChild(
                inner
            );


            wrapper.appendChild(
                card
            );


            /* ======================
               CLIQUE
            ====================== */

            card.addEventListener(
                "click",
                () => {

                    if (answered) return;


                    /*
                       A carta vira.
                    */

                    card.classList.add(
                        "flipped"
                    );


                    answered = true;


                    if (answer.correct) {

                        card.classList.add(
                            "correct-card"
                        );


                        score++;

                        scoreElement.textContent =
                            score;


                        showFeedback(
                            "Você acertou, uhuu! 💙",
                            true
                        );

                    }

                    else {

                        card.classList.add(
                            "wrong-card"
                        );


                        /*
                           Destaca também
                           o Edward correto.
                        */

                        wrapper
                            .querySelectorAll(
                                ".flashcard"
                            )
                            .forEach(
                                (
                                    otherCard,
                                    otherIndex
                                ) => {

                                    if (
                                        question
                                            .answers[
                                                otherIndex
                                            ]
                                            .correct
                                    ) {

                                        otherCard.classList.add(
                                            "correct-card"
                                        );

                                    }

                                }
                            );


                        showFeedback(
                            "Você errou! 🧡",
                            false
                        );

                    }


                    nextButton.classList.remove(
                        "hidden"
                    );

                }
            );

        }
    );


    answersContainer.appendChild(
        wrapper
    );

}


/* =========================================
   RANKING
========================================= */

function loadRanking(question) {

    answersContainer.classList.add(
        "hidden"
    );


    rankingArea.classList.remove(
        "hidden"
    );


    rankingList.innerHTML = "";


    /*
       Copiamos a lista para não alterar
       a pergunta original.
    */

    const shuffled =
        [...question.shuffled];


    shuffled.forEach(
        item => {

            createRankingItem(
                item
            );

        }
    );


    enableDragAndDrop();

}


/* =========================================
   CRIAR ITEM DO RANKING
========================================= */

function createRankingItem(text) {

    const item =
        document.createElement(
            "div"
        );


    item.className =
        "ranking-item";


    item.draggable = true;


    item.dataset.value =
        text;


    /*
       BOLINHA

       Não mostra o número durante
       a tentativa.
    */

    const handle =
        document.createElement(
            "div"
        );


    handle.className =
        "ranking-handle";


    handle.textContent =
        "•";


    /*
       Posição fica escondida até
       o ranking ser concluído.
    */

    const position =
        document.createElement(
            "span"
        );


    position.className =
        "ranking-position";


    const content =
        document.createElement(
            "span"
        );


    content.textContent =
        text;


    item.appendChild(
        handle
    );


    item.appendChild(
        position
    );


    item.appendChild(
        content
    );


    rankingList.appendChild(
        item
    );

}


/* =========================================
   DRAG AND DROP
========================================= */

function enableDragAndDrop() {

    let draggedItem = null;


    const items =
        rankingList.querySelectorAll(
            ".ranking-item"
        );


    items.forEach(
        item => {


            item.addEventListener(
                "dragstart",
                () => {

                    if (answered) return;


                    draggedItem =
                        item;


                    item.style.opacity =
                        "0.5";

                }
            );


            item.addEventListener(
                "dragend",
                () => {

                    item.style.opacity =
                        "1";


                    draggedItem =
                        null;

                }
            );


            item.addEventListener(
                "dragover",
                event => {

                    event.preventDefault();


                    if (
                        answered ||
                        !draggedItem ||
                        draggedItem === item
                    ) {

                        return;

                    }


                    const rect =
                        item.getBoundingClientRect();


                    const middle =
                        rect.top +
                        rect.height / 2;


                    if (
                        event.clientY <
                        middle
                    ) {

                        rankingList.insertBefore(
                            draggedItem,
                            item
                        );

                    }

                    else {

                        rankingList.insertBefore(
                            draggedItem,
                            item.nextSibling
                        );

                    }

                }
            );

        }
    );

}


/* =========================================
   CONCLUIR RANKING
========================================= */

rankingButton.addEventListener(
    "click",
    () => {

        if (answered) return;


        answered = true;


        const question =
            questions[currentQuestion];


        const items =
            rankingList.querySelectorAll(
                ".ranking-item"
            );


        let correctPositions = 0;


        items.forEach(
            (item, index) => {

                const value =
                    item.dataset.value;


                const correctValue =
                    question.correctOrder[
                        index
                    ];


                /*
                   Mostra a posição
                   somente agora.
                */

                const position =
                    item.querySelector(
                        ".ranking-position"
                    );


                position.textContent =
                    `${index + 1}º`;


                if (
                    value === correctValue
                ) {

                    item.classList.add(
                        "correct-position"
                    );


                    correctPositions++;

                }

                else {

                    item.classList.add(
                        "wrong-position"
                    );

                }

            }
        );


        /*
           Cada posição correta
           vale 1 ponto.
        */

        score += correctPositions;


        scoreElement.textContent =
            score;


        rankingList.classList.add(
            "ranking-finished"
        );


        rankingButton.disabled =
            true;


        rankingButton.style.opacity =
            "0.6";


        if (
            correctPositions === 4
        ) {

            showFeedback(
                "Você acertou tudo, uhuu! 💙",
                true
            );

        }

        else if (
            correctPositions > 0
        ) {

            showFeedback(
                `Você acertou ${correctPositions} de 4 posições! 💙`,
                true
            );

        }

        else {

            showFeedback(
                "Você errou! 🧡",
                false
            );

        }


        nextButton.classList.remove(
            "hidden"
        );

    }
);


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion >=
            questions.length
        ) {

            showResult();

            return;

        }


        loadQuestion();

    }
);


/* =========================================
   RESULTADO
========================================= */

function showResult() {

    quizScreen.classList.remove(
        "active"
    );


    resultScreen.classList.add(
        "active"
    );


    resultName.textContent =
        playerName;


    finalScore.textContent =
        score;


    /*
       14 perguntas normais
       + até 4 pontos no ranking.

       Máximo = 17 pontos,
       porque a pergunta 9 pode
       valer até 4.
    */

    const maxScore = 17;


    const percentage =
        (score / maxScore) * 100;


    if (percentage >= 90) {

        resultMessage.textContent =
            "MEU DEUS! Você realmente me conhece muito bem. 💙";

    }

    else if (percentage >= 70) {

        resultMessage.textContent =
            "Você me conhece bastante, hein? 👀💙";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "Até que você sabe bastante sobre mim! 🧡";

    }

    else {

        resultMessage.textContent =
            "Precisamos conversar mais, hein... 😭";

    }

}


/* =========================================
   JOGAR NOVAMENTE
========================================= */

restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        answered = false;


        scoreElement.textContent =
            "0";


        resultScreen.classList.remove(
            "active"
        );


        startScreen.classList.add(
            "active"
        );


        nameInput.value = "";


        progress.style.width =
            "7%";

    }
);
