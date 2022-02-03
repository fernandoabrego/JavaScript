//creamos constructor
class Producto{
    constructor (nombre, precio, esCombo){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.esCombo = esCombo;
    }
}

//nuevos productos
const prod1 = new Producto ("Acolchado + almohadas", 5100, true);
const prod2 = new Producto ("Cambiador reversible", 4100, false);
const prod3 = new Producto ("Juego de cuna", 10900, true);
// const productos = [
//     {nombre: 'Acolchado + almohadas', precio: 5100, esCombo: true},
//     {nombre: 'Cambiador reversible', precio: 4100, esCombo: false},
//     {nombre: 'Juego de cuna', precio: 10900, esCombo: true},
// ]
//array con nuestros productos
const productos =[prod1, prod2, prod3];

//array vacío que va a contener los productos seleccionados por el cliente
const productosSeleccionados = [];

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
console.log("Mirá nuestros combos",combos);


//pedimos que seleccionen los productos ofrecidos en los distintos números
let seleccionProductos = parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito. Recordá que con tu compra mayor a $10000 tenés envío gratis.\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"));


while((!isNaN(seleccionProductos) || seleccionProductos != null || seleccionProductos !=" ")){
    //ingresamos los productos seleccionados por el cliente al array y luego sumamos el precio del mismo a su array correspondiente.
    if(seleccionProductos == 1){
        alert("Agregaste: " + (prod1.nombre));
        ingresarProductos(prod1.nombre);
        agregarPrecios(prod1.precio);
        seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }else if (seleccionProductos== 2){
        alert("Agregaste: " + (prod2.nombre));
        ingresarProductos(prod2.nombre);
        agregarPrecios(prod2.precio);
        seleccionProductos=parseFloat(prompt("Ingresá el número indicado para agregar productos al carrito:\n 1) Acolchado + almohadas $5100\n 2) Cambiador reversible $4100\n 3) Juego de cuna $10900\n 4)Para borrar el último producto agregado al carrito\n 5)SALIR"))
    }else if (seleccionProductos== 3){
        alert("Agregaste: " + (prod3.nombre));
        ingresarProductos(prod3.nombre);
        agregarPrecios(prod3.precio);
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

//funcion para envío gratis
function envioGratis(q) {
    if (q >= 10000){
        alert ("¡Felicitaciones, tenés envío gratis!")
    }else{
    alert ("El costo de envío es de $350")
    }
}


//definimos función para calcular el interés en las cuotas seleccionadas multiplicando el monto por el interés dependiendo la cantidad de cuotas
function calcularInteres(cuotas) {
    while (!isNaN(cuotas) || cuotas != null || cuotas !=" "){
    if(cuotas == 1){
        alert ("El precio final de tu compra es: $" + sumaPrecios);
        break;
    }else if(cuotas == 3){
        alert ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.15)));
        break;
    }
    else if (cuotas == 6){
        alert ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.30)));
        break;
    }
    else if (cuotas== 9){
        alert ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.45)));
        break;
    }
    else if (cuotas ==12){
        alert ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.60)));
        break;
    }
    else{
        cuotas =parseFloat(prompt("Número inválido. Indicá en cuantas cuotas deseas abonar, recordá que podés hacerlo en 1, 3, 6, 9 o 12."))
    }
    }
}

//por ultimo calculamos el interés y chequeamos si tiene envío gratis.
calcularInteres(cuotas);
envioGratis(sumaPrecios);