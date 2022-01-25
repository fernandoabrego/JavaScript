let montoTotal =parseFloat(prompt("Indica el monto de tu compra"));
while(!isNaN(montoTotal) || montoTotal != null || montoTotal !=" "){
if(!isNaN(montoTotal) && montoTotal != null && montoTotal !=" "){
alert("Tu compra es por un total de $" + montoTotal)
break;
}else{
    alert ("Ingresá un monto válido")
    montoTotal  =parseFloat(prompt("Indica el monto de tu compra"))
}
}
let cuotas =parseFloat(prompt("Indicá en cuantas cuotas deseas abonar, recordá que podés hacerlo en 1, 3, 6, 9 o 12."))
function calcularInteres(cuotas) {
    while (!isNaN(cuotas) || cuotas != null || cuotas !=" "){
    if(cuotas == 1){
        alert ("El precio final de tu compra es $" + montoTotal);
        break;
    }else if(cuotas == 3){
        alert ("El precio final de tu compra es $" + (montoTotal * 1.15));
        break;
    }
    else if (cuotas == 6){
        alert ("El precio final de tu compra es $" + (montoTotal * 1.30));
        break;
    }
    else if (cuotas== 9){
        alert ("El precio final de tu compra es $" + (montoTotal * 1.45));
        break;
    }
    else if (cuotas ==12){
        alert ("El precio final de tu compra es $" + (montoTotal * 1.60));
        break;
    }
    else{
        cuotas =parseFloat(prompt("Número inválido. Indicá en cuantas cuotas deseas abonar, recordá que podés hacerlo en 1, 3, 6, 9 o 12."))
    }
    }
}
calcularInteres(cuotas);