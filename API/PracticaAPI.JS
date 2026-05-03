function irformulario(Producto){
    window.location.href= "API-contacto.HTML?Producto=" + encodeURIComponent(Producto);
}

const params = new URLSearchParams(window.location.search);
const producto = params.get("Producto");
document.getElementById("Producto").textContent = Producto;
document.getElementById("ProductoInput").value = Producto;
