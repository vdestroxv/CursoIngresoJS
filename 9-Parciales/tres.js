function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    precio = prompt("ingrese el precio: "+"ejemplo");
    precio = parseInt(precio);

    porcentaje = prompt("ingrece el porcenaje de descuento","ejemplo");
    porcentaje = parseInt(porcentaje);

    descuento = porcentaje * precio / 100;
    precioFinal= precio - descuento;
    
    document.getElementById('elPrecioFinal').value=precioFinal;
}
