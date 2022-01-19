let donacion = prompt("Dejanos tu donación:", "El minimo a donar es de $50 y el máximo es de $10.000")
while ((donacion > 10000) || (donacion < 50)){
    alert ("Ingresaste un monto inválido, recordá que tiene que ser al menos $50 y no más de $10.000")
    donacion = prompt("Dejanos tu donación", "El minimo a donar es de $50 y el máximo es de $10.000")
}
if ((donacion < 10000) || (donacion > 50)){
    alert("Gracias! Donaste: $" + donacion + ", nos faltan: $" + (50000 - donacion) + " para llegar al objetivo.")
}