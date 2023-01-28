//FUNCAO QUE LEVA PRA PÁGINA INICIAL (DO HUB DE QUIZZES).
function changeToQuizzHub() {
  document.querySelector('.hub__quizz').classList.remove('hidden');
  document.querySelector('.create').classList.add('hidden');
  document.querySelector('.quizz').classList.add('hidden');
}
//FUNCAO QUE LEVA PARA O QUIZZ ATIVO.
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
//FUNCAO PARA CRIAR PERUGUNTAS TELA 3
function changeToCreateQuestions() {
  document.querySelector('.create__quizz').classList.add('hidden');
  document.querySelector('.creating__quizz').classList.remove('hidden');
  document.querySelector('.create__levels').classList.add('hidden');
}
//FUNCAO PARA CRIAR NÍVEIS TELA 3
function changeToCreateLevels() {
  document.querySelector('.create__quizz').classList.add('hidden');
  document.querySelector('.creating__quizz').classList.add('hidden');
  document.querySelector('.create__levels').classList.remove('hidden');
}
//TROCA DAS PERGUNTAS.
function togglePergunta(element) {
  element.classList.add('hidden');
  element.nextElementSibling.classList.remove('hidden');
}
function fillPerguntas() {
  const perguntas = document.querySelectorAll(".start__question");
  for(let i = 0; i <perguntas.length; i++) {
    perguntas[i].innerHTML = `
      <label for="">Pergunta ${i + 1}</label>
      <input type="text" placeholder="Texto da pergunta">
      <input type="text" placeholder="Cor de fundo da pergunta">
      <label for="">Resposta Correta</label>
      <input type="text" placeholder="Resposta correta">
      <input type="text" placeholder="URL da imagem">
      <label for="">Respostas incorretas</label>
      <input type="text" placeholder="Resposta incorreta 1">
      <input type="text" placeholder="URL da imagem 1">
      <br>
      <input type="text" placeholder="Resposta incorreta 2">
      <input type="text" placeholder="URL da imagem 2">
      <br>
      <input type="text" placeholder="Resposta incorreta 3">
      <input type="text" placeholder="URL da imagem 3">
      `;
  }
}
fillPerguntas();
//TROCA DOS NÍVEIS.
function toggleNivel(element) {
  element.classList.add('hidden');
  element.nextElementSibling.classList.remove('hidden');
}
function fillNiveis() {
  const niveis = document.querySelectorAll('.start__levels');
  for(let i = 0; i <niveis.length; i++) {
    niveis[i].innerHTML = `
    <label for="">Nível ${i + 1}</label>
    <input type="text" placeholder="Título do nível">
    <input type="text" placeholder="% de acerto mínima">
    <input type="text" placeholder="URL da imagem do nível">
    <input type="text" placeholder="Descrição do nível">
    `;
  }
}
fillNiveis();




// axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes').then((resonse)=>{console.log(resonse.data)});


// function postQuizz() {
//   const criacaoPergunta = document.querySelectorAll('start__data').value;


// }



