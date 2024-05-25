document.addEventListener("DOMContentLoaded", function() {
    let nameInput = document.getElementById("yourName");
    nameInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let name = nameInput.value.trim();
            if (name !== "") {
                let usernameElement = document.getElementById("username");

                if (usernameElement) {
                    usernameElement.querySelector("a").innerHTML = `<i>The Quiz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>Player Is:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><b>${name.split(" ").join("<br>")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>`;
                }

                // Create and append a custom message
                let customMessageContainer = document.createElement("div");
                customMessageContainer.classList.add("custom-message-container");

                let customMessage = document.createElement("p");
                customMessage.innerText = "Good luck with the quiz!";
                customMessage.style.color = "green";

                customMessageContainer.appendChild(customMessage);
                document.body.insertBefore(customMessageContainer, document.querySelector("section"));

                document.getElementById("usernameInput").style.display = "none";
                startQuiz();
            }
        }
    });

    function startQuiz() {
        let questionIndex = 0;
        let score = 0;

        const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

        function loadQuestion() {
            if (questionIndex >= questions.length) {
                showResult();
                return;
            }

            questions[questionIndex]();

            document.getElementById("question").querySelector("h2").innerText = question;
            document.querySelector("label[for='option1']").innerText = option1;
            document.querySelector("label[for='option2']").innerText = option2;
            document.querySelector("label[for='option3']").innerText = option3;
            document.querySelector("label[for='option4']").innerText = option4;

            document.getElementById("questionNumber").innerText = `Question ${questionIndex + 1}`;
            document.getElementById("totalScore").innerText = `Score: ${score}`;
        }

        function showResult() {
            const section = document.querySelector("section.container");
            const fragment = document.createDocumentFragment();
            const resultMessage = document.createElement("h2");
            resultMessage.innerText = `Your final score is: ${score} out of ${questions.length}`;
            fragment.appendChild(resultMessage);
            section.innerHTML = "";
            section.appendChild(fragment);
        }

        document.getElementById("submitBtn").addEventListener("click", function() {
            const selectedOption = document.querySelector('input:checked');
            if (selectedOption) {
                const selectedValue = selectedOption.nextElementSibling.innerText;

                const customMessage = document.querySelector(".custom-message-container p");

                if (selectedValue === eval(`option${questions[questionIndex].correctOption}`)) {
                    score++;
                    alert(correctResponse);
                    customMessage.style.color = "green"; // Set to green for correct answer
                } else {
                    alert(incorrectResponse);
                    customMessage.style.color = "red"; // Set to red for incorrect answer
                }

                questionIndex++;
                loadQuestion();
            }
        });

        loadQuestion();
    }
});

let question = "";

let option1 = "";
let option2 = "";
let option3 = "";
let option4 = "";

let correctResponse = "";
let incorrectResponse = "";

// Define all question functions here...
function questionOne() {
    question = "Starting off easy, what's my favorite color?";
    option1 = "Blue";
    option2 = "Purple";
    option3 = "Green"; // correct answer
    option4 = "Tangerine Tango";

    correctResponse = "Correct! I mean it's only the only color I used desinging this site haha";
    incorrectResponse = "Wrong. It's kinda given with the header color madude...";
    questionOne.correctOption = 3;
}

function questionTwo() {
    question = "This should also be an easy one, so I included math... Based on how old you think I am, how old will I be in 19 years from today?";
    option1 = "37";
    option2 = "38"; // correct answer
    option3 = "39";
    option4 = "40";

    correctResponse = "Correct! Hopefully you got the slight hint that I am 19 in the question";
    incorrectResponse = "Wrong. It was hinted that I'm currently 19 in the question";
    questionTwo.correctOption = 2;
}

function questionThree() {
    question = "Question 3, where was I born?";
    option1 = "Iran";
    option2 = "Germany"; // correct answer
    option3 = "Area 51";
    option4 = "Afghanistan";

    correctResponse = "Correct! Was it a guess or did you pick up on how much I talk about it?!";
    incorrectResponse = "Wrong. I've been told that I make being born from Germany my entire personality trait... If you haven't noticed, now that it's in your mind lmk if it's true haha";
    questionThree.correctOption = 2;
}

function questionFour() {
    question = "Alright, what two languages can I speak?";
    option1 = "English, Farsi"; // correct answer
    option2 = "English, Spanish";
    option3 = "English, German";
    option4 = "English, Arabic";

    correctResponse = "Correct! This was supposed to trick you but you passed!";
    incorrectResponse = "Wrong. You prob selected German, yeah not necessarily proud that I was born there but can't speak the language. Answer is Farsi!";
    questionFour.correctOption = 1;
}

function questionFive() {
    question = "How many nieces/nephews do you think I have?";
    option1 = "3";
    option2 = "5";
    option3 = "7";
    option4 = "9"; // correct answer

    correctResponse = "Correct! And yea I can't believe it either tbh haha";
    incorrectResponse = "Wrong. Yeah don't blame you I literally had to count them on my fingers to make sure how many there are. Currently 9 but will be 10 in November!";
    questionFive.correctOption = 4;
}

function questionSix() {
    question = "What is my go-to drink that I have when I first come into the office?";
    option1 = "Juice";
    option2 = "Tea";
    option3 = "Hot Coffee";
    option4 = "Iced Coffee"; // correct answer

    correctResponse = "Correct! Although recently I've been thinking about cutting caffine";
    incorrectResponse = "Wrong. Okay my Pressed Juicery juice is kinda close second but you have never seen me with tea or hot coffee c'mon";
    questionSix.correctOption = 4;
}

function questionSeven() {
    question = "Question 7. What is my favorite fruit that I have for lunch?";
    option1 = "Strawberries";
    option2 = "Grapes";
    option3 = "Watermelon"; // correct answer
    option4 = "Yellow Watermelon";

    correctResponse = "Correct! Yeah I had to search up rare fruits and yellow watermelon popped up";
    incorrectResponse = "Wrong. I mean I thought it was obvious how much I am in a better mood when I have my watermelon";
    questionSeven.correctOption = 3;
}

function questionEight() {
    question = "What are the three countries that I plan to visit this Summer?";
    option1 = "Thailand, Laos, Cambodia";
    option2 = "Spain, Portugal, Morocco"; // correct answer
    option3 = "Japan, Korea, Taiwan";
    option4 = "Italy, Greece, Croatia";

    correctResponse = "Correct! I think I've only mentioned this almost every day haha";
    incorrectResponse = "Wrong. While all of these countries are on my bucket list as future trips, this summer is for Spain, Portugal and Morocco";
    questionEight.correctOption = 2;
}

function questionNine() { 
    question = "Where do I currently work?";
    option1 = "Restaurant"; // correct answer
    option2 = "Grader"; 
    option3 = "Retail";
    option4 = "Funemployed";

    correctResponse = "Correct! However not for long, they got new management and everyone is quitting...";
    incorrectResponse = "Wrong. Kinda tricky, gotcha with the multiple answers, but I do work as a grader at my University and a server at a Japanese sushi restaurant";
    questionNine.correctOption = 1; 
}

function questionTen() {
    question = "Final Question! In a year's time it's pretty much given that all the companies below will be knocking on my door for me to work for them. Which one will I accept?";
    option1 = "Google";
    option2 = "Facebook";
    option3 = "Amazon";
    option4 = "Apple"; // correct answer

    correctResponse = "Correct! After I added this question I was like maybe it's obvious with my headphones hahaha";
    incorrectResponse = "Wrong. Yeah, don't really have specific reasoning besides that it's Apple.";
    questionTen.correctOption = 4;
}