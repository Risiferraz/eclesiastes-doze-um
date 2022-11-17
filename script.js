//*******CRONOMETRO********
const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);
//********LISTA DA ÁREA DE ESPERA******** */
const gerenciadorDeAreaDeEspera = new GerenciadorDeAreaDeEspera()

//******* FUNÇÕES QUE ACONTECEM AO INICIAR *******/
function passar() {
  document.getElementById("capa").style.display = "none"
  document.getElementById("tela-inicial").style.display = "block"
}
const listaDeCards = document.getElementsByClassName('card');
const listaDeCardsNaoSorteados = Array.from(listaDeCards)
const listaDeNumerosAleatoriosJaSorteados = []

//******* FUNÇÕES QUE ACONTECEM AO CLICAR NO "START" *******/
function clicar() {
  document.getElementById("tela-inicial").style.display = "none"
  document.getElementById("jogo-em-andamento").style.display = "grid"
  cronometro.iniciaCronometro()
  sorteiaCardDaVez()
}
function sorteiaCardDaVez() {
  const numeroAleatorio = Math.floor(Math.random() * listaDeCardsNaoSorteados.length)
  if (listaDeNumerosAleatoriosJaSorteados.includes(numeroAleatorio)) {
    sorteiaCardDaVez()
  }
  else {
    listaDeCardsNaoSorteados[numeroAleatorio].style.display = "inline";
    listaDeNumerosAleatoriosJaSorteados.push(numeroAleatorio);
  }
}
//*******FUNÇÕES QUE ACONTECEM NO DRAG AND DROP *******/
let dragged = null;

document.addEventListener("dragend", event => {
  dragged = event.target;
  // sorteiaCardDaVez()
});
const rotateCard = "rotate(270deg)";
const listaDeIdsParaRotacionar = [
  "lembra-te", "neles", "dizer", "antes", "dias"
]
document.addEventListener("dragstart", event => {
  dragged = event.target;
  if(listaDeIdsParaRotacionar.includes(dragged.id)){
    dragged.style.transform = rotateCard;
  }
});

document.addEventListener("dragover", event => {
  event.preventDefault();
});

document.getElementById('dispensercards').addEventListener("click", event => {
  event.preventDefault();
  if (gerenciadorDeAreaDeEspera.verificaSeTemAreaDisponivel()) {
    sorteiaCardDaVez();
  }
  else {
    alert ("LIBERA AREA DE ESPERA")
  }
});

document.addEventListener("drop", event => {
  // impedir a ação padrão (default) e assim permitir dropagem para elementos dragaveis)
  event.preventDefault();
  console.log("id do target", event.target.id)
  console.log("gabarito da dropagem", gabaritoDeDropagem[event.target.id])
  console.log("id do dragged", dragged.id)
  console.log("teste do if", dragged.id == gabaritoDeDropagem[event.target.id])
  //mover o elemento arrastado para o destino de soltar selecionado

  //*******FUNÇÕES QUE ACONTECEM NO DROP *******/
  // const newclasse = document.getElementsByClassName("card");!!!!!!!!!!!!!!!!!

  if (dragged.id == gabaritoDeDropagem[event.target.id]) {
    dragged.parentNode.removeChild(dragged);
    event.target.style.opacity = "0"
    dragged.style.opacity = "1";
    // console.log ('Está correto')
  }
  else {
    dragged.style.display="none"
    setTimeout(()=> gerenciadorDeAreaDeEspera.incluiCardNaAreaDeEspera(dragged),200)
    // newclasse.classList.add("card-drop");!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // console.log ('Não está correto')
  }
});



