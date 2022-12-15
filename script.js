const quantidadeDeCards = 26
//*******CRONOMETRO********
const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);
//********LISTA DA ÁREA DE ESPERA******** */
const gerenciadorDeAreaDeEspera = new GerenciadorDeAreaDeEspera()
let quantidadeDeCardsEncaixadosCorretamente = 0
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
  if (listaDeIdsParaRotacionar.includes(dragged.id)) {//Se a lista de ids inclui o id do card em questão (dragged)
    dragged.style.transform = rotateCard;//a constante 'dragged' faz referência ao objeto que enviou o evento (linha 39) e aplica o estilo transform que recebe a contante 'rotate 90"
  }
});

document.addEventListener("dragover", event => {
  event.preventDefault();
});

document.getElementById('dispensercards').addEventListener("click", event => {
  event.preventDefault();
  verificaSeAcabouOsCards();
  if (gerenciadorDeAreaDeEspera.verificaSeTemAreaDisponivel()) {
    sorteiaCardDaVez();
  }
  else {
    alert("LIBERA AREA DE ESPERA")
  }
});

function verificaFimDeJogo() {
    if (quantidadeDeCardsEncaixadosCorretamente == quantidadeDeCards){
      alert("PARABENS VOCÊ GANHOU!")
    }
}
function verificaSeAcabouOsCards() {
  if (listaDeNumerosAleatoriosJaSorteados.length == quantidadeDeCards){
    alert("ACABARAM OS CARDS!")
  }
}
document.addEventListener("drop", event => {
  // impedir a ação padrão (default) e assim permitir dropagem para elementos dragaveis)
  event.preventDefault();
  //mover o elemento arrastado para o destino de soltar selecionado
  if (gerenciadorDeAreaDeEspera.verificaSeCardVeioDaAreaDeEspera(dragged.id)) {// se o gerenciador... verificar que o card veio da 'área de espera' neste caso apareça no console 'VEIO'
    gerenciadorDeAreaDeEspera.removeCardDaAreaDeEspera(dragged.id)
  }

  //*******FUNÇÕES QUE ACONTECEM NO DROP *******/

  if (dragged.id == gabaritoDeDropagem[event.target.id]) {//se o elemento arrastado corresponder (seu id) a algum constante do gabarito de dropagem
    dragged.parentNode.removeChild(dragged);
    event.target.style.opacity = "0"
    dragged.style.opacity = "1";
    quantidadeDeCardsEncaixadosCorretamente++
    console.log ('Quantidade de cards corretos', quantidadeDeCardsEncaixadosCorretamente)
    verificaFimDeJogo()
  }
  else {
    dragged.style.display = "none"
    setTimeout(() => gerenciadorDeAreaDeEspera.incluiCardNaAreaDeEspera(dragged), 200)
    // console.log ('Não está correto')
  }
});
// realizaAcoesAoDropar(){
//   this.verificaSeJogoFoiFinalizado()
// }
// verificaSeJogoFoiFinalizado(){
//   if (this.isJogoFinalizado()) {
//     // alert('JOGO FINALIZADO');
//     document.getElementById("jogo-finalizado").style.display = "block"
//     document.getElementById("game-over").style.display = "block"
//     document.getElementById("jogo-em-andamento").style.display = "none"
//     this.cronometro.pararCronometro()
//   }
// }

