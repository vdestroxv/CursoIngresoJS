
function mostrar()
{
    var anchoDeRectangulo;
    var largoDeRectangulo;
    var perimetro;

    anchoDeRectangulo = prompt("ingrese el ancho del rectangulo","ejemplo");
    anchoDeRectangulo = parseInt(anchoDeRectangulo);

    largoDeRectangulo = prompt("ingrese el largo del rectangulo","ejemplo");
    largoDeRectangulo = parseInt(largoDeRectangulo);

    perimetro = 2 * (largoDeRectangulo + anchoDeRectangulo)
    alert("el perimetro del rectangulo es: "+perimetro);
}
