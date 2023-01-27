

function changeToQuizzHub() {
  document.querySelector('.hub__quizz').classList.remove('hidden');
  document.querySelector('.create').classList.add('hidden');
  document.querySelector('.quizz').classList.add('hidden');
}
function changeToActiveQuizz() {
  document.querySelector('.hub__quizz').classList.add('hidden');
  document.querySelector('.create').classList.add('hidden');
  document.querySelector('.quizz').classList.remove('hidden');
} 
//FUNCAO QUE LEVA PARA A PÁGINA DE CRIACAO DO QUIZZ.
function changeTocreateQuizzSection() {
  document.querySelector('.hub__quizz').classList.add('hidden');
  document.querySelector('.create').classList.remove('hidden');
  document.querySelector('.quizz').classList.add('hidden');
}

