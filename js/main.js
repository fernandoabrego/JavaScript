//constructor
class Producto {
    constructor(nombre, imagen, precio, esCombo){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.esCombo = esCombo;
    }
}

//creamos productos
const producto1 = new Producto ('Acolchado + almohadas', '../images/acolchados-y-almohadas.jpg', 5100, true)
const producto2 = new Producto ('Cambiador reversible', '../images/cambiador.jpg', 4100, false)
const producto3 = new Producto ('Juego de cuna', '../images/juego-de-cuna.jpg', 10900, true)

//array con nuestros productos
const productos = [producto1, producto2, producto3]

//array vacío que va a contener los productos seleccionados por el cliente
const productosSeleccionados =[] ;

//array vacío, va a contener los precios de los productos que agregue el cliente, para posteriormente ser sumados.
const precios =[];

//pusheamos los productos seleccionados por el cliente al array de seleccionados que se encuentra vacío
function ingresarProductos(producto) {
    productosSeleccionados.push(producto);
}

//agregamos pop para quitar el último producto en caso que así se requiera
function quitarProductos(producto) {
    productosSeleccionados.pop(producto)
}

//agregamos los precios al array vacío
function agregarPrecios(producto) {
    precios.push(producto)
}

//quitamos los precios de ser necesario
function quitarPrecios(producto){
    precios.pop(producto)
}

//contenedores
const contenedorProductos = document.querySelector(".productos");
const carrito = document.querySelector(".carrito");
const preciosFinales = document.querySelector(".precioFinal");
const envios = document.querySelector(".shipping");

//botones para agregar/quitar al carrito
const boton1 = document.querySelector(".boton1");
const botonBorrar1= document.querySelector(".botonBorrar1");
const boton2 = document.querySelector(".boton2");
const botonBorrar2= document.querySelector(".botonBorrar2");
const boton3 = document.querySelector(".boton3");
const botonBorrar3= document.querySelector(".botonBorrar3");
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
        const divProductos = document.createElement("div");
        divProductos.classList.add("tarjetaProducto");

        const imgProducto = document.createElement("img");
        imgProducto.classList.add("imagenes")
        imgProducto.src = product.imagen;

        const tituloProducto = document.createElement("h2");
        tituloProducto.textContent = product.nombre;

        const precioProducto =document.createElement("h2");
        precioProducto.textContent = "$" + product.precio;

        divProductos.appendChild(tituloProducto);
        divProductos.appendChild(precioProducto);
        divProductos.appendChild(imgProducto);

        contenedorProductos.appendChild(divProductos);
    })

}

//mostramos productos
mostrarProductos();

      //quitando/agregando del carrito, estilos de los botones, etc
        boton1.addEventListener("mouseenter", () =>{
            boton1.style.background = "white";
        });

        boton1.addEventListener("mouseleave", ()=>{
            boton1.style.background = "lightcoral";
        });

        boton1.addEventListener("mousedown", ()=>{
            boton1.style.background = "lightcoral"
        });

        boton1.addEventListener("mouseup", ()=>{
            boton1.style.background = "white"
        });
        
        boton1.addEventListener("click", ()=>{
            if (carrito.textContent != "Quitaste el producto. Podés volver a agregar o finalizar la compra."){
            ingresarProductos(productos[0].nombre)
            agregarPrecios(productos[0].precio)   
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            divBtn.textContent += ` ${productos[0].nombre} $${productos[0].precio}`;
            carrito.append(divBtn);
        }else{
            carrito.textContent =`Seleccionaste: ${productosSeleccionados.join(", ")}. Sus precios son: $${precios.join(", ")}`;
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            ingresarProductos(productos[0].nombre);
            agregarPrecios(productos[0].precio);
            divBtn.textContent += ` ${productos[0].nombre} $${productos[0].precio}`;
            carrito.append(divBtn);
        }}
        )

        //quitando/agregando del carrito, estilos de los botones, etc
        botonBorrar1.addEventListener("mouseenter", () =>{
            botonBorrar1.style.background = "white";
        });
        botonBorrar1.addEventListener("mouseleave", ()=>{
            botonBorrar1.style.background = "lightcoral";
        });
        botonBorrar1.addEventListener("mousedown", ()=>{
            botonBorrar1.style.background = "lightcoral"
        });
        botonBorrar1.addEventListener("mouseup", ()=>{
            botonBorrar1.style.background = "white"
        });
        botonBorrar1.addEventListener("click", ()=>{
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            carrito.textContent = "Quitaste el producto. Podés volver a agregar o finalizar la compra.";
            quitarProductos(productos[0].nombre);
            quitarPrecios(productos[0].precio)
        })
        

      //quitando/agregando del carrito, estilos de los botones, etc
        boton2.addEventListener("mouseenter", () =>{
            boton2.style.background = "white";
        });
        boton2.addEventListener("mouseleave", ()=>{
            boton2.style.background = "lightcoral";
        });
        boton2.addEventListener("mousedown", ()=>{
            boton2.style.background = "lightcoral"
        });
        boton2.addEventListener("mouseup", ()=>{
            boton2.style.background = "white"
        });
        boton2.addEventListener("click", ()=>{
            if (carrito.textContent != "Quitaste el producto. Podés volver a agregar o finalizar la compra."){
            ingresarProductos(productos[1].nombre);
            agregarPrecios(productos[1].precio);
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            divBtn.textContent += ` ${productos[1].nombre} $${productos[1].precio}`;
            carrito.append(divBtn);
        }else{
            carrito.textContent =`Seleccionaste: ${productosSeleccionados.join(", ")} $${precios .join(", ")}`;
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            ingresarProductos(productos[1].nombre)
            agregarPrecios(productos[1].precio)
            divBtn.textContent += ` ${productos[1].nombre} $${productos[1].precio}`;
            carrito.append(divBtn);
        }})
      //quitando/agregando del carrito, estilos de los botones, etc
        botonBorrar2.addEventListener("mouseenter", () =>{
            botonBorrar2.style.background = "white";
        });
        botonBorrar2.addEventListener("mouseleave", ()=>{
            botonBorrar2.style.background = "lightcoral";
        });
        botonBorrar2.addEventListener("mousedown", ()=>{
            botonBorrar2.style.background = "lightcoral"
        });
        botonBorrar2.addEventListener("mouseup", ()=>{
            botonBorrar2.style.background = "white"
        });
        botonBorrar2.addEventListener("click", ()=>{
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            carrito.textContent = "Quitaste el producto. Podés volver a agregar o finalizar la compra.";
            quitarProductos(productos[1].nombre);
            quitarPrecios(productos[1].precio)
        })

      //quitando/agregando del carrito, estilos de los botones, etc
        boton3.addEventListener("mouseenter", () =>{
            boton3.style.background = "white";
        });
        boton3.addEventListener("mouseleave", ()=>{
            boton3.style.background = "lightcoral";
        });
        boton3.addEventListener("mousedown", ()=>{
            boton3.style.background = "lightcoral"
        });
        boton3.addEventListener("mouseup", ()=>{
            boton3.style.background = "white"
        });
        boton3.addEventListener("click", ()=>{
            if (carrito.textContent != "Quitaste el producto. Podés volver a agregar o finalizar la compra."){
            ingresarProductos(productos[2].nombre)
            agregarPrecios(productos[2].precio)
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            divBtn.textContent += ` ${productos[2].nombre} $${productos[2].precio}`;
            carrito.append(divBtn);
        }else{
            carrito.textContent =`Seleccionaste: ${productosSeleccionados.join(", ")} $${precios.join(", ")}`;
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            ingresarProductos(productos[2].nombre) 
            agregarPrecios(productos[2].precio)
            divBtn.textContent += ` ${productos[2].nombre} $${productos[2].precio}`;
            carrito.append(divBtn);
        }})

      //quitando/agregando del carrito, estilos de los botones, etc
        botonBorrar3.addEventListener("mouseenter", () =>{
            botonBorrar3.style.background = "white";
        });
        botonBorrar3.addEventListener("mouseleave", ()=>{
            botonBorrar3.style.background = "lightcoral";
        });
        botonBorrar3.addEventListener("mousedown", ()=>{
            botonBorrar3.style.background = "lightcoral"
        });
        botonBorrar3.addEventListener("mouseup", ()=>{
            botonBorrar3.style.background = "white"
        });
        botonBorrar3.addEventListener("click", ()=>{
            const divBtn = document.createElement("div");
            divBtn.classList.add("tarjetaProducto");
            carrito.textContent = "Quitaste el producto. Podés volver a agregar o finalizar la compra.";
            quitarProductos(productos[2].nombre)
            quitarPrecios(productos[2].precio)
        })


let sumaPrecios; //varible GLOBAL, luego, la utilizamos localmente para facilitar las funciones
let divPreciosProductos = document.createElement("div");
divPreciosProductos.classList.add("preciosProductos")
    precioCarrito.addEventListener("click", ()=>{
            divPreciosProductos.innerHTML =  "";
            preciosProductos.append(divPreciosProductos);
            let sumaPrecios;
            //usamos reduce LOCAL para sumar el monto total de los productos que nuestro cliente agregue al array precios
            sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0) 
            divPreciosProductos.textContent = "Carrito finalizado. Seleccionaste: " + productosSeleccionados.join(", ") + " y el precio es de: $" + sumaPrecios;
        }
    )


    //usamos reduce LOCAL para sumar el monto total de los productos que nuestro cliente agregue al array precios y agregamos la funcion para calcular interés
    cuota1.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(1);
        }})
    cuota3.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
    calcularInteres(3);
    }})
    cuota6.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(6);
        }})
    cuota6.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(6);
        }})
    cuota9.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0){
        calcularInteres(9);
        }})
    cuota12.addEventListener("click", ()=>{
        let sumaPrecios;
        sumaPrecios = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
        if(sumaPrecios !=0 || divCuotas ==""){
        calcularInteres(12);
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
        console.log(precioFinal.innerHTML);
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
