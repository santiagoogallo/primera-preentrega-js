

let nombreUsuario   = prompt("Ingresar nombre:");
let apellidoUsuario = prompt("Ingresar apellido:");

if((nombreUsuario !="") && (apellidoUsuario !="")){
    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario + "!"); 
}else{
    alert("Error: Ingresar nombre y apellido");
}





let precioProducto = 3000
let precioIngresado = parseFloat(prompt("Nustros productos estan $3000, ingrese un monto para continuar"))

while (precioProducto == precioIngresado){
    alert("Muchas gracias por tu compra " + nombreUsuario + "!")
    break
    }if (precioIngresado < precioProducto) {
        alert("El monto es insuficiente, vuelve a ingresar un precio")
        
    } 

/*if (precioIngresado < precioProducto){
alert("El monto es insuficiente, vuelve a ingresar un precio")
}if ( precioIngresado > precioProducto )
*/
