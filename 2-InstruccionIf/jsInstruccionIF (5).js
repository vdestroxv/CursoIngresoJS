function mostrar()
{
	var edad;
//tomo la edad  
	 edad = document.getElementById('edad').value;
	 edad = parseInt(edad);
	 if(edad<13 || edad>17)
	 {
	 	 	alert("la persona no es adolecente");
	 }

}//FIN DE LA FUNCIÓN