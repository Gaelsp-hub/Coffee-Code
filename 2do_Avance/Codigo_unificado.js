const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ==================================================
// PARTE DE LUZ - COCINA (Investigar: filter y find)
// ==================================================

let productos = [];

// Agregar producto con categoria y promocion
function agregarProducto(nombre, precio, cantidad, categoria, promocion) {

    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria,
        promocion: promocion
    };

    productos.push(producto);

    console.log("Producto agregado correctamente.");
}


// Mostrar productos de cocina
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
                " - Cantidad: " + producto.cantidad +
                " - Categoria: " + producto.categoria
            );

        });
    }
}


// Busquedas y filtros en cocina
function busquedasCocina() {

    console.log("\n===== CONSULTA DE CATEGORIAS Y FILTROS =====");

    // Filtrar Bebidas con filter()
    let bebidas = productos.filter(p => p.categoria === "bebida");
    console.log("\n-- BEBIDAS --");
    bebidas.forEach(p => console.log(p.nombre + " - $" + p.precio));

    // Filtrar Postres con filter()
    let postres = productos.filter(p => p.categoria === "postre");
    console.log("\n-- POSTRES --");
    postres.forEach(p => console.log(p.nombre + " - $" + p.precio));

    // Filtrar Productos Baratos con filter()
    let baratos = productos.filter(p => p.precio < 40);
    console.log("\n-- PRODUCTOS BARATOS (< $40) --");
    baratos.forEach(p => console.log(p.nombre + " - $" + p.precio));

    // Filtrar Productos Caros con filter()
    let caros = productos.filter(p => p.precio >= 40);
    console.log("\n-- PRODUCTOS CAROS (>= $40) --");
    caros.forEach(p => console.log(p.nombre + " - $" + p.precio));

    // Buscar producto destacado con find()
    let productoCaro = productos.find(p => p.precio >= 60);
    if (productoCaro) {
        console.log("\n-- PRODUCTO DESTACADO --");
        console.log(productoCaro.nombre + " - $" + productoCaro.precio);
    }
}


// Editar producto
function editarProducto(indice, nombre, precio, cantidad, categoria, promocion) {

    if (indice >= 0 && indice < productos.length) {

        productos[indice].nombre = nombre;
        productos[indice].precio = precio;
        productos[indice].cantidad = cantidad;
        productos[indice].categoria = categoria;
        productos[indice].promocion = promocion;

        console.log("Producto editado correctamente.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// Eliminar producto
function eliminarProducto(indice) {

    if (indice >= 0 && indice < productos.length) {

        productos.splice(indice, 1);

        console.log("Producto eliminado correctamente.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// Productos iniciales
agregarProducto("Cafe Americano", 35, 20, "bebida", false);
agregarProducto("Cappuccino", 55, 15, "bebida", true);
agregarProducto("Frappe", 65, 10, "bebida", false);
agregarProducto("Pastel", 50, 8, "postre", true);
agregarProducto("Galletas", 25, 30, "postre", false);


// ==================================================
// PARTE DE PALOMA - CLIENTE (Investigar: map, forEach)
// ==================================================

let pedidos = [];


// Consultar productos usando map() y forEach()
function consultarProductos() {

    console.log("\n===== MENU DEL CLIENTE =====");

    // Uso de map() para formatear el menu
    let menuFormateado = productos.map(p => p.nombre + " - $" + p.precio);

    menuFormateado.forEach((item, index) => {
        console.log((index + 1) + ". " + item);
    });

    console.log("\n===== PRODUCTOS DISPONIBLES =====");

    // Uso de forEach() para verificar stock disponible
    productos.forEach(p => {
        if (p.cantidad > 0) {
            console.log(p.nombre + " - Disponibles: " + p.cantidad);
        }
    });
}


// Mostrar promociones
function verPromociones() {

    console.log("\n===== PROMOCIONES =====");

    productos.forEach(p => {
        if (p.promocion) {
            console.log("OFERTA: " + p.nombre + " a solo $" + p.precio);
        }
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

            console.log("Pedido agregado correctamente.");

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
// PARTE DE GAEL - CAJA (Investigar: reduce, destructuring)
// ==================================================


// Mostrar pedidos y calcular subtotal, IVA y total con reduce y destructuring
function mostrarCaja() {

    console.log("\n===== CAJA =====");

    if (pedidos.length == 0) {

        console.log("No hay pedidos.");

    } else {

        // Recorrido usando destructuring
        pedidos.forEach(({ producto, precio, cantidad }, index) => {

            let subtotalLinea = precio * cantidad;

            console.log(
                (index + 1) + ". " +
                producto +
                " (x" + cantidad + ") - $" + subtotalLinea
            );
        });

        // Calculo del subtotal usando reduce() y destructuring
        let subtotal = pedidos.reduce((acumulado, { precio, cantidad }) => {
            return acumulado + (precio * cantidad);
        }, 0);

        let iva = subtotal * 0.16;
        let total = subtotal + iva;

        console.log("----------------------------");
        console.log("Subtotal: $" + subtotal);
        console.log("IVA (16%): $" + iva);
        console.log("Total a pagar: $" + total);
    }
}


// ==================================================
// CONTROL DE FLUJO (PREGUNTAR SI DESEA CONTINUAR)
// ==================================================

function preguntarContinuar() {
    rl.question("\n¿Deseas realizar otra operacion? (s/n): ", function(respuesta) {
        if (respuesta.toLowerCase() === "s" || respuesta.toLowerCase() === "si") {
            menu();
        } else {
            console.log("\nSaliendo del sistema...");
            rl.close();
        }
    });
}


// ==================================================
// MENU PRINCIPAL
// ==================================================

function menu() {

    console.log(`
=============================
          CAFETERIA
=============================

1. Consultar productos y stock
2. Ver promociones
3. Crear pedido
4. Ver mis pedidos
5. Ver caja
6. Busquedas en cocina
7. Agregar producto
8. Editar producto
9. Eliminar producto
10. Salir
`);

    rl.question("Selecciona una opcion: ", function(opcion) {

        if (opcion == "1") {

            consultarProductos();
            preguntarContinuar();

        } else if (opcion == "2") {

            verPromociones();
            preguntarContinuar();

        } else if (opcion == "3") {

            consultarProductos();

            rl.question("\nNumero del producto: ", function(numero) {

                rl.question("Cantidad: ", function(cantidad) {

                    crearPedido(
                        parseInt(numero) - 1,
                        parseInt(cantidad)
                    );

                    preguntarContinuar();
                });
            });

        } else if (opcion == "4") {

            listarPedidos();
            preguntarContinuar();

        } else if (opcion == "5") {

            mostrarCaja();
            preguntarContinuar();

        } else if (opcion == "6") {

            busquedasCocina();
            preguntarContinuar();

        } else if (opcion == "7") {

            rl.question("Nombre del producto: ", function(nombre) {

                rl.question("Precio: ", function(precio) {

                    rl.question("Cantidad: ", function(cantidad) {

                        rl.question("Categoria (bebida/postre): ", function(categoria) {

                            rl.question("¿Esta en promocion? (si/no): ", function(promo) {

                                let esPromo = promo.toLowerCase() === "si" || promo.toLowerCase() === "s";

                                agregarProducto(
                                    nombre,
                                    parseFloat(precio),
                                    parseInt(cantidad),
                                    categoria,
                                    esPromo
                                );

                                preguntarContinuar();
                            });
                        });
                    });
                });
            });

        } else if (opcion == "8") {

            listarProductos();

            rl.question("\nNumero del producto a editar: ", function(numero) {

                rl.question("Nuevo nombre: ", function(nombre) {

                    rl.question("Nuevo precio: ", function(precio) {

                        rl.question("Nueva cantidad: ", function(cantidad) {

                            rl.question("Nueva categoria: ", function(categoria) {

                                rl.question("¿En promocion? (si/no): ", function(promo) {

                                    let esPromo = promo.toLowerCase() === "si" || promo.toLowerCase() === "s";

                                    editarProducto(
                                        parseInt(numero) - 1,
                                        nombre,
                                        parseFloat(precio),
                                        parseInt(cantidad),
                                        categoria,
                                        esPromo
                                    );

                                    preguntarContinuar();
                                });
                            });
                        });
                    });
                });
            });

        } else if (opcion == "9") {

            listarProductos();

            rl.question("\nNumero del producto a eliminar: ", function(numero) {

                eliminarProducto(parseInt(numero) - 1);

                preguntarContinuar();
            });

        } else if (opcion == "10") {

            console.log("\nSaliendo del sistema...");
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