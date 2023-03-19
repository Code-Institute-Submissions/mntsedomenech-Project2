const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const homeBox = document.querySelector("home-box")
const quizBox = document.querySelector("quiz-box")
const resultBox = document.querySelector("result-box")

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0; 

//Push the questions into QuizArray
function setAvailableQuestions (){
    const totalQuestion = quiz.length;
    for (let i=0; i<totalQuestion; i++)
    availableQuestions.push(quiz[i])
}

//Get new question, get random question
function getNewQuestion (){
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.lenght; 

    const questionIndex = availableQuestions[Math.floor(Math.random() * setAvailableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    const index1= availableQuestions.indexOf(questionIndex);

    availableQuestions.splice(index1,1);

    const optionLen = currentQuestion.options.lenght
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    
    optionContainer.innerHTML = '';
    for(let i=0; i<optionLen; i++){
        const optonIndex = availableOptions[Math.floor(Math.random() + availableOptions.length)];
        const index2 = availableOptions.indexOf(optonIndex);
        availableOptions.splice(index2,1);
        const option = Document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = i;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter++
}

function quizOver(){
    //hide home page 
    quiz-box.classList.add("hide");
    //Show result page
    resultBox.classList.renove("hide");
    quizResult();
  }

  //quiz result appear
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentatge = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentatge").innerHTML = percentatge.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers = " / "= quiz.length;
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0; 
  }

function tryAgain(){
    //hide result page
     resultBox.classList.remove.add("hide");
     //show display container
     quizBox.classList.remove("hide");
     resetQuiz();
     startQuiz();
  }

  function finishGame(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
  }
  

function startQuiz() {
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions ();
    getNewQuestion();
}

window.onload = function(){
    homeBox.querySelector(".total-question").innerHTML = quiz.length;
  }

//get result of attempt question
function getResult(optonElement){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer) {
        element.classList.add ("correct");
        correctAnswers++;
    }
    else{
      element.classList.add ("wrong");

      //mark correct answer when wrong answered has been clicked
      const optionLen = optionContainer.children.lenght;
      for (let i=0; i<optionLen; i++){
        if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
          optionContainer.children[i].classList.add ("correct");
        }
      }
    }
    attempt++;
    unclicklableOptions();
}

//Not allowed to mark response once one response has been selected
function unclicklableOptions(){
    const optionLen = optionContainer.children.lenght;
    for (let i=0; i<optionLen; i++){
      optionContainer.children[i].classList.add("already-responded");
    }
  }

function next() {
    if(questionCounter === quiz.lenght){
        quizOver();
    }
    else {
        getNewQuestion();
    }
}





























//Questions, Options ans answer array

const quiz = [
    {
      question: "What is the tallest mountain on Earth?",
      options: ["Mount Fuji", "Mount Everest", "Aconcagua", "Mountblanc"],
      answer: "0",
    },
    {
      question: "What is the largest commercial aircarft currently in use?",
      options: ["Airbus A380", "Beoing 747", "Boeing 777", "Airbus A330"],
      correct: "0",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Perth", "Melbourne"],
      correct: "1",
    },
    {
      question: "What country has the most time zones in its territory?",
      options: ["Russia", "USA", "France", "Brazil"],
      correct: "2",
    },
    {
      question: "How many countries are member estates of the UE?",
      options: ["27", "49", "32", "15"],
      correct: "0",
    }
  ]