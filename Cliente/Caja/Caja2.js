const pedidosEjemplo = [
  { producto: "Cafe Americano", precio: 35, cantidad: 2 },
  { producto: "Cappuccino", precio: 55, cantidad: 1 },
  { producto: "Pastel", precio: 50, cantidad: 3 }
];

function mostrarCaja(listaPedidos = []) {
  console.log("\n===== CAJA =====");

  if (listaPedidos.length === 0) {
    console.log("No hay pedidos registrados.");
    return;
  }

  
  listaPedidos.forEach(({ producto, precio, cantidad }, index) => {
    const subtotal = precio * cantidad;
    console.log(`${index + 1}. ${producto} (x${cantidad}) - $${subtotal}`);
  });

  
  const totalCaja = listaPedidos.reduce((acumulado, { precio, cantidad }) => {
    return acumulado + (precio * cantidad);
  }, 0);

  console.log("----------------------------");
  console.log(`Total acumulado: $${totalCaja}`);
}

// ==================================================
// PRUEBAS DE EJECUCIÓN
// ==================================================


mostrarCaja(pedidosEjemplo);

