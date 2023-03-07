//Funcion del boton para imprimir el CV

document.querySelectorAll('.bt-imprimir').forEach(function(element){
    element.addEventListener('click',function(){
        print();
    });
});