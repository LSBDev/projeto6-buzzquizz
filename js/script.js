let objetoQuizz = [];

exibirQuizz();

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


function exibirQuizz(){

const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", objetoQuizz)
promise.then(exibiuQuizz);
promise.catch(erroExibirQuizz);

}

function exibiuQuizz(resposta){

const elementoQuizzes=document.getElementById("quizzes");
console.log("deu certo");
let qntQuizz = resposta.data.length;
console.log(resposta.data);
objetoQuizz = resposta.data;
console.log(objetoQuizz)

for (let j=0;j<6;j++){

    elementoQuizzes.innerHTML+=
    `<div class="quizzes" id="${resposta.data[j].id}">
        <img class="image-quizz" src="${resposta.data[j].image}">
        <h3 class="quizzes__title">${resposta.data[j].title}</h3>
        </div>
    </div>`
}
}



function erroExibirQuizz(erro){



}