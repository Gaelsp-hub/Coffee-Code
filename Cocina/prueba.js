const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [
    { nombre: "Café Americano", precio: 35, cantidad: 20, categoria: "bebida" },
    { nombre: "Cappuccino", precio: 55, cantidad: 15, categoria: "bebida" },
    { nombre: "Frappé de Chocolate", precio: 65, cantidad: 10, categoria: "bebida" },
    { nombre: "Pastel de Chocolate", precio: 50, cantidad: 8, categoria: "postre" },
    { nombre: "Galletas", precio: 25, cantidad: 30, categoria: "postre" }
];

function listar() {
    console.log("\n===== PRODUCTOS =====");
    productos.forEach((p, i) =>
        console.log(`${i}. ${p.nombre} - $${p.precio} - Cantidad: ${p.cantidad} - ${p.categoria}`)
    );
}

function menu() {
    console.log("\n===== ¿QUÉ DESEAS HACER? =====");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Editar");
    console.log("4. Eliminar");
    console.log("5. Salir");

    rl.question("Elige una opción: ", op => {

        if (op === "1") {
            rl.question("Nombre: ", nombre =>
                rl.question("Precio: ", precio =>
                    rl.question("Cantidad: ", cantidad =>
                        rl.question("Categoría: ", categoria => {
                            productos.push({ nombre, precio, cantidad, categoria });
                            console.log("\nProducto agregado correctamente.");
                            listar();
                            menu();
                        })
                    )
                )
            );

        } else if (op === "2") {
            listar();
            menu();

        } else if (op === "3") {
            rl.question("Número del producto a editar: ", i =>
                rl.question("Nuevo nombre: ", nombre =>
                    rl.question("Nuevo precio: ", precio =>
                        rl.question("Nueva cantidad: ", cantidad =>
                            rl.question("Nueva categoría: ", categoria => {
                                productos[i] = { nombre, precio, cantidad, categoria };
                                console.log("\nProducto editado correctamente.");
                                listar();
                                menu();
                            })
                        )
                    )
                )
            );

        } else if (op === "4") {
            rl.question("Número del producto a eliminar: ", i => {
                productos.splice(i, 1);
                console.log("\nProducto eliminado correctamente.");
                listar();
                menu();
            });

        } else if (op === "5") {
            console.log("\nPrograma terminado.");
            rl.close();

        } else {
            console.log("\nOpción no válida.");
            menu();
        }
    });
}

// Primero aparecen los productos
listar();

// Después aparece el menú
menu();
// ====================================
// SEGUNDA PARTE
// FILTER() Y FIND()
// ====================================

// PRODUCTOS BARATOS
function productosBaratos() {
    let baratos = productos.filter(p => p.precio < 50);
    console.log("\n===== PRODUCTOS BARATOS =====");
    baratos.forEach(p => console.log(`${p.nombre} - $${p.precio}`));
}

// PRODUCTOS CAROS
function productosCaros() {
    let caros = productos.filter(p => p.precio >= 50);
    console.log("\n===== PRODUCTOS CAROS =====");
    caros.forEach(p => console.log(`${p.nombre} - $${p.precio}`));
}

// BEBIDAS
function buscarBebidas() {
    let bebidas = productos.filter(p => p.categoria === "bebida");
    console.log("\n===== BEBIDAS =====");
    bebidas.forEach(p => console.log(p.nombre));
}

// POSTRES
function buscarPostres() {
    let postres = productos.filter(p => p.categoria === "postre");
    console.log("\n===== POSTRES =====");
    postres.forEach(p => console.log(p.nombre));
}

// BUSCAR UN PRODUCTO
function buscarProducto(nombre) {
    let producto = productos.find(p => p.nombre === nombre);

    console.log("\n===== BUSCAR PRODUCTO =====");

    if (producto) {
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: $${producto.precio}`);
        console.log(`Cantidad: ${producto.cantidad}`);
        console.log(`Categoría: ${producto.categoria}`);
    } else {
        console.log("Producto no encontrado.");
    }
}


// ====================================
// EJECUTAR
// ====================================

productosBaratos();
productosCaros();
buscarBebidas();
buscarPostres();
buscarProducto("Café Americano");