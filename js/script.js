var Pokemon = angular.module("Pokemon", []);
//Creacion del controlador
Pokemon.controller("ListadoPokemon", function ($scope,$http){
	//Listado de todos los pokemon
	$scope.Listado = [];
	//Variable para ver pokemones
	$scope.conteo = 0;
	//Ciclo para Repetir 20 veces un pokemon
	for(var y=0;y<=20;y++){
	//La variable va a ser igual a la variable mas uno, osea le estamos aumentando para que aparezcan los pokemones
		$scope.conteo = $scope.conteo + 1

		$http({
		//llamando al metodo despues de
			method: "POST",
		//llamando a pokeapi y le estamos sumando la variable conteo para que aparezca un nuevo pokemos
			url: "https://pokeapi.co/api/v2/pokemon/"+$scope.conteo
		//entonces volver a llamar con exito
		//lo de verde puede ir cualquier nombre
		}).then(function successCalback(objeto) {
			$scope.Listado.push(objeto.data)
			console.log($scope.Listado)
		})
	}

});
 




var myweb = angular.module ("myweb", []);
myweb.controller("Login", function ($scope){
	//funcion Inicio de sesion
	$scope.nombre = "pokeMerrick"
	$scope.contrasena = "mon"
	


	$scope.Inicio =function(a,b){
		if (a == $scope.nombre && b == $scope.contrasena) {
			window.open("../pages/pokedex.html","_parent") 
		} else {
					swal("Usuario incorrecto o contraseña incorrecto")
				}
		}




});































































































/*   Este solo muestra un pokemon con su nombre y su imagen by Merrick
var Pokemon = angular.module("Pokemon", []);
//Creacion del controlador
Pokemon.controller("ListadoPokemon", function ($scope,$http){
	$scope.URL="http://pokeapi.co/api/v2/pokemon/800/"
	$scope.nombre="";
	$scope.imagen="";
	//Listado de todos los pokemon
	//creando un diccionario
	$http({
	//llamando al metodo despues de
		method: "POST",
		url: $scope.URL
	//entonces volver a llamar con exito
	//lo de verde puede ir cualquier nombre
	}).then(function successCalback(objeto) {
		console.log(objeto.data.name)
		console.log(objeto.data.sprites.front_default)

		$scope.nombre=objeto.data.name;
		$scope.imagen=objeto.data.sprites.front_default;
	})

});
*/








