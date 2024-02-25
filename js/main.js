function agregarProductoAlCarrito(botonComprar) {
    const producto = botonComprar.closest('.card');
    const nombre = producto.querySelector('h4').textContent;
    const precio = parseInt(producto.querySelector('p').textContent.replace('$', ''));

    const listaProductos = document.querySelector('#lista-productos');
    const elemento = document.createElement('li');
    elemento.textContent = nombre + ' - Precio: $' + precio;
    listaProductos.appendChild(elemento);


    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: 'Se ha agregado "' + nombre + '" al carrito.',
        showConfirmButton: false,
        timer: 2000
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const botonConfirmarCompra = document.getElementById('confirmarCompra');
    botonConfirmarCompra.addEventListener('click', function() {

        Swal.fire({
            icon: 'success',
            title: 'Compra Registrada',
            text: '¡Tu compra ha sido registrada con éxito!',
            showConfirmButton: false,
            timer: 2000
        });

 
        const menuCarrito = document.getElementById('carrito');
        menuCarrito.style.display = 'none';


        const listaProductos = document.getElementById('lista-productos');
        listaProductos.innerHTML = '';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const botonConfirmarCompra = document.getElementById('confirmarCompra');
    botonConfirmarCompra.addEventListener('click', function() {
        Swal.fire({
            icon: 'success',
            title: 'Compra Registrada',
            text: '¡Tu compra ha sido registrada con éxito!',
            showConfirmButton: false,
            timer: 2000
        });
    });
});


function eliminarProducto(event) {
    const productoAEliminar = event.target.closest('li');
    productoAEliminar.remove();
}


document.addEventListener('DOMContentLoaded', function() {
    const botonesEliminar = document.querySelectorAll('.eliminar-producto');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const botonMostrarCarrito = document.getElementById('mostrarCarrito');
    const botonCerrarCarrito = document.getElementById('cerrarCarrito');
    const menuCarrito = document.getElementById('carrito');
    let carritoAbierto = false;


    function toggleCarrito() {
        if (carritoAbierto) {
            menuCarrito.style.display = 'none';
            carritoAbierto = false;
        } else {
            menuCarrito.style.display = 'block';
            carritoAbierto = true;
        }
    }

    botonMostrarCarrito.addEventListener('click', toggleCarrito);
    botonCerrarCarrito.addEventListener('click', toggleCarrito);
});