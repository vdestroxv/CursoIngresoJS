function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var notafinal;
	var contador;

	nombre = prompt("ingrese un nombre");
	while(isNaN(nombre))

	edad = prompt("ingrese la edad");
	edad = parseInt(edad);
	while (isNaN(edad<0 || edad>110))
	{
		console.log(edad);
	}

	sexo=prompt("ingrese el sexo")
	while(isNaN(sexo !="m" && sexo !="f"))
	{
		console.log(sexo);
	}
	notafinal = prompt("ingrese la nota final");
	notafinal = parseInt(notafinal);
	while(isNaN(notafinal))
	{
		console.log(notafinal);
	}



}