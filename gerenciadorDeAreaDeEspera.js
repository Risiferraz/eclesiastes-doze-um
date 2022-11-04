class GerenciadorDeAreaDeEspera {
    constructor(){
        this.listaDeAreasDeEspera=[
            new AreaDeEspera("P1"),
            new AreaDeEspera("P2"),
            new AreaDeEspera("P3"),
            new AreaDeEspera("P4"),
        ]
    }
incluiCardNaAreaDeEspera(cardDropado){
    if (cardDropado.id == "lembra-te") {
        const areaDeEsperaAleatoria = document.getElementById("P5")
        areaDeEsperaAleatoria.appendChild(cardDropado);
        cardDropado.style.display="block"
      }
      else {
        const areaDeEsperaAleatoria = this.pegaAreaDeEsperaAleatoria()
        areaDeEsperaAleatoria.appendChild(cardDropado);
        cardDropado.style.display="block"
    }
}
pegaAreaDeEsperaAleatoria(){
    const total = this.listaDeAreasDeEspera.length
    const posicaoSorteada = Math.floor(Math.random() * total)
    return this.listaDeAreasDeEspera[posicaoSorteada].elemento
  }
}