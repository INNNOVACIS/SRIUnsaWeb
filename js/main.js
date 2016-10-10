var investigacionApp = angular.module('investigacionApp', [
	'ngRoute', 
	'ngAnimate', 
	'ui.bootstrap'
]);

investigacionApp.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl : 'views/home.html',
		controller : 'homeController'
	})
	.when('/investigacion',{
		templateUrl : 'views/investigacion.html',
		controller : 'investigacionController'
	})
	.when('/actividades',{
		templateUrl : 'views/actividades.html',
		controller : 'actividadesController'
	})
	.when('/addActividad',{
		templateUrl : 'views/agregarActividades.html',
		controller : 'addActividadController'
	})
	.when('/registrar-investigacion', {
		templateUrl : 'views/registrar-investigacion.html',
		controller : 'registrarInvestigacionController'	
	})
	/*.when('/estadoActividades',{
		templateUrl : 'views/estadoActividades.html',
		controller : 'estadoActividadesController'
	})*/
	.when('/estadoActividades',{
		templateUrl : 'views/actividadesRevisadas.html',
		controller : 'actividadesRevisadasController'
	})
	.when('/reportabilidad',{
		templateUrl : 'views/reportabilidad.html',
		controller : 'reportabilidadController'
	})
	.when('/actividadesRevisadas',{
		templateUrl : 'views/actividadesRevisadas.html',
		controller : 'actividadesRevisadasController'
	})
	.when('/actividadesPendientes',{
		templateUrl : 'views/actividadesPendientes.html',
		controller : 'actividadesPendientesController'
	})
	.when('/relacionDocentes',{
		templateUrl : 'views/relacionDocentes.html',
		controller : 'relacionDocentesController'
	})
	.when('/configuracion',{
		templateUrl : 'views/configuracion.html',
		controller : 'configuracionController'
	})
	.when('/generarDocente',{
		templateUrl : 'views/generarDocente.html',
		controller : 'generarDocenteController'
	})
	.when('/uploadFile',{
		templateUrl : 'views/uploadFile.html',
		controller : 'uploadFileController'
	})
	.when('/',{
		templateUrl : 'views/login.html',
		controller : 'loginController'
	});
});
