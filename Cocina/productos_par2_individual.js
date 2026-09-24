let productos = [
    { nombre: "Café Americano", precio: 35, cantidad: 20, categoria: "bebida" },
    { nombre: "Cappuccino", precio: 55, cantidad: 15, categoria: "bebida" },
    { nombre: "Frappé de Chocolate", precio: 65, cantidad: 10, categoria: "bebida" },
    { nombre: "Pastel de Chocolate", precio: 50, cantidad: 8, categoria: "postre" },
    { nombre: "Galletas", precio: 25, cantidad: 30, categoria: "postre" }
];

// FILTER
console.log("\n===== PRODUCTOS BARATOS =====");
productos.filter(p => p.precio < 50)
    .forEach(p => console.log(`${p.nombre} - $${p.precio}`));

console.log("\n===== PRODUCTOS CAROS =====");
productos.filter(p => p.precio >= 50)
    .forEach(p => console.log(`${p.nombre} - $${p.precio}`));

console.log("\n===== BEBIDAS =====");
productos.filter(p => p.categoria === "bebida")
    .forEach(p => console.log(p.nombre));

console.log("\n===== POSTRES =====");
productos.filter(p => p.categoria === "postre")
    .forEach(p => console.log(p.nombre));

// FIND
console.log("\n===== BUSCAR PRODUCTO =====");

let producto = productos.find(p => p.nombre === "Café Americano");

if (producto) {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Cantidad: ${producto.cantidad}`);
    console.log(`Categoría: ${producto.categoria}`);
} else {
    console.log("Producto no encontrado.");
}