
(function(){

	var main = angular.module('main',['angular-carousel']);

	main.controller('IPadController',['$scope',function($scope){

    var slideCount = 4;
    var duration = 15000;

		this.index = 0;
    this.expectedNext = 1;

    //we try to predict the next slide; if we predict incorrectly, they've
    //manually changed slides, so we do nothing that iteration. this means if the 
    //use manually switches to a slide, they will always get at least the full duration
    //of a cycle to read it

    this.setNext = function(){

      var originalValue = this.index;

      if(this.index < (slideCount - 1)){
        this.index++;
      }else{
        this.index = 0;
      }

      if(this.index == this.expectedNext){
        $scope.$apply();
      }else{
        this.index = originalValue;
      }

      if(this.index == (slideCount - 1)){
        this.expectedNext = 0;
      }else{
        this.expectedNext = this.index + 1;
      }

    }

    setInterval(function(){
      this.setNext();
    }.bind(this),duration);

	}]);

})();
