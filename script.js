document.getElementById('submit').addEventListener('click', function() {
    const correctAnswers = ['c', 'd'];
    const questions = document.querySelectorAll('.question');
    let numCorrect = 0;

    questions.forEach((question, index) => 
    {
      const selectedAnswer = question.querySelector(`input[name="${index}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === correctAnswers[index]) {
        numCorrect++;
        question.style.color = 'lightgreen';
      } else {
        question.style.color = 'red';
      }
    });

    document.getElementById('results').innerHTML = `${numCorrect} out of ${questions.length}`;
});