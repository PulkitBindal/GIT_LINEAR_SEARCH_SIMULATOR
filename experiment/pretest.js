/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What is the worst case for linear search?",  ///// Write the question inside double quotes
      answers: {
        a: "O(nlogn)",                  ///// Write the option 1 inside double quotes
        b: "O(logn)",                  ///// Write the option 2 inside double quotes
        c: "O(n)",                  ///// Write the option 3 inside double quotes
        d: "O(1)"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "What is the worst case and best case complexity of ordered linear search?",  ///// Write the question inside double quotes
      answers: {
        a: "Worst-case performance O(1) & Best-case performance O(n)",                  ///// Write the option 1 inside double quotes
        b: "Worst-case performance O(n) & Best-case performance O(1)",                  ///// Write the option 2 inside double quotes
        c: "Worst-case performance O(n) & Best-case performance O(n)",                  ///// Write the option 3 inside double quotes
        d: "Worst-case performance O(1) & Best-case performance O(1)"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

     {
      question: "What do you think this may be a disadvantage to linear search?",
      answers: {
        a: "when a key element matches the last element",
        b: "when a key element matches the first element",
        c: "when a key element matches the middle element"
      },
      correctAnswer: "a"
    },

    {
      question: "What do you think this may be a advantage to linear search?",
      answers: {
        a: "Not affected by insertions and deletions.",
        b: "Perform fast searches of small to medium lists.",
        c: "The list does not need to sorted.",
        d: "All of the above."
      },
      correctAnswer: "d"
    },
    
    {
      question: "What the linear search algorithm will return after completing the iteration (If element founds)?",
      answers: {
        a: "Searched Element",
        b: "Index Of the Element",
        c: "An Array",
        d: "Length of the array"
      },
      correctAnswer: "b"
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
