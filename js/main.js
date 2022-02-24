var texto1 =['Menú','Información'];
var cuadroTexto=document.getElementById('Texto');

function terminos_cambio(checkbox){
    //Si está marcada ejecuta la condición verdadera.
    if(checkbox.checked){
        //alert('La casilla ha sido marcada!');
        cuadroTexto.innerText = texto1[1];
    }
    //Si se ha desmarcado se ejecuta el siguiente mensaje.
    else{
        //alert('La casilla ha sido desmarcada!');
        cuadroTexto.innerText = texto1[0];
    }
}