function mostrar()
{
	var edad;
//tomo la edad  

	 edad = document.getElementById('edad').value;
	 edad = parseInt(edad);
	 if(edad>12 && edad<18)
	 {
	 	 	alert("la persona es adolecente");
	 }

}//FIN DE LA FUNCIÓN