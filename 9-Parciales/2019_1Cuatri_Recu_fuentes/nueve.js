function mostrar()
{	
	var respuesta;
	var nombre;
	var edad;
	var sexo;
	var notafinal;

	respuesta="si";

	while(respuesta!="no")
	{
		nombre=prompt("ingrese un nombre");
		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad<0 || edad>110)
		{
			edad=prompt("ingrese una edad valida");
			edad=parseInt(edad);
		}
		sexo = prompt("ingrese el sexo ");
		while(!isNaN(sexo) || sexo !="f" && sexo !="m")
		{
			sexo=prompt("ingrese el sexo correctamente (f o m)")
		}
		notafinal = prompt("ingrese la nota final");
		notafinal = parseInt(notafinal);
		while (isNaN(notafinal)|| notafinal<0 || notafinal>10)
		{
			notafinal=prompt("ingrese una nota valida");
			notafinal=parseInt(notafinal);
		
		}
		if (sexo=="m")
		{
			if(notafinal>5)
			{
				totalmasculinosaprobados=totalmasculinosaprobados+1;
			}
		}
		if(edad<13)
		{
			totalnotasmenores=totalnotasmenores+notafinal;
			cantidadmenores=cantidadmenores+1;
		}
		else
		{
			if(edad>12 && edad<18)
			{
				totalnotasadolecentes=totalnotasadolecentes+notafinal;
				cantidadadolecentes=cantidadadolecentes+1;
			}
			else
			{
				if(edad>17)
				{
					totalnotasmayores=totalnotasmayores+notafinal;
					cantidadmayores=+1;
				}
			}
		}
		//total masculino aprobados
		//notas/contador menores
		//notas/contador adolecentes
		//notas/contador mayores
		//notas/ contador m y f
		
		respuesta=prompt("desea ingresar otro alumno");
	}
	promediommenores=totalnotasmenores/cantidadmenores;
	promedioadolecentes=totalnotasadolecentes/cantidadadolecentes;
	promediomayores=totalnotasmayores/cantidadmayores;
	console.log
	console.log
	console.log
	
}