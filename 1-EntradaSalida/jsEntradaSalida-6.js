/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primernumero;
	var segundonumero;
	var suma;
	
	primernumero = document.getElementById('numeroUno').value;
	console.log("el primer numero es "+primernumero);
	primernumero=parseInt(primernumero);
	//primernumero=parseInt(primernumero); parceint devuelve el valor tansformado de texto a numero

	segundonumero = document.getElementById('numeroDos').value;
	console.log("el segundo numero es "+segundonumero);
	segundonumero=parseInt(segundonumero);
	suma=primernumero+segundonumero;
	alert("el resultado de la suma es: "+suma)

}

