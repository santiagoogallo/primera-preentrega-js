





function iniciarCompra() {
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidoUsuario = document.getElementById("apellido").value;

    if (nombreUsuario !== "" && apellidoUsuario !== "") {
        alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario + "!"); 

        let precioIngresado = parseFloat(prompt("Nuestros productos tienen un precio promedio de $500. Ingrese un monto para continuar"));

        function realizarCompraRopa(nombre, precioProducto) {
            while (true) {
                if (isNaN(precioIngresado)) {
                    alert("Por favor, ingrese un monto válido.");
                } else if (precioIngresado >= precioProducto) {
                    alert("Muchas gracias por tu compra, " + nombre + "!");
                    break;
                } else {
                    alert("El monto es insuficiente, vuelve a ingresar un precio.");
                }
        
                precioIngresado = parseFloat(prompt("Nuestros productos tienen un precio promedio de $500. Ingrese un monto para continuar"));
            }
        }

        realizarCompraRopa(nombreUsuario, 500);

        let ropaDisponible = ["Camisa", "Pantalón", "Chaqueta", "Vestido"];
        let tipoRopa = prompt("Tenemos disponibles: Camisa, Pantalón, Chaqueta, Vestido. Por favor, ingrese el tipo de ropa que desea comprar:");

        function verificarRopa(tipo, listaRopa) {
            return listaRopa.includes(tipo);
        }

        if (verificarRopa(tipoRopa, ropaDisponible)) {
            alert("¡Excelente elección! Hemos agregado " + tipoRopa + " a tu carrito de compras.");
        } else {
            alert("Lo siento, no tenemos ese tipo de ropa disponible.");
        }
    }
}










