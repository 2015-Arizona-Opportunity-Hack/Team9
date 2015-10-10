'use strict;'

var app = angular.modules('mainApp', []);

app.controller('pageController', function(){
  this.page = 0;

  this.selectPage = function(page){
    this.page = page;
  };

  this.isSelected = function(page){
    this.page === page;
  };

});
