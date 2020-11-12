/*let=admision*/

class CajaColores {
    constructor(color, texto,edad, resultado) {
        this.color = color
        this.texto = texto
        this.edad = edad
        this.resultado = resultado
        this.mensaje1 = "No puedes Entrar"
        this.mensajes2 = "Puedes Entrar"
    }
    ejecutar() {
        this.resultado.style.backgroundColor= this.color.value
        if (this.edad.value < 18)
            this.resultado.innhtml = this.mensaje1.value
        else {
            this.resultado.innhtml = this.mensajes2.value
        }

        /* this.nombre.innHtml =this.texto*/
    }

}

function Main() {
    admisión = new CajaColores(
        document.getElementById('color1'),
        document.getElementById('nombre'),
        document.getElementById('edad'),
        document.getElementById('admision')
        )

    document.getElementById ('buttonIngresar').addEventListener('click',NuevaFuntion)
    }

    function NuevaFuntion (){
        admisión.ejecutar()
    }


window.onload=Main