     class Cronometro {
        constructor (){
            // console.log('iniciando cronometro')
            this.segundos = 0
            this.minutos = 0
            this.isCronometroAtivo = false
            // this.cronometro = cronometro;
    }
    atualizaCronometro() {
        console.log('atualizando cronometro')
        if (this.isCronometroAtivo) {
            this.segundos++
            if (this.segundos>=60){
                this.minutos++
                this.segundos=0
            }
            if (this.minutos==60 && this.segundos==0){
                alert("TEMPO ESGOTADO")
            }
            const segundosString = this.segundos <=9 ?`0${this.segundos}` : `${this.segundos}`
            const minutosString = this.minutos <= 9 ?`0${this.minutos}` : `${this.minutos}`
            const cronometro = `${minutosString}:${segundosString}`
            document.getElementById('cronometro').textContent= cronometro
            console.log("tempo", cronometro)
        }
    }
    pararCronometro(){
        this.isCronometroAtivo=false
    }
    iniciaCronometro(){
        this.isCronometroAtivo=true
        console.log('iniciaCronometro')
    }
    // isMenorTrinta() {
    //     return this.minutos <= 30
    // }
    // isDeTrintaAQuarenta() {
    //     return this.minutos <=40
    // }
    // isDeQuarentaACinquenta() {
    //     return this.minutos <=50
    // }
}