class BotaoDispenserCards {
    constructor(id) {
        this.id = id
        this.elemento = document.getElementById(id)
        this.habilitado = false
    }
    habilitaBotao() {
        this.elemento.style.opacity = "1"
        this.habilitado = true
    }
    bloqueiaBotao() {
        this.elemento.style.opacity = "0.2"
        this.habilitado = false
    }
}
