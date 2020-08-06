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
	let pregUsuario;
	let nombreArticulo;
	let categoriaArticulo;
	let precioArticulo;
	let precioArticuloMayor;
	let articuloLacteos;

	do 
	{
		

		nombreArticulo = prompt("Ingrese el nombre del articulo");

		categoriaArticulo = prompt("Ingrese la categoria del articulo (lacteos,limpieza,bebidas,etc)");

		precioArticulo = prompt("Ingrese el precio del articulo");

		if (precioArticulo > precioArticuloMayor) 
		{
			precioArticuloMayor = precioArticulo;
		}

		else if ((precioArticulo > precioArticuloMayor) && categoriaArticulo == "lacteos") 
		{
			articuloLacteos = precioArticulo;
		}



		pregUsuario = prompt("Desea ingresar mas articulos? si/no");



	} while(pregUsuario == "si")





	
}