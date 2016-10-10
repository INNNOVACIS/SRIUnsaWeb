investigacionApp.directive('fileUpload', ['$parse', function ($parse) {
     return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileUpload);
            var modelSetter = model.assign;
 
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);


/*
investigacionApp.directive('fileModel', fileModel);

fileModel.$inject=['$parse']
function fileModel ($parse) {
    //Detecta el cambio en el input y lo asigna al model...
    //Tal como lo explica aca: http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}*/