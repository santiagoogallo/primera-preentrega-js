



let nombreUsuario = prompt("Ingresar nombre:");
let apellidoUsuario = prompt("Ingresar apellido:");

if (nombreUsuario !== "" && apellidoUsuario !== "") {
    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario + "!"); 

    let precioIngresado = parseFloat(prompt("Nuestros productos están $3000, ingrese un monto para continuar"));

    function realizarCompra(nombre, precioProducto) {
        while (true) {
            if (isNaN(precioIngresado)) {
                alert("Por favor, ingrese un monto válido.");
            } else if (precioIngresado >= precioProducto) {
                alert("Muchas gracias por tu compra, " + nombre + "!");
                break;
            } else {
                alert("El monto es insuficiente, vuelve a ingresar un precio.");
            }
        
            precioIngresado = parseFloat(prompt("Nuestros productos están $3000, ingrese un monto para continuar"));
        }
    }

    realizarCompra(nombreUsuario, 3000);
}




