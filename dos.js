/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{

	let nombreArt;
	let categoriaArt;
	let precioArt = 0 ;
	let cantBebidas = 0;
	let respuesta = "si"


	let nombreArtMax;
	let precioArtMax = 0;
	let nombreLacteoMax;
	let precioLacteoMax = 0;


	let flagArt = 0;
	let flagLacteo = 0;


	do 
	{
		nombreArt = prompt("Ingrese nombre del articulo");


		do 
		{
			categoriaArt = prompt("Ingrese categoria del articulo").toLowerCase();



		} while(!(categoriaArt == "almacen" || categoriaArt == "bebidas" || categoriaArt == "limpieza" || categoriaArt == "lacteos"));

		do 
		{
			precioArt = parseInt(prompt("Ingrese el precio del articulo"));


		} while(!(precioArt > 0 && precioArt < 1000));

		switch(categoriaArt) 
		{
			case "bebidas":
				cantBebidas++;
				break;

			case "lacteos":
				
				if(flagLacteo == 0 || precioArt > precioLacteoMax) 
				{
					precioLacteoMax = precioArt;
					nombreLacteoMax = nombreArt;
					flagLacteo = 1;

				}
				break;
			case "almacen":
			case "limpieza":
				if(flagArt == 0 || precioArt > precioArtMax) 
				{
					precioArtMax = precioArt;
					nombreArtMax = nombreArt;
					flagArt = 1; // agregue cambio de flag 10/08 -- 5:46 AM

				}
				break;


			default:
				alert("Error");
				break;	




		}

		respuesta = prompt("Desea ingresar otro articulo? si/no").toLowerCase();



	} while(respuesta == "si");




document.write("Articulo con mayor precio: " + nombreArtMax + ", con un precio de $" + precioArtMax + "<br>");
document.write("Lacteo con mayor precio: " + nombreLacteoMax +", con un precio de $" + precioLacteoMax + "<br>");
document.write("Cantidad de bebidas: " + cantBebidas + "<br>");








	
}

	

	
