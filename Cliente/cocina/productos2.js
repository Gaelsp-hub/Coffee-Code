let productos = [];

// AGREGAR
function agregarProducto(nombre, precio, cantidad, categoria) {
    productos.push({ nombre, precio, cantidad, categoria });
}

// LISTAR
function listarProductos() {
    console.log("\n===== PRODUCTOS =====");
    productos.forEach((p, i) =>
        console.log(`${i}. ${p.nombre} - $${p.precio} - ${p.cantidad} - ${p.categoria}`)
    );
}

// EDITAR
function editarProducto(i, nombre, precio, cantidad, categoria) {
    if (productos[i]) {
        productos[i] = { nombre, precio, cantidad, categoria };
    }
}

// ELIMINAR
function eliminarProducto(i) {
    productos.splice(i, 1);
}

// PRODUCTOS
agregarProducto("Café Americano", 35, 20, "bebida");
agregarProducto("Cappuccino", 55, 15, "bebida");
agregarProducto("Frappé de Chocolate", 65, 10, "bebida");
agregarProducto("Pastel de Chocolate", 50, 8, "postre");
agregarProducto("Galletas", 25, 30, "postre");

listarProductos();

editarProducto(1, "Cappuccino Vainilla", 60, 18, "bebida");
listarProductos();

eliminarProducto(3);
listarProductos();