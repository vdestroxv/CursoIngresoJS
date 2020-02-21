function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var suma;
	var promedio;

	contador = 0;
	acumulador = 0;
	numero = prompt("ingrese un numero","ejemplo");
	numero = parseInt(numero);

	while(contador<5)
	{
		contador = contador+1;
		acumulador = acumulador+numero;
		numero = prompt("ingrese el numero"+contador,"ejemplo");
		numero = parseInt(numero);
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN