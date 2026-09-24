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