function mostrar()
{
	var edad;
//tomo la edad  
	 edad = document.getElementById('edad').value;
	 edad = parseInt(edad);
	 if(edad>17)
	 {
	 	 	alert("la persona es mayor de edad");
	 }
	 else
	 {
	 		alert("la persona es menor de edad");
	 }

}//FIN DE LA FUNCIÓN