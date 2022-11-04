class AreaDeEspera {
    constructor(id) {
        this.id=id
        this.elemento=document.getElementById(this.id)
        this.disponivel=true
    }
    recebeCard(cardDropado){
        this.elemento.appendChild(cardDropado);
        cardDropado.style.display="block"
    }
}