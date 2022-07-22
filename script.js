//*******CRONOMETRO********
const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);
//*******FUNÇÕES QUE ACONTECEM AO INICIAR*******/
function passar() {
  document.getElementById("capa").style.display = "none"
  document.getElementById("tela-inicial").style.display = "block"
}
//*******FUNÇÕES QUE ACONTECEM AO CLICAR NO "START"*******/
function clicar() {
  document.getElementById("tela-inicial").style.display = "none"
  document.getElementById("jogo-em-andamento").style.display = "grid"
  cronometro.iniciaCronometro()
  card.embaralhaCards()
}
//*******FUNÇÕES QUE ACONTECEM NO DRAG AND DROP"*******/
let dragged = null;

document.addEventListener("dragstart", event => {
  dragged = event.target;
  document.getElementById("lembra-te").style.transform = "rotate(270deg)";
  document.getElementById("neles").style.transform = "rotate(270deg)";
  document.getElementById("dizer").style.transform = "rotate(270deg)";
  document.getElementById("dias").style.transform = "rotate(270deg)";
  document.getElementById("antes").style.transform = "rotate(270deg)";
});

document.addEventListener("dragover", event => {
  event.preventDefault();
});

document.addEventListener("drop", event => {
  // impedir a ação padrão (abrir como link para alguns elementos)
  event.preventDefault();
  //mover o elemento arrastado para o destino de soltar selecionado
  if (event.target.className == "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged); 
    if (Q26=="eclesiastes") {
      this.dragable=false;
    }
  }
});

const Q1 = id="lembra-te"
const Q2 = id="tambem"
const Q3 = id="doteu"
const Q25 = id="contentamento"
const Q26 = id= "eclesiastes"

