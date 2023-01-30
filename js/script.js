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
let qntLevels;
function changeToCreateLevels() {
	qntLevels = document.querySelector('#qnt-niveis-quizz').value;
	console.log(qntLevels);
  document.querySelector('.create__quizz').classList.add('hidden');
  document.querySelector('.creating__quizz').classList.add('hidden');
  document.querySelector('.create__levels').classList.remove('hidden');
	fillNiveis();
	criandoQuizz();
}
//TROCA DAS PERGUNTAS.
function togglePergunta(element) {
  element.classList.add('hidden');
  element.nextElementSibling.classList.remove('hidden');
}
// PREENCHENDO "LISTA" DE PERGUNTAS.
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
				<div class='questionInfo'>
					<input type="text" placeholder="Texto da pergunta">
					<input type="text" placeholder="Cor de fundo da pergunta">
				</div>
        <label for="">Resposta Correta</label>
				<div class='answers'>
					<div class='answerInput'>
						<input type="text" placeholder="Resposta correta">
						<input type="text" placeholder="URL da imagem">
					</div>
					<label for="">Respostas incorretas</label>
					<div class='answerInput'>
						<input type="text" placeholder="Resposta incorreta 1">
						<input type="text" placeholder="URL da imagem 1">
					</div>
					<br>
					<div class='answerInput'>
						<input type="text" placeholder="Resposta incorreta 2">
						<input type="text" placeholder="URL da imagem 2">
					</div>
					<br>
					<div class='answerInput'>
						<input type="text" placeholder="Resposta incorreta 3">
						<input type="text" placeholder="URL da imagem 3">
					</div>
				</div>
      </div>
      `;
  }
}
//TROCA DOS NÍVEIS.
function toggleNivel(element) {
  element.classList.add('hidden');
  element.nextElementSibling.classList.remove('hidden');
}
//CRIANDO OS NÍVEIS
function fillNiveis() {
  const niveis = document.querySelector('#niveis');
	console.log(niveis);
  for(let i = 0; i < qntLevels; i++) {
    niveis.innerHTML += `
			<div class="questions" onclick="toggleNivel(this)">
				<h1 class="start__title">Nível ${i + 1}</h1>
				<ion-icon name="create-outline"></ion-icon>
      </div>
			<div class="levelInfo hidden">
				<label for="">Nível ${i + 1}</label>
				<input type="text" placeholder="Título do nível">
				<input type="text" placeholder="% de acerto mínima">
				<input type="text" placeholder="URL da imagem do nível">
				<input type="text" placeholder="Descrição do nível">
			</div>
    `;
  }
}
fillNiveis();


axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes').then((resonse)=>{console.log(resonse.data)});


function criandoQuizz() {
	const postQuizz = {
		title: document.querySelector('#title-quizz').value,
		image: document.querySelector('#image-quizz').value
	}	
	//CRIANDO ARRAY DE QUESTÕES VAZIO!
	const arrayQuestions = [];
	let template = document.querySelectorAll('.start__question');
	//FOR PARA PREENCHER O ARRAY DE QUESTÕES
	for(let i = 0; i < qntQuestions; i++) {
		//CRIANDO OBJETO VAZIO
		let objQuestion = {};
		//PREENCHENDO OS ATRIBUTOS DO OBJETO
		objQuestion.title = template[i].getElementsByClassName('questionInfo')[0].children[0].value;
		objQuestion.color = template[i].getElementsByClassName('questionInfo')[0].children[1].value;
		//CRIANDO UM ARRAY DE RESPOSTAS VAZIO
		let arrayAnswers = [];
		let answers = template[i].getElementsByClassName('answers')[0].getElementsByClassName('answerInput');
		for(let j = 0; j < answers.length; j++) {
			//CRIANDO UM OBJETO DE RESPOSTAS VAZIO
			let objAnswer = {};
			objAnswer.text = answers[j].children[0].value;
			objAnswer.image = answers[j].children[1].value;
			if(j == 0) {
				objAnswer.isCorrectAnswer = true;
			}else {
				objAnswer.isCorrectAnswer = false;
			}
			arrayAnswers.push(objAnswer);
		}
		//PREENCHENDO O OBJETO DE RESPOSTAS
		objQuestion.answers = arrayAnswers;
		arrayQuestions.push(objQuestion);
	}
	postQuizz.questions = arrayQuestions;
}

//CRIAR PARA OS NÍVEIS PREENCHER O POSTQUIZZ E FAZER O POST.



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






