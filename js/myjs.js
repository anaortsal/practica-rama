/* Realizar una funcion que nos permita realizar las cuatro operaciones aritmeticas, 
es decir nos permita sumar, restar, dividir y multiplicar debe recibir 3 parametros y deben ser valores
(a,b)  y uno el nombre de la operacion en minusculas.
si el parametro de la operacion no es valido que mande un error personalizado a la consola.*/

function ejercicioUno(a=0, b=0, operacion = "suma"){
    switch(ejercicioUno){
        case "suma":
            return console.log(a + b);
            case "resta":
            return console.log(a - b);
            case "multiplicacion":
            return console.log(a * b);
            case "division":
            return console.log(a / b);
            default:
                console.error('La operacion $ {operacion} no es valida!!')

    }
}
