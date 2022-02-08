//array con nuestros productos
const productos = [
    {nombre: 'Acolchado + almohadas', imagen:'../images/acolchados-y-almohadas.jpg' ,precio: 5100, esCombo: true},
    {nombre: 'Cambiador reversible',imagen:'../images/cambiador.jpg' ,precio: 4100, esCombo: false},
    {nombre: 'Juego de cuna',imagen:'../images/juego-de-cuna.jpg' ,precio: 10900, esCombo: true}
]


//array vacío que va a contener los productos seleccionados por el cliente
let productosSeleccionados = [];


//pusheamos los productos seleccionados por el cliente al array de seleccionados que se encuentra vacío
function ingresarProductos(producto) {
    productosSeleccionados.push(producto);
}

//agregamos pop para quitar el último producto en caso que así se requiera
function quitarProductos(producto) {
    productosSeleccionados.pop(producto)
}
//array vacío, va a contener los precios de los productos que agregue el cliente, para posteriormente ser sumados.
const precios = [] ;

//agregamos los precios al array vacío
function agregarPrecios(producto) {
    precios.push(producto)
}

//filtro de combos
const combos = productos.filter((el) => el.esCombo == true)
console.log("Mirá nuestros combos", combos);


//pedimos que seleccionen los productos ofrecidos en los distintos números
let seleccionProductos = parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito. Recordá que con tu compra mayor a $10000 tenés envío gratis.\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"));

const contenedorProductos = document.querySelector(".productos");
const carrito = document.querySelector(".carrito");
const preciosFinales = document.querySelector(".precioFinal");
const envios = document.querySelector(".shipping");

//definimos funcion para mostrar productos
function mostrarProductos() {
    productos.forEach(function (product) {
        const divProductos = document.createElement("div");
        divProductos.classList.add("tarjetaProducto");

        const imgProducto = document.createElement("img");
        imgProducto.classList.add("imagenes")
        imgProducto.src = product.imagen;

        const tituloProducto = document.createElement("h2");
        tituloProducto.textContent = product.nombre;
    
        divProductos.appendChild(tituloProducto);
        divProductos.appendChild(imgProducto);
        
        contenedorProductos.appendChild(divProductos);
    })

}

//mostramos productos
mostrarProductos();

while((!isNaN(seleccionProductos) || seleccionProductos != null || seleccionProductos !=" ")){
    //ingresamos los productos seleccionados por el cliente al array y luego sumamos el precio del mismo a su array correspondiente.
    if(seleccionProductos == 1){
        alert("Agregaste: " + (productos[0].nombre));
        ingresarProductos(productos[0].nombre);
        agregarPrecios(productos[0].precio);
        seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }else if (seleccionProductos== 2){
        alert("Agregaste: " + (productos[1].nombre));
        ingresarProductos(productos[1].nombre);
        agregarPrecios(productos[1].precio);
        seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }else if (seleccionProductos== 3){
        alert("Agregaste: " + (productos[2].nombre));
        ingresarProductos(productos[2].nombre);
        agregarPrecios(productos[2].precio);
        seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }else if(seleccionProductos ==4){
        alert ("Último elemento borrado exitosamente");
        //agregamos funcion con pop para eliminar el último elemento en caso que así se requiera
        quitarProductos(productosSeleccionados);
        seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }else if (seleccionProductos== 5){
        //alert("Carrito finalizado. Seleccionaste: " + productosSeleccionados.join(", ") + " y el precio es de: $")
    break;
    }else{
        alert ("El producto seleccionado no es válido. Por favor, reintentalo nuevamente")
    seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }
}

//usamos reduce para sumar el monto total de los productos que nuestro cliente agregue al array precios
let sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)
alert ("Carrito finalizado. Seleccionaste: " + productosSeleccionados.join(", ") + " y el precio es de: $" + sumaPrecios)

//pedimos número de cuotas
let cuotas =parseFloat(prompt("Indicá en cuantas cuotas deseas abonar, recordá que podés hacerlo en 1, 3, 6, 9 o 12."))


//definimos función para calcular el interés en las cuotas seleccionadas multiplicando el monto por el interés dependiendo la cantidad de cuotas
//mostramos div con leyenda de precios
function calcularInteres(cuotas) {
    let precioFinal = document.createElement('div');
    precioFinal.classList.add("precio");
    while (!isNaN(cuotas) || cuotas != null || cuotas !=" "){
    if(cuotas == 1){
        precioFinal.innerText = ("El precio final de tu compra es: $" + sumaPrecios);
        preciosFinales.appendChild(precioFinal);
        break;
    }else if(cuotas == 3){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.15)));
        preciosFinales.appendChild(precioFinal);
        break;
    }
    else if (cuotas == 6){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.30)));
        preciosFinales.appendChild(precioFinal);
        break;
    }
    else if (cuotas== 9){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.45)));
        preciosFinales.appendChild(precioFinal);
        break;
    }
    else if (cuotas ==12){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.60)));
        preciosFinales.appendChild(precioFinal);
        break;
    }
    else{
        cuotas =parseFloat(prompt("Número inválido. Indicá en cuantas cuotas deseas abonar, recordá que podés hacerlo en 1, 3, 6, 9 o 12."))
    }
    }
}

//funcion para envío gratis
function envioGratis(q) {
    const freeShip = document.createElement("div");
    freeShip.classList.add("envioGratis");
    if (q >= 10000){
        freeShip.innerText= "¡Felicitaciones, tenés envío gratis!";
    }else{
        freeShip.innerText= "El costo de envío es de $350";
    }
    envios.appendChild(freeShip);
}

//definimos la funcion para mostrar las entradas por el prompt
function mostrarCarrito(productosSeleccionados) {
    productosSeleccionados.forEach(function (prod) {
        //creamos
        //div
        const divProductos = document.createElement("div");
        divProductos.classList.add("tarjetaProducto");
        
        //titulo
        const tituloProducto = document.createElement("h2");
        tituloProducto.classList.add("tituloProducto");
        tituloProducto.textContent = prod;
        
        //img no pude hacer que las imagenes no queden en undefined, pero la idea era mostrar también las imagenes

        /*const imgProducto = document.createElement("img");
        imgProducto.classList.add("imagenes");
        imgProducto.src = prod.imagen; */
        
        //agregamos
        divProductos.appendChild(tituloProducto);
        //divProductos.appendChild(imgProducto);
        
        carrito.appendChild(divProductos); 
    })
}
//por ultimo calculamos el interés, chequeamos si tiene envío gratis y mostramos el carrito (entradas por prompt)
calcularInteres(cuotas);
envioGratis(sumaPrecios);
mostrarCarrito(productosSeleccionados);