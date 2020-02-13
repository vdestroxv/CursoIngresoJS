/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero;
	var segundnumero;
	var suma;

	primernumero = document.getElementById('numeroUno').value;
	console.log(primernumero)
	segundnumero = document.getElementById('numeroDos').value;
	console.log(segundnumero)

	primernumero=parseInt(primernumero);
	segundnumero=parseInt(segundnumero);

	suma=primernumero+segundnumero;
	alert("el resultado de la suma es :"+ suma)
}

function restar()
{
	var primernumero;
	var segundnumero;
	var suma;

	primernumero = document.getElementById('numeroUno').value;
	console.log(primernumero)
	segundnumero = document.getElementById('numeroDos').value;
	console.log(segundnumero)

	primernumero=parseInt(primernumero);
	segundnumero=parseInt(segundnumero);

	suma=primernumero-segundnumero;
	alert("el resultado de la suma es :"+suma)
}

function multiplicar()
{ 
	var primernumero;
	var segundnumero;
	var suma;

	primernumero = document.getElementById('numeroUno').value;
	console.log(primernumero)
	segundnumero = document.getElementById('numeroDos').value;
	console.log(segundnumero)

	primernumero=parseInt(primernumero);
	segundnumero=parseInt(segundnumero);

	suma=primernumero*segundnumero;
	alert("el resultado de la suma es :"+suma)
}

function dividir()
{
	var primernumero;
	var segundnumero;
	var suma;

	primernumero = document.getElementById('numeroUno').value;
	console.log(primernumero)
	segundnumero = document.getElementById('numeroDos').value;
	console.log(segundnumero)

	primernumero=parseInt(primernumero);
	segundnumero=parseInt(segundnumero);

	suma=primernumero/segundnumero;
	alert("el resultado de la suma es :"+suma)
}

