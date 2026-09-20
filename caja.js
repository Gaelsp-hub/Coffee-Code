// Importamos el módulo readline de Node.js para interactuar por consola
const readline = require('readline');

// Variables para el módulo Caja
const listaPedidos = [];[span_0](start_span)[span_0](end_span)
let totalAcumulado = 0;[span_1](start_span)[span_1](end_span)

// Configuración de la interfaz de lectura en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para agregar pedidos
function agregarPedido(producto, precio) {[span_2](start_span)[span_2](end_span)
  const pedido = { producto, precio };
  listaPedidos.push(pedido);[span_3](start_span)[span_3](end_span)
  totalAcumulado += precio;[span_4](start_span)[span_4](end_span)
  console.log(`\n Guardado: ${producto} - $${precio}`);
}

// Función para mostrar los pedidos del cliente
function mostrarPedidos() {[span_5](start_span)[span_5](end_span)
  console.log("\n=== PEDIDOS DEL CLIENTE ===");[span_6](start_span)[span_6](end_span)
  if (listaPedidos.length === 0) {
    console.log("No hay pedidos registrados.");
  } else {
    listaPedidos.forEach((item, index) => {
      console.log(`${index + 1}. ${item.producto} - $${item.precio}`);
    });
    console.log(`\nTotal acumulado: $${totalAcumulado}`);[span_7](start_span)[span_7](end_span)
  }
}

// Menú interactivo
function menu() {
  console.log("\n--- MÓDULO CAJA ---");
  console.log("1. Agregar pedido");
  console.log("2. Mostrar pedidos y total");
  console.log("3. Salir");
  
  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion.trim()) {
      case '1':
        rl.question("Nombre del producto: ", (producto) => {
          rl.question("Precio: ", (precioInput) => {
            const precio = parseFloat(precioInput);
            if (isNaN(precio) || precio <= 0) {
              console.log(" Precio inválido.");
            } else {
              agregarPedido(producto, precio);
            }
            menu();
          });
        });
        break;

      case '2':
        mostrarPedidos();
        menu();
        break;

      case '3':
        console.log("\nSaliendo del sistema de Caja...");
        rl.close();
        break;

      default:
        console.log(" Opción no válida.");
        menu();
        break;
    }
  });
}

// Iniciar la aplicación
menu();