//*******CRONOMETRO********
const cronometro =new Cronometro()
    setInterval(() => {
    cronometro.atualizaCronometro()
    }, 1000);
    //*******FUNÇÕES QUE ACONTECEM AO CLICAR NO "START"*******/
    function clicar() {
      document.getElementById("tela-inicial").style.display = "none"
      document.getElementById("jogo-em-andamento").style.display = "block"
      cronometro.iniciaCronometro()
    }
//*******FUNÇÕES QUE ACONTECEM AO DRAGAR*******/
const cards = document.querySelectorAll('.card')//Chamar (procurar) todos os elementos que tem a classe cards do HTML
const dropzones = document.getElementsByClassName('container')

cards.forEach(card => {//para cada um dos cards achados no HTML crie um "card"
    card.addEventListener('dragstart', dragStart) // adicione um evento que será dispara assim que o usuário começa a arrastar um item - É aqui que podemos definir os (drag data) dados de arrasto - dragstart é um EVENTO', e dragStart é uma função
    // card.addEventListener('drag', Drag) // Dispara quando um item "dragável" (elemento ou texto) é arrastado
    // card.addEventListener('dragend', dragEnd) // É acionado quando uma operação "DRAG" termina (como soltar o botão do mouse ou apertar a tecla Esc) - Após terminado o evento "dragend", a operação arrastar e soltar está completa
})

function dragStart() {
  dropzones.forEach(dropzone => dropzone.classList.add('highlight')) //(39:27/42:21)
  //"this" refere-se ao "card" => vou adicionar ao elemento "card" uma classe que vou chamar de "highlight"
  // this.classList.add('is-dragging')//(45:35/47:23/52:03)
}

// dropzones.forEach(dropzone => {
//   dropzone.addEventListener('dragenter', dragEnter) // Dispara quando um item arrastado entra em uma div (alvo de queda) válido (dropável)
//   dropzone.addEventListener('dragover', dragOver) // Dispara quando um item arrastado está sendo arrastado sobre um alvo de queda válido, repetidamente enquanto o item arrastado está dentro da zona de queda
//   dropzone.addEventListener('dragleave', dragLeave) // Dispara quando um item é arrastado e colocado na caixa correta (?) ou quando o mouse sai da área dropável (?)
//   dropzone.addEventListener('drop', drop) // Dispara quando um item é arrastado e solto (colocado) num destino válido
// })