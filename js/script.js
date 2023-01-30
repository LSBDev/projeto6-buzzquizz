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

let postQuizz;
function criandoQuizz() {
	postQuizz = {};
	postQuizz = {
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
		//CRIANDO UM ARRAY DE RESPOSTAS VAZIO
		let arrayAnswers = [];
		let answers = template[i].querySelector('.answers').querySelectorAll('.answerInput');
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
		objQuestion.title = template[i].querySelector('.questionInfo').children[0].value;
		objQuestion.color = template[i].querySelector('.questionInfo').children[1].value;
		objQuestion.answers = arrayAnswers;
		console.log(objQuestion);
		arrayQuestions.push(objQuestion);
	}
	postQuizz.questions = arrayQuestions;
}
//CRIAR PARA OS NÍVEIS PREENCHER O POSTQUIZZ E FAZER O POST.
function criandoNiveis() {
	//CRIAR O ARRAY DE OBJETOS DO NÍVEIS.
	let arrayLevels = [];
	let niveisList = document.querySelectorAll(".levelInfo");
	for(let i = 0; i < niveisList.length; i++) {
		let objLevel = {};
		let inputList = niveisList[i].querySelectorAll('input');
		objLevel.title = inputList[0].value;
		objLevel.image = inputList[2].value;
		objLevel.text = inputList[3].value;
		objLevel.minValue = parseInt(inputList[1].value);		
		arrayLevels.push(objLevel);
	}
	postQuizz.levels = arrayLevels;
	console.log(arrayLevels);
}
//CRIANDO O POST DO QUIZZ
function createQuizz() {
	// let postQuizzString = JSON.stringify(postQuizz);
	axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', postQuizz).then((sucesso)=>{
		console.log(sucesso.data);
	}), ()=>{console.log('Deu Ruim')
};
	changeToQuizzHub();
	criandoNiveis();
}
function moveToLevels() {
	changeToCreateLevels();
	criandoQuizz();
}


//PREENCHENDO O OBJETO NO HARDCODE PRA VALIDAR AS ENTRADAS PRA API.
// const quizz = { 
// 	title: "Título do quizz: deve ter no mínimo 20", 
// 	image: "https://http.cat/411.jpg", 
// 	questions: [ 
// 		{ 
// 			title: "Texto da pergunta: no mínimo 20 caracteres.", 
// 			color: "#123456", 
// 			answers: [ 
// 				{
// 					text: "Texto da pergunta: no mínimo 20 caracteres.",
// 					image: "https://http.cat/411.jpg",
// 					isCorrectAnswer: true 
// 				},
// 				{
// 					text: "Texto da pergunta: no mínimo 20 caracteres.",
// 					image: "https://http.cat/412.jpg", 
// 					isCorrectAnswer: false 
// 				}
// 			]
// 		},
// 		{ 
// 			title: "Texto da pergunta: no mínimo 20 caracteres.", 
// 			color: "#123456", 
// 			answers: [ 
// 				{
// 					text: "Texto da pergunta: no mínimo 20 caracteres.", 
// 					image: "https://http.cat/411.jpg",
// 					isCorrectAnswer: true 
// 				},
// 				{
// 					text: "Texto da pergunta: no mínimo 20 caracteres.", 
// 					image: "https://http.cat/412.jpg", 
// 					isCorrectAnswer: false 
// 				}
// 			]
// 		},
// 		{
// 			title: "Texto da pergunta: no mínimo 20 caracteres. 3", 
// 			color: "#123456", 
// 			answers: [
// 				{
// 					text: "Texto da pergunta: no mínimo 20 caracteres.1", 
// 					image: "https://http.cat/411.jpg", 
// 					isCorrectAnswer: true 
// 				},
// 				{
// 					text: "Texto da pergunta: no mínimo 20 caracteres.2", 
// 					image: "https://http.cat/412.jpg", 
// 					isCorrectAnswer: false 
// 				}
// 			]
// 		}
// 	],
// 	levels: [ 
// 		{
// 			title: "Título do nível: mínimo de 10 caracteres.", 
// 			image: "https://http.cat/411.jpg", 
// 			text: "Descrição do nível Descrição do nível: mínimo de 30 caracteres.", 
// 			minValue: 0
// 		},
// 		{
// 			title: "Título do nível: mínimo de 10 caracteres.", 
// 			image: "https://http.cat/412.jpg", 
// 			text: "Descrição do nível Descrição do nível: mínimo de 30 caracteres.", 
// 			minValue: 50
// 		}
// 	]
// }






