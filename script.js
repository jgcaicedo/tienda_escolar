let carritoContador = 0;

function agregarCarrito(){
    carritoContador++;
    document.getElementById("contador").innerText = carritoContador;
    alert(" El Producto ha sido agregado al carrito");
}