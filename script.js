const questions = [
    {
      question: "Qual foi o local onde tivemos nosso primeiro beijo?",
      options: {
        a: "Área de convivencia do summer",
        b: "Jardim do Citta de Roma",
        c: "Meu quarto no summer"
      },
      correctAnswer: "b"
    },
    {
      question: "Qual é o nome da nossa hamburgueria favorita?",
      options: {
        a: "Raiz Burguer",
        b: "Brutus",
        c: "Red"
      },
      correctAnswer: "a"
    },
    {
      question: "Qual o primeiro filme que assistimos juntos?",
      options: {
        a: "Garota Exemplar",
        b: "A mulher na janela",
        c: "Ricos de amor"
      },
      correctAnswer: "c"
    },
    {
      question: "Qual é o apelido carinhoso que costumamos usar um para o outro?",
      options: {
        a: "Amor",
        b: "Os mô",
        c: "Dengo"
      },
      correctAnswer: "c"
    },
    {
      question: "Qual foi o lugar mais inusitado onde já nos beijamos?",
      options: {
        a: "Casa dos seus pais",
        b: "Em um elevador",
        c: "Rave"
      },
      correctAnswer: "b"
    }
  ];
  
  let currentQuestionIndex = 0;
  const questionElement = document.getElementById('question');
  const optionsElement = document.querySelector('.options');
  const resultElement = document.getElementById('result');
  const finishMessage = document.getElementById('finish-message');
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    for (const option in currentQuestion.options) {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${currentQuestion.options[option]}`;
      optionsElement.appendChild(label);
    }
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      alert("Por favor, selecione uma resposta.");
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer.value === currentQuestion.correctAnswer) {
      resultElement.textContent = "Resposta correta!";
    } else {
      resultElement.textContent = "Resposta incorreta. Tente novamente!";
      return;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      finishMessage.style.display = "block";
      questionElement.style.display = "none";
      optionsElement.style.display = "none";
      resultElement.textContent = "";
    }
  }
  
  // Início do jogo
  loadQuestion();
  