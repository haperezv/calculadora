const  numeros = document.querySelectorAll('.numero')
const  valorActual = document.querySelector('#valor-actual')
const valoAnterior = document.querySelector("#valor-anterior")

numeros.forEach(function(numero){
    numero.addEventListener("click", claculadora)
});

function claculadora(){
    let numText = this.textContent
    if (numText == "C") {
        valoAnterior.textContent = " "
        valorActual.textContent = "0"
    }else if (numText == "DEL") {
        valoAnterior.textContent = valoAnterior.textContent.substring(0,valoAnterior.textContent.length-1)
    }else if (numText == "=") {
        valorActual.textContent = eval(valoAnterior.textContent)
    }else{
        valoAnterior.textContent += numText
    }   
    
}


