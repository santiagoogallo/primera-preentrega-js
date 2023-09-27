

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}





let precioProducto = 3000
let precioIngresado = parseFloat(prompt("Ingrese un monto"))

while (precioProducto == precioIngresado){
    alert("Muchas gracias por tu compra! $" + precioIngresado)
    break
    }

