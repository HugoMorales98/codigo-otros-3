// Definimos un array de objetos que representan productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Obtenemos el elemento "ul" que contendrá los productos
const listaProductos = document.getElementById("listaProductos");

//función para mostrar los productos en la página
function mostrarProductos(productos) {
  // Limpiamos cualquier producto previamente mostrado en la lista
  listaProductos.innerHTML = "";

  // Iteramos a través de los productos y creamos elementos HTML para mostrar cada uno
  for (let i = 0; i < productos.length; i++) {
    
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    
    const tituloProducto = document.createElement("p");
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = productos[i].nombre;

    const imagenProducto = document.createElement("img");
    imagenProducto.src = productos[i].img;
    
    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(imagenProducto);    
    listaProductos.appendChild(divProducto);
  }
}

// Mostramos los productos por defecto al cargar la página
mostrarProductos(productos);

// Obtenemos el botón de filtrar y el input de búsqueda
const botonFiltrar = document.querySelector("button");
const inputBusqueda = document.querySelector("input");

// Botón de filtrar para que ejecute el filtro
botonFiltrar.addEventListener("click", function() {
  // Obtenemos el texto ingresado en el input de búsqueda
  const busqueda = inputBusqueda.value.toLowerCase();

  // Filtramos los productos según la búsqueda y mostramos los resultados
  const productosFiltrados = productos.filter(function(producto) {
    return producto.tipo.toLowerCase().includes(busqueda) || producto.color.toLowerCase().includes(busqueda);
  });
  mostrarProductos(productosFiltrados);
});