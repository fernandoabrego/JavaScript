const productos =[
    {
    id: 1,
    nombre:"Acolchado + almohadas",
    imagen: "../images/acolchados-y-almohadas.jpg",
    precio: 5100,
    esCombo: true,
    },
    {
    id: 2,
    nombre:"Cambiador reversible",
    imagen: "../images/cambiador.jpg",
    precio: 4100,
    esCombo: false,
    },
    {
    id: 3,
    nombre:"Juego de cuna",
    imagen: "../images/juego-de-cuna.jpg",
    precio: 10900,
    esCombo: true,
    }
]

//array vacío que va a contener exclusivamente los nombres de los productos agregados por el cliente para mostrarlos
const nombresSeleccionados = []

////array vacío que va a contener los productos agregados por el cliente
const productosSeleccionados = [];

//array vacío, va a contener los precios de los productos que agregue el cliente, para posteriormente ser sumados.
const precios =[]

//pusheamos los nombres de los productos seleccionados por el cliente al array de nombres (vacío)
function ingresarNombres(producto) {
    nombresSeleccionados.push(producto);
}
//agregamos pop para quitar el nombre del último producto en caso que así se requiera
function quitarNombres(producto) {
    nombresSeleccionados.pop(producto)
}

//ingresamos producto al array de seleccionados
function ingresarProducto(producto){
    productosSeleccionados.push(producto);
}
//quitamos producto del array de seleccionados
function quitarProducto(producto){
    productosSeleccionados.pop(producto);
}

//agregamos los precios al array de precios
function agregarPrecios(producto) {
    precios.push(producto)
}
//quitamos los precios de ser necesario
function quitarPrecios(producto){
    precios.pop(producto)
}

//Agregamos al carrito
function agregarAlCarrito(nombre){
    const agregados = productos.find ( producto => producto.nombre === nombre);
    ingresarProducto(agregados);
    mostrarCarrito(productosSeleccionados);
}
//Quitamos del carrito
function quitarDelCarrito(nombre){
    const agregados = productos.find ( product => product.nombre === nombre);
    quitarProducto(agregados);
    mostrarCarrito(productosSeleccionados);
}

//contenedores
const contenedorProductos = document.querySelector(".productos");
const carrito = document.querySelector(".carrito");
const preciosFinales = document.querySelector(".precioFinal");
const envios = document.querySelector(".shipping");
const precioCarrito= document.querySelector(".precioCarrito");
const preciosProductos = document.querySelector(".preciosProductos")
//Botones para cuotas
const cuot =document.querySelector(".cuotas");
const cuota1 = document.querySelector(".cuota1");
const cuota3 = document.querySelector(".cuota3");
const cuota6 = document.querySelector(".cuota6");
const cuota9 = document.querySelector(".cuota9");
const cuota12 = document.querySelector(".cuota12");


//definimos funcion para mostrar productos
    function mostrarProductos() {
    productos.forEach(function (product) {
        //Creamos tarjeta con imagenes y texto
        const divProductos = document.createElement("div");
        divProductos.classList.add("tarjetaProducto");

        const imgProducto = document.createElement("img");
        imgProducto.classList.add("imagenes")
        imgProducto.src = product.imagen;

        const tituloProducto = document.createElement("h2");
        tituloProducto.textContent = product.nombre;

        const precioProducto =document.createElement("h2");
        precioProducto.textContent = "$" + product.precio;

        //Creamos botones 
        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("botones");
        botonAgregar.textContent = "Agregar al carrito";

        //Agregamos con click
        botonAgregar.addEventListener("click", () =>{
            ingresarNombres(product.nombre);
            agregarAlCarrito(product.nombre);
            agregarPrecios(product.precio);
            })

        const botonQuitar = document.createElement("button");
        botonQuitar.classList.add("botones")
        botonQuitar.textContent = "Quitar último";
        
        //Quitamos último con click
        botonQuitar.addEventListener("click", () =>{
            quitarNombres(product.nombre);
            quitarDelCarrito(product.nombre);
            quitarPrecios(product.precio);
        })
        eventosBotones(botonAgregar);
        eventosBotones(botonQuitar);
        //apendamos lo anterior
        divProductos.appendChild(tituloProducto);
        divProductos.appendChild(precioProducto);
        divProductos.appendChild(imgProducto);
        divProductos.appendChild(botonAgregar);
        divProductos.appendChild(botonQuitar);

        contenedorProductos.appendChild(divProductos);
    })
    }

    function mostrarCarrito(elementos){
        carrito.innerHTML= "";
        elementos.forEach(function (elementos) {
            const divProductos = document.createElement("div");
            divProductos.classList.add("tarjetaCarrito");
    
            const imgProducto = document.createElement("img");
            imgProducto.classList.add("imagenes")
            imgProducto.src = elementos.imagen;
    
            const tituloProducto = document.createElement("h2");
            tituloProducto.textContent = elementos.nombre;
    
            const precioProducto =document.createElement("h2");
            precioProducto.textContent = ". $" + elementos.precio;

/*             const borrarDelCarrito =document.createElement("button");
            borrarDelCarrito.classList.add("eliminarDelCarrito"); */ //Más adelante en el proyecto, la idea es quitar desde el botón

            divProductos.appendChild(imgProducto);
            divProductos.appendChild(tituloProducto);
            divProductos.appendChild(precioProducto);

            carrito.appendChild(divProductos);
    })
    //guardar Local Storage en string
    localStorage.setItem("carrito",JSON.stringify(productosSeleccionados))
}
//Eventos para mouse
    function eventosBotones(button){
    button.addEventListener("mouseenter", () =>{
    button.style.background = "white";
});

    button.addEventListener("mouseleave", ()=>{
    button.style.background = "lightcoral";
});

    button.addEventListener("mousedown", ()=>{
    button.style.background = "lightcoral"
});

    button.addEventListener("mouseup", ()=>{
    button.style.background = "white"
});
}

//mostramos productos
mostrarProductos();

let divPreciosProductos = document.createElement("div");
divPreciosProductos.classList.add("preciosProductos")
//calculamos carrito ya integrando la función de envío gratis.
function calcularCarrito(){
    divPreciosProductos.innerHTML =  "";
    preciosProductos.append(divPreciosProductos);
    let sumaPrecios; //varible GLOBAL, luego, la utilizamos localmente para facilitar las funciones
    //usamos reduce LOCAL para sumar el monto total de los productos que nuestro cliente agregue al array precios
    sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)
    divPreciosProductos.textContent = "Carrito finalizado. Tus productos son: " + nombresSeleccionados.join(", ") + "." + " Por un precio de: $" + sumaPrecios;
    envioGratis(sumaPrecios);
}
//Al clickear, calculamos carrito y envío.
precioCarrito.addEventListener("click", ()=>{
    calcularCarrito();
    localStorage.setItem("carrito",JSON.stringify(productosSeleccionados))
})

    //usamos reduce LOCAL para sumar el monto total de los productos que nuestro cliente agregue al array precios y agregamos la funcion para calcular interés
    cuota1.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(1);
        envioGratis(sumaPrecios);
        }})
    cuota3.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(3);
        envioGratis(sumaPrecios);

    }})
    cuota6.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(6);
        envioGratis(sumaPrecios);
        }})
    cuota6.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(6);
        envioGratis(sumaPrecios);
        }})
    cuota9.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(9);
        envioGratis(sumaPrecios);
        }})
    cuota12.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0 || divCuotas ==""){
        calcularInteres(12);
        envioGratis(sumaPrecios);
        }})

//definimos función para calcular el interés en las cuotas seleccionadas multiplicando el monto por el interés dependiendo la cantidad de cuotas
function calcularInteres(cuotas) {
    let precioFinal = document.createElement('div');
    precioFinal.classList.add("precio");
    cuot.innerHTML = "";
    let sumaPrecios;
    sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
    if(cuotas == 1 && cuot.innerHTML== ""){
        precioFinal.innerHTML = ("El precio final de tu compra es: $" + sumaPrecios);
        cuot.append(precioFinal);
    }else if(cuotas == 3 && cuot.innerHTML== ""){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.15)));
        cuot.append(precioFinal);
    }
    else if (cuotas == 6 && cuot.innerHTML== ""){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.30)));
        cuot.append(precioFinal);
    }
    else if (cuotas== 9 && cuot.innerHTML== ""){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.45)));
        cuot.append(precioFinal);
    }
    else if (cuotas ==12 && cuot.innerHTML== ""){
        precioFinal.innerText = ("El precio final de tu compra es: $" + (Math.ceil(sumaPrecios * 1.60)));
        cuot.append(precioFinal);
    }
    else{}
    }

//funcion para envío gratis
function envioGratis(q) {
    envios.innerHTML ="";
    const freeShip = document.createElement("div");
    freeShip.classList.add("envioGratis");
    if (q >= 10000){
        freeShip.innerText= "¡Felicitaciones, tenés envío gratis!";
    }else{
        freeShip.innerText= "El costo de envío es de $350";
    }
    envios.appendChild(freeShip);
} 

//recuperamos el Local parseado con JSON 
    function recuperarLocal(){
        let traerLocal = JSON.parse(localStorage.getItem("carrito"))
        if (traerLocal){
            traerLocal.forEach(element => {
            agregarAlCarrito(element.nombre)
            agregarPrecios(element.precio)
            ingresarNombres(element.nombre);
            calcularCarrito();
        })
    }
    console.log(traerLocal);
    }
    recuperarLocal();