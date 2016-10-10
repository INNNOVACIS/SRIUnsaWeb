investigacionApp.controller('homeController', function($log, $scope, $location, $rootScope, $filter, 
    HomeService, SharedService) {
    // create a message to display in our view

    // START example DataPicker
    $scope.dt = new Date(2020, 5, 22);

    $scope.open = function($event) {
    $scope.status.opened = true;
    };

    $scope.format = 'dd-MMMM-yyyy';

    $scope.status = {
    opened: false
    };
    // END example DataPicker

    $scope.Actividad = '';
    $scope.actividad1_show = false;
    $scope.actividad2_show = false;
    $scope.actividad3_show = false;
    $scope.actividad4_show = false;

    $scope.actividadesInvestigacion = [
		'Investigación Formativa',
		'Asesoria de Tesis',
		'Investigaciones Básicas y Aplicadas',
		'Producción Intelectual'
	];

	var areaList = [
        { "id": 1, "area": "Ciencias Agrícolas" },
        { "id": 2, "area": "Ciencias Médicas y de Salud" },
        { "id": 3, "area": "Ciencias Naturales" }
    ];

    var subArealist = [
        {"Id":1, "subArea":"Agricultura, Silvicultura y Pesca", "areaId": 1},
        {"Id":2, "subArea":"Ciencias Animales y lechería", "areaId": 1},
        {"Id":3, "subArea":"Ciencias Veterinarias", "areaId": 1},
        {"Id":4, "subArea":"Medicina Básica", "areaId": 2},
        {"Id":5, "subArea":"Medicina Clínica", "areaId": 2},
        {"Id":6, "subArea":"Ciencias de la Salud", "areaId": 2},
        {"Id":7, "subArea":"Matemáticas", "areaId": 3},
        {"Id":8, "subArea":"Computación y Ciencias de la Información  ", "areaId": 3},
        {"Id":9, "subArea":"Ciencias Físicas", "areaId": 3}
    ];

    var disciplinalist = [
        {"Id":1, "disciplina":"Agricultura", "subAreaId": 1},
        {"Id":2, "disciplina":"Forestal", "subAreaId": 1},
        {"Id":3, "disciplina":"Ciencias Animales y lechería", "subAreaId": 2},
        {"Id":4, "disciplina":"Crías y mascotas", "subAreaId": 2},
        {"Id":5, "disciplina":"Ciencias Veterinarias", "subAreaId": 3},
        {"Id":6, "disciplina":"Anatomía y Morfología", "subAreaId": 4},
        {"Id":7, "disciplina":"Genética humana", "subAreaId": 4},
        {"Id":8, "disciplina":"Toxicología", "subAreaId": 4},
        {"Id":9, "disciplina":"Obstetricia y Ginecología", "subAreaId": 5},
        {"Id":10, "disciplina":"Pediatría", "subAreaId": 5},
        {"Id":11, "disciplina":"Enfermería", "subAreaId": 6},
        {"Id":12, "disciplina":"Nutrición y Dietas", "subAreaId": 6},
        {"Id":13, "disciplina":"Matemáticas Puras", "subAreaId": 7},
        {"Id":14, "disciplina":"Matemáticas Aplicadas", "subAreaId": 7},
        {"Id":15, "disciplina":"Ciencias de la Computación", "subAreaId": 8},
        {"Id":16, "disciplina":"Ciencias de la Información y Bioinformática", "subAreaId": 8},
        {"Id":17, "disciplina":"Física Atómica, Molecular y Química", "subAreaId": 9},
        {"Id":18, "disciplina":"Física de la Materia", "subAreaId": 9},
        {"Id":19, "disciplina":"Física Nuclear", "subAreaId": 9},
        {"Id":20, "disciplina":"Acústica", "subAreaId": 9}
    ];

	$scope.customer ={
        Area:'', 
        SubArea:'', 
        Disciplina: ''
    };
	

    $scope.getArea = function(){
    	return areaList;
    };

    $scope.getSubArea = function(){
    	$scope.subAreas = ($filter('filter')(subArealist, {areaId: $scope.customer.Area}));
    	
    };
    $scope.getDisciplina = function(subAreaId){    	
    	$scope.disciplinas = ($filter('filter')(disciplinalist, {subAreaId: $scope.customer.SubArea}));      	
    };

    $scope.areas = $scope.getArea();

    $scope.actividadChange = function(seleccionado){
    	$scope.Actividad = seleccionado;
    	switch ($scope.Actividad) {
		    case 'Investigación Formativa':
		        $scope.actividad1_show = true;
			    $scope.actividad2_show = false;
			    $scope.actividad3_show = false;
			    $scope.actividad4_show = false;
		        break;
		    case 'Asesoria de Tesis':
		        $scope.actividad1_show = false;
			    $scope.actividad2_show = true;
			    $scope.actividad3_show = false;
			    $scope.actividad4_show = false;
		        break;
		    case 'Investigaciones Básicas y Aplicadas':
		        $scope.actividad1_show = false;
			    $scope.actividad2_show = false;
			    $scope.actividad3_show = true;
			    $scope.actividad4_show = false;
		        break;
		    case 'Producción Intelectual':
		        $scope.actividad1_show = false;
			    $scope.actividad2_show = false;
			    $scope.actividad3_show = false;
			    $scope.actividad4_show = true;
		        break;
		}
    	console.log($scope.Actividad);
    }

    /********** FILE UPLOAD **********/  

    $scope.files = [];
    if($scope.archivo != null){
        files.push($scope.archivo);
    }
    console.log("archivo :: ", $scope.archivo);
    console.log("files :: ", $scope.files);

    var homeServiceSuccess = function(response) {        
        $log.debug(response);
    };

    var homeServiceError = function(response) {
        $log.debug(response);
    };

    $scope.uploadFile = function(){

        var file = $scope.archivo;
        var formData = new FormData();
        formData.append('file', file);
        
        console.log("archivo :: ", $scope.archivo);
        console.log("FILE :: ", file);
        console.log("FD :: ", formData);

        HomeService.sendFile(formData, true).then(homeServiceSuccess, homeServiceError); 

    };
});