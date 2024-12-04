function joinQuiz() {
  const quizCode = document.getElementById('quizCode').value;
  const nickname = document.getElementById('nickname').value;

  if (quizCode && nickname) {
    localStorage.setItem('nickname', nickname); // Store nickname in localStorage
    alert('Joining quiz...');
    window.location.href = '../waitingPage/waiting.html'; // Redirect to waiting page
  } else {
    alert('Please enter both a code and a nickname.');
  }
}
