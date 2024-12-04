function startQuiz() {
    const quizCode = document.getElementById('quizCode').value;
  
    if (quizCode) {
      alert('Quiz started with code: ' + quizCode);
      // Redirect to quiz hosting page (not implemented yet)
    } else {
      alert('Please enter a quiz code.');
    }
  }
  
  function prepareNewQuiz() {
    window.location.href = 'newQuiz.html'; // Redirect to quiz preparation page
  }
  