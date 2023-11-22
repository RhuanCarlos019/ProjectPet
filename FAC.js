function toggleAnswer(questionNumber) {
    const answer = document.querySelector(`.faq-section:nth-child(${questionNumber}) .faq-answer`);
    answer.classList.toggle('active');
  }
  