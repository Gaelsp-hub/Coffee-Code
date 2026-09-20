const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ==================================================
// PARTE DE LUZ - COCINA
// ==================================================

let productos = [];

// Agregar producto
function agregarProducto(nombre, precio, cantidad) {

    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    productos.push(producto);

    console.log("Producto agregado.");
}


// Mostrar productos
function listarProductos() {

    console.log("\n===== PRODUCTOS DE COCINA =====");

    if (productos.length == 0) {

        console.log("No hay productos.");

    } else {

        productos.forEach((producto, index) => {

            console.log(
                (index + 1) + ". " +
                producto.nombre +
                " - $" + producto.precio +
                " - Cantidad: " + producto.cantidad
            );

        });
    }
}


// Editar producto
function editarProducto(indice, nombre, precio, cantidad) {

    if (indice >= 0 && indice < productos.length) {

        productos[indice].nombre = nombre;
        productos[indice].precio = precio;
        productos[indice].cantidad = cantidad;

        console.log("Producto editado.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// Eliminar producto
function eliminarProducto(indice) {

    if (indice >= 0 && indice < productos.length) {

        productos.splice(indice, 1);

        console.log("Producto eliminado.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// Productos iniciales
agregarProducto("Cafe Americano", 35, 20);
agregarProducto("Cappuccino", 55, 15);
agregarProducto("Frappé", 65, 10);
agregarProducto("Pastel", 50, 8);
agregarProducto("Galletas", 25, 30);


// ==================================================
// PARTE DE PALOMA - CLIENTE
// ==================================================

let pedidos = [];


// Consultar productos
function consultarProductos() {

    console.log("\n===== MENU DEL CLIENTE =====");

    productos.forEach((producto, index) => {

        console.log(
            (index + 1) + ". " +
            producto.nombre +
            " - $" + producto.precio +
            " - Disponibles: " + producto.cantidad
        );

    });
}


// Crear pedido
function crearPedido(indice, cantidad) {

    if (indice >= 0 && indice < productos.length) {

        let producto = productos[indice];

        if (cantidad > 0 && cantidad <= producto.cantidad) {

            let pedido = {
                producto: producto.nombre,
                precio: producto.precio,
                cantidad: cantidad
            };

            pedidos.push(pedido);

            producto.cantidad = producto.cantidad - cantidad;

            console.log("Pedido agregado.");

        } else {

            console.log("Cantidad no disponible.");
        }

    } else {

        console.log("Producto no encontrado.");
    }
}


// Listar pedidos del cliente
function listarPedidos() {

    console.log("\n===== MIS PEDIDOS =====");

    if (pedidos.length == 0) {

        console.log("No hay pedidos.");

    } else {

        pedidos.forEach((pedido, index) => {

            let total = pedido.precio * pedido.cantidad;

            console.log(
                (index + 1) + ". " +
                pedido.producto +
                " x" + pedido.cantidad +
                " - $" + total
            );

        });
    }
}


// ==================================================
// PARTE DE GAEL - CAJA
// ==================================================


// Mostrar pedidos y calcular total
function mostrarCaja() {

    console.log("\n===== CAJA =====");

    let total = 0;

    if (pedidos.length == 0) {

        console.log("No hay pedidos.");

    } else {

        pedidos.forEach((pedido, index) => {

            let subtotal = pedido.precio * pedido.cantidad;

            console.log(
                (index + 1) + ". " +
                pedido.producto +
                " - $" + subtotal
            );

            total = total + subtotal;
        });

        console.log("\nTotal acumulado: $" + total);
    }
}


// ==================================================
// MENU PRINCIPAL
// ==================================================

function menu() {

    console.log(`
=============================
      CAFETERIA
=============================

1. Consultar productos
2. Crear pedido
3. Ver mis pedidos
4. Ver caja
5. Agregar producto
6. Editar producto
7. Eliminar producto
8. Salir
`);

    rl.question("Selecciona una opcion: ", function(opcion) {

        // CLIENTE - PALOMA
        if (opcion == "1") {

            consultarProductos();
            menu();

        } else if (opcion == "2") {

            consultarProductos();

            rl.question("Numero del producto: ", function(numero) {

                rl.question("Cantidad: ", function(cantidad) {

                    crearPedido(
                        parseInt(numero) - 1,
                        parseInt(cantidad)
                    );

                    menu();
                });
            });

        } else if (opcion == "3") {

            listarPedidos();
            menu();


        // CAJA - GAEL
        } else if (opcion == "4") {

            mostrarCaja();
            menu();


        // COCINA - LUZ
        } else if (opcion == "5") {

            rl.question("Nombre del producto: ", function(nombre) {

                rl.question("Precio: ", function(precio) {

                    rl.question("Cantidad: ", function(cantidad) {

                        agregarProducto(
                            nombre,
                            parseFloat(precio),
                            parseInt(cantidad)
                        );

                        menu();
                    });
                });
            });

        } else if (opcion == "6") {

            listarProductos();

            rl.question("Numero del producto: ", function(numero) {

                rl.question("Nuevo nombre: ", function(nombre) {

                    rl.question("Nuevo precio: ", function(precio) {

                        rl.question("Nueva cantidad: ", function(cantidad) {

                            editarProducto(
                                parseInt(numero) - 1,
                                nombre,
                                parseFloat(precio),
                                parseInt(cantidad)
                            );

                            menu();
                        });
                    });
                });
            });

        } else if (opcion == "7") {

            listarProductos();

            rl.question("Numero del producto: ", function(numero) {

                eliminarProducto(parseInt(numero) - 1);

                menu();
            });


        } else if (opcion == "8") {

            console.log("Saliendo del sistema...");
            rl.close();

        } else {

            console.log("Opcion incorrecta.");
            menu();
        }
    });
}


// ==================================================
// INICIAR PROGRAMA
// ==================================================

menu();