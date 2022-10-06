//*******CRONOMETRO********
const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);
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
  sorteiaCardDaVez();
});
function permitirDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

document.addEventListener("drop", event => {
  // impedir a ação padrão (permitir dropagem para elementos dragaveis)
  event.preventDefault();
  console.log("id do target", event.target.id)
  console.log("gabarito da dropagem", gabaritoDeDropagem[event.target.id])
  console.log("id do dragged", dragged.id)
  console.log("teste do if", dragged.id == gabaritoDeDropagem[event.target.id])
  //mover o elemento arrastado para o destino de soltar selecionado
  // if (event.target.className == "dropzone") {
  if (dragged.id == gabaritoDeDropagem[event.target.id]) {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    event.target.style.opacity = "0"
    dragged.style.opacity = "0";
    // if (Q26 == "eclesiastes") {
    //   this.dragable = false;
    // }
  }
  else {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});

// const Q1 = id = "lembra-te"
// const Q2 = id = "tambem"
// const Q3 = id = "doteu"
// const Q25 = id = "contentamento"
// const Q26 = id = "eclesiastes"

