const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      correctAnswer: "Au"
    }
  ];

const questionsBox = document.getElementById('questions');
const answerBox = document.getElementById('ans-box');
const nextBtn = document.getElementById('next-btn');

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsBox.innerHTML = questionNo + '. ' + currentQuestion.question

    currentQuestion.options.forEach(options => {
        const answerButton = document.createElement('button');
        answerButton.innerHTML = options;
        answerButton.classList.add('btn');
        answerBox.appendChild(answerButton);

        if(currentQuestion.correctAnswer){
            answerButton.dataset.correct = currentQuestion.correctAnswer;
        }

        answerButton.addEventListener('click', selectAnswer)
    });

}


function resetState(){
    nextBtn.style.display = 'none';
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild)
    }
}

function selectAnswer (e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === e.target.innerHTML;

    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }else{
        selectBtn.classList.add('incorrect');
    }

    Array.from(answerBox.children).forEach(buttons => {
        if(buttons.dataset.correct === buttons.innerHTML){
            buttons.classList.add('correct');
        }
        buttons.disabled = 'true';
    });
    nextBtn.style.display = 'block'
}

function showScore(){
    resetState();
    questionsBox.innerHTML = `Your Score is ${quizQuestions.length} out of ${score} !`;
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block';

}

function handleNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quizQuestions.length){
        showQuestion()
    }else{
        showScore()
    }
}


nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < quizQuestions.length){
        handleNext()
    }else{
        startQuize()
    }
})


startQuize();
