// PRODUCTOS BASE

let productos = [
  { nombre: "Cafe Americano", precio: 35, cantidad: 20, categoria: "bebida", promocion: false },
  { nombre: "Cappuccino", precio: 55, cantidad: 15, categoria: "bebida", promocion: true },
  { nombre: "Frappe de Chocolate", precio: 65, cantidad: 10, categoria: "bebida", promocion: false },
  { nombre: "Pastel de Chocolate", precio: 50, cantidad: 8, categoria: "categoria", promocion: true },
  { nombre: "Galletas", precio: 25, cantidad: 30, categoria: "postre", promocion: false }
];


// PALOMA - CLIENTE 


// Menu dinamico
function mostrarMenuDinamico() {
  console.log("\n===== MENU DINAMICO =====");
  let menu = productos.map(p => p.nombre + " - $" + p.precio);
  menu.forEach(item => console.log(item));
}

// Productos disponibles
function mostrarProductosDisponibles() {
  console.log("\n===== PRODUCTOS DISPONIBLES =====");
  productos.forEach(p => {
    if (p.cantidad > 0) {
      console.log(p.nombre + " - Stock: " + p.cantidad);
    }
  });
}

// Promociones
function mostrarPromociones() {
  console.log("\n===== PROMOCIONES =====");
  productos.forEach(p => {
    if (p.promocion) {
      console.log("Oferta: " + p.nombre + " a $" + p.precio);
    }
  });
}


// LUZ - COCINA 


// Buscar Bebidas
function buscarBebidas() {
  console.log("\n===== BEBIDAS =====");
  let bebidas = productos.filter(p => p.categoria === "bebida");
  console.log(bebidas);
}

// Buscar Postres
function buscarPostres() {
  console.log("\n===== POSTRES =====");
  let postres = productos.filter(p => p.categoria === "postre");
  console.log(postres);
}

// Buscar Productos Baratos
function buscarProductosBaratos() {
  console.log("\n===== PRODUCTOS BARATOS =====");
  let baratos = productos.filter(p => p.precio < 40);
  console.log(baratos);
}

// Buscar Productos Caros y un producto especifico
function buscarProductosCaros() {
  console.log("\n===== PRODUCTOS CAROS =====");
  let caros = productos.filter(p => p.precio >= 40);
  console.log(caros);

  // Buscar el primer producto de mas de $60 usando find
  let masCaro = productos.find(p => p.precio >= 60);
  console.log("Producto caro encontrado:", masCaro);
}


// GAEL - CAJA 


const pedidosEjemplo = [
  { producto: "Cafe Americano", precio: 35, cantidad: 2 },
  { producto: "Cappuccino", precio: 55, cantidad: 1 },
  { producto: "Pastel de Chocolate", precio: 50, cantidad: 3 }
];

function mostrarCaja(listaPedidos = []) {
  console.log("\n===== CAJA =====");

  if (listaPedidos.length === 0) {
    console.log("No hay pedidos.");
    return;
  }

  // Mostrar lista con destructuring
  listaPedidos.forEach(({ producto, precio, cantidad }, index) => {
    let subtotalItem = precio * cantidad;
    console.log((index + 1) + ". " + producto + " (x" + cantidad + ") - $" + subtotalItem);
  });

  // Calcular subtotal con reduce y destructuring
  let subtotal = listaPedidos.reduce((acumulado, { precio, cantidad }) => {
    return acumulado + (precio * cantidad);
  }, 0);

  let iva = subtotal * 0.16;
  let total = subtotal + iva;

  console.log("----------------------------");
  console.log("Subtotal: $" + subtotal);
  console.log("IVA (16%): $" + iva);
  console.log("Total: $" + total);
}


// PRUEBAS DE EJECUCION


// Pruebas Paloma
mostrarMenuDinamico();
mostrarProductosDisponibles();
mostrarPromociones();

// Pruebas Luz
buscarBebidas();
buscarPostres();
buscarProductosBaratos();
buscarProductosCaros();

// Pruebas Gael
mostrarCaja(pedidosEjemplo);