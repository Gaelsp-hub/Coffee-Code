
let pedidos = [];

function consultarProductos() {
    console.log(`
===== MENÚ =====
1. Hamburguesa - $80
2. Pizza - $120
3. Refresco - $30
`);
}

function crearPedido(producto, precio) {
    pedidos.push({ producto, precio });
    console.log(`Pedido agregado: ${producto} - $${precio}`);
}

function listarPedidos() {
    console.log("\n===== MIS PEDIDOS =====");

    pedidos.forEach((pedido, index) => {
        console.log(`${index + 1}. ${pedido.producto} - $${pedido.precio}`);
    });

     let productos = pedidos.map((pedido) => {
        return pedido.producto;
    });

    console.log(productos);
}

function procesarPedido() {

    console.log("\n===== ESTADO DEL PEDIDO =====");

    // Estado 1
    console.log("Pedido recibido");

    // Después de 2 segundos
    setTimeout(() => {

        console.log("Preparando.......");

        // Después de otros 2 segundos
        setTimeout(() => {

            console.log("Empacando........");

            // Después de otros 2 segundos
            setTimeout(() => {

                console.log("Pedido entregado");

            }, 2000);

        }, 2000);

    }, 2000);
}

console.log("===== MENÚ CLIENTE =====");
console.log("-----------------------------");
console.log("1. Consultar productos");
console.log("2. Crear pedido");
console.log("3. Listar pedidos");
console.log("--------------------------");