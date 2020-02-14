/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var CantidadDeLamparas;
 	var MarcaDelLamparas;
 	var PrecioPorLamparas;
 	var PrecioTotalLamparas;
 	var Porcentaje;
 	var CantidadDeDescuento;
 	var Descuento;
 	var PrecioFinal;

 	MarcaDelLamparas = document.getElementById('Marca').value;
 	CantidadDeLamparas = document.getElementById('Cantidad').value;
 	CantidadDeLamparas = parseInt(CantidadDeLamparas);
 	PrecioPorLamparas = 35;
 	CantidadDeDescuento = 100;
 	PrecioTotalLamparas = CantidadDeLamparas*PrecioPorLamparas;
 	Porcentaje = 0;

 	if(CantidadDeLamparas>5)
 	{
 		Porcentaje = 50;
 	}
 	else
 	{
 		if(CantidadDeLamparas==5)
 		{
 			if(MarcaDelLamparas=="ArgentinaLuz")
 			{
 				Porcentaje = 40;
 			}
 			else 
 			{
 				Porcentaje = 30;
 			}
 		}
 		else
 		{
 			if(CantidadDeLamparas==4)
 			{
 				if(MarcaDelLamparas=="ArgentinaLuz"||MarcaDelLamparas=="FelipeLamparas")
 				{
 					Porcentaje = 25;
 				}
 				else
 				{
 					Porcentaje = 20;
 				}
 			}
 			else
 			{
 				if(CantidadDeLamparas==3)
 				{
 					if(MarcaDelLamparas=="ArgentinaLuz")
 					{
 						Porcentaje = 15;
 					}
 					else
 					{
 						if(MarcaDelLamparas=="FelipeLamparas")
 						{
 							Porcentaje = 10;
 						}
 						else
 						{
 							Porcentaje = 5;
 						}
 					}
 				}
 			}
 		}
 	}
 	Descuento = Porcentaje*PrecioTotalLamparas/CantidadDeDescuento;
	PrecioFinal = PrecioTotalLamparas-Descuento;
	document.getElementById('precioDescuento').value=PrecioFinal;
	if(PrecioFinal>119)
	{
		Porcentaje = 10;
		Descuento = Porcentaje*PrecioTotalLamparas/CantidadDeDescuento;
		PrecioFinal = PrecioFinal+Descuento;
		document.getElementById('precioDescuento').value=PrecioFinal;
		alert("IIBB Usted pago "+PrecioFinal+", siendo "+Descuento+" el impuesto que se pagó.")
	}
}
