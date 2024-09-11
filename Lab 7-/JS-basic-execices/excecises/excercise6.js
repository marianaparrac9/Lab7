/*
Ejercicio 6: Calculador de descuento
Crea una función llamada calcularDescuento(precio, porcentaje) 
que reciba el precio de un producto y un porcentaje de descuento, 
y retorne el precio final con el descuento aplicado. 
Si el porcentaje es mayor a 100 o menor que 0, debe retornar "Porcentaje no válido".
*/
function calcularDescuento(precio, porcentaje) {
   
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje no válido";
    }
    
    const descuento = precio * (porcentaje / 100);
    const precioFinal = precio - descuento;
    return precioFinal;
}

console.log("-----------------------------------")
console.log("EJERCICIO 6")
console.log("-----------------------------------")
console.log(calcularDescuento(100, 20)); 
console.log(calcularDescuento(50, -5));  
