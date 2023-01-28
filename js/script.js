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
//FUNCAO PARA CRIAR PERGUNTAS TELA 3
let qntQuestions;
function changeToCreateQuestions() {
  qntQuestions = document.querySelector('#qnt-perguntas-quizz').value;
  document.querySelector('.create__quizz').classList.add('hidden');
  document.querySelector('.creating__quizz').classList.remove('hidden');
  document.querySelector('.create__levels').classList.add('hidden');
  fillPerguntas();
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
  console.log(qntQuestions);
  const perguntas = document.querySelector("#perguntas");
  console.log(perguntas);
  for(let i = 0; i < qntQuestions; i++) {
    perguntas.innerHTML += `
      <div class="questions" onclick="togglePergunta(this)">
        <h1 class="start__title">Pergunta ${i +1}</h1>
        <ion-icon name="create-outline"></ion-icon>
      </div>
      <div class="start__question hidden">
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
      </div>
      `;
  }
}

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


axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes').then((resonse)=>{console.log(resonse.data)});

const postQuizz = {
  title: document.querySelector('#title-quizz').value,
  image: document.querySelector('#image-quizz').value
}





const arrayQuestions = [];



// for(let i = 0; i < qntQuestions; i++) {
//   let objQuestions = {};
//   objQuestions.title = 

  
// }



const quizz = `{ //OBJETO
	title: "Título do quizz", //STRING
	image: "https://http.cat/411.jpg", //STRING
	questions: [ //ARRAY DE OBJETOS (JSON)
		{ //OBJETO
			title: "Título da pergunta 1", //STRING
			color: "#123456", //STRING
			answers: [ //ARRAY DE OBJETOS (JSON)
				{
					text: "Texto da resposta 1",//STRING
					image: "https://http.cat/411.jpg",//STRING
					isCorrectAnswer: true //BOOLEAN
				},
				{
					text: "Texto da resposta 2",//STRING
					image: "https://http.cat/412.jpg", //STRING
					isCorrectAnswer: false //BOOLEAN
				}
			]
		},
		{ //OBJETO
			title: "Título da pergunta 2", //STRING
			color: "#123456", //STRING
			answers: [ //ARRAY DE OBJETOS (JSON)
				{
					text: "Texto da resposta 1", //STRING
					image: "https://http.cat/411.jpg",//STRING
					isCorrectAnswer: true //BOOLEAN
				},
				{
					text: "Texto da resposta 2", //STRING
					image: "https://http.cat/412.jpg", //STRING
					isCorrectAnswer: false //BOOLEAN
				}
			]
		},
		{
			title: "Título da pergunta 3", //STRING
			color: "#123456", //STRING
			answers: [
				{
					text: "Texto da resposta 1", //STRING
					image: "https://http.cat/411.jpg", //STRING
					isCorrectAnswer: true //BOOLEAN
				},
				{
					text: "Texto da resposta 2", //STRING
					image: "https://http.cat/412.jpg", //STRING
					isCorrectAnswer: false //BOOLEAN
				}
			]
		}
	],
	levels: [ //ARRAY DE OBJETOS (JSON)
		{
			title: "Título do nível 1", //STRING
			image: "https://http.cat/411.jpg", //STRING
			text: "Descrição do nível 1", //STRING
			minValue: 0
		},
		{
			title: "Título do nível 2", //STRING
			image: "https://http.cat/412.jpg", //STRING
			text: "Descrição do nível 2", //STRING
			minValue: 50
		}
	]
}`

// axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizz)


// function postQuizz() {
//   const criacaoPergunta = document.querySelectorAll('start__data').value;


// }



