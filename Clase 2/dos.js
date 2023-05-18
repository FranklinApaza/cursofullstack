/*var dato=20; //numericos
		console.log(dato);
		console.log(typeof dato);

		dato='Clase 2'; //string
		console.log(dato);
		console.log(typeof dato);

		dato='30';
		var otroValor = Number(dato);
		console.log(otroValor);
		console.log(typeof otroValor);

		var activo=false; //boolean
		console.log(activo);
		console.log(typeof activo);

		var persona={ //Objeto
			nombre: 'Ramiro', edad: 22
		};
		var personas=[
				{nombre: 'Carlos', edad: 35},
				{nombre: 'Maria', edad: 30},
				persona
			];

		var funcionario={
			nombre: 'Julia', hijos:[
					{nombre: 'Gabino', edad: 5},
					{nombre: 'Carla', edad: 15},
				]
		};
		
		console.log(persona);
		console.log(typeof persona);
		console.log(personas);
		console.log(typeof personas);
		console.log(funcionario);
		
		var sO = JSON.stringify(persona); //convierte de Objeto a String, manteniendo las propiedades del JSON
		console.log(sO);
		var nuevaPersona = JSON.parse(sO); //convierte un string (que tenga formato JSON) en Objeto
		console.log(nuevaPersona);

		//Operadores, aritmeticos +-
		var n1=1;
		var n2='1';
		if(n1===n2){
			console.log('VERDAD');
		}
		// condicionales, if, if-else, if-else if

		// Loops
		var maximo=5
		for(let i=0;i<=maximo;i++){
			console.log('Contador #'+i);
			//debugger;
		}
		//while
		console.log('While');
		while(maximo>=0){
			console.log('Contador #'+maximo);
			maximo--;
		}
		//continue, break
		console.log('Break and continue');
		maximo=10
		for(let i=0;i<=maximo;i++){
			if(i==3){
				//break;
				continue;
			}
			console.log('Contador #'+i);
		}*/

		//funciones, con parametros, con parámetros por defecto
		function nombreFuncion(valor1=1, valor2=3899){
			var n1=valor1;
			var n2=valor2;
			return n1+n2;
		}

		var respuesta = nombreFuncion(3, 86777);
		//console.log('La suma es: '+respuesta);

		//funciones, con parámetros REST -> contrae
		function datos(nombres, apellidos, ...masInfo) {
			console.log('Nombre: '+nombres);
			console.log('Apellidos: '+apellidos);
			console.log('Más info: '+masInfo);
		}
		//datos('Jose Antonio', 'Gutierrez', 'Delgado', 'Usa lentes', 'Bebe cada viernes');

		//funciones con parámetro SPREAD -> expande
		function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros){
			console.log('Ingrediente 1: ', ingrediente1);
			console.log('Ingrediente 2: ', ingrediente2);
			console.log('Ingrediente 3: ', ingrediente3);
			console.log('Otros: ', otros);
		}
		var a1=[
				['Cebada', 'Ajo'],
				['Cebolla', 'Sal']
			];
		var ingredinetesBase=["Pollo", "Tomate"];
		//cocinar(...a1, "Arroz", "Pescado", 'Aji', 'Maíz');

		//funciones anónimas
		var x = function(nombre){
			var mensaje= "Hola "+nombre;
			return mensaje;
		}
		//console.log(x('Luis Lopez'));

		//funcion flecha o arrow
		var generar=(dato1, dato2)=> {
			var dato3=5;
			return dato1+dato2+dato3;
		}
		//console.log(generar(5, 8));

// uso del this
/*var btn=document.querySelector('.boton');
btn.addEventListener('click', function(){
	console.log(this.innerHTML);
	//alert('funciono');
});*/

//eventos, ahondar

// Trabajo con arrays
var platillos = ['Ceviche', 'Sajta', 'Picante', 'Falso conejo'];
console.log('Hay '+ platillos.length +' platillos'); //length: obtiene el tamaño del array
console.log('Antes ',platillos);

platillos.push('Chairo'); //añade, agrega
console.log('Después ', platillos);

var plato = platillos.pop(); //obtiene el ultimo
console.log(plato);

var texto = platillos.join(); //convierte un array en texto
console.log(texto);

var cadenaValores = "Tacos|Miel|Cereza";
var ar = cadenaValores.split('|'); //convierte en array un texto, separado por "patron"
console.log(ar);

//iteraciones de arrays
for (let i in platillos){
	//console.log(platillos[i]);
}

//forEach
console.log('----------forEach--------------');
platillos.forEach(
		(item) => {
			console.log(item);
		}
	);

// Obteniendo datos de server
var btn=document.querySelector('.boton');
var contenedor =document.getElementById('contenedor');
var paises=null;
btn.addEventListener('click', function(){
	fetch('https://restcountries.com/v3.1/all', {method:'GET'})
	.then(items => items.json())
	.then(items => {
		paises = items;
		mostraPaises(paises);
	})	
});
function mostraPaises(paises){
	paises.forEach(
		(item) => {
			let nombreP = document.createElement('h2');
			let contenido = document.createElement('p');
			nombreP.innerHTML= item.name.official;
			contenido.innerHTML = item.region;
			contenedor.appendChild(nombreP);
			contenedor.appendChild(contenido);
		}
	);
}