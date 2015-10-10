'use strict;'

var app = angular.module('mainApp', []);

app.controller('pageController', function($scope){
  this.page = 0;

  this.selectPage = function(page){
    this.page = page;
  };

  this.isSelected = function(page){
    this.page === page;
  };

  $scope.navLinks = {
    0: {
      name: "Food Bank",
      page: 0,
      content: "Flexitarian keytar pug salvia, lumbersexual asymmetrical Banksy Godard Portland bicycle rights tattooed narwhal gentrify twee butcher. Aesthetic brunch cray blog, 3 wolf moon swag tattooed post-ironic kitsch raw denim hashtag. Migas McSweeney's gastropub, cliche asymmetrical sriracha church-key leggings Thundercats stumptown Blue Bottle freegan."
    },
    1: {
      name: "Family Resources",
      page: 1,
      content: "Jean shorts slow-carb heirloom, DIY PBR&B pork belly kogi four dollar toast church-key mlkshk Blue Bottle Truffaut. Echo Park Portland swag normcore heirloom small batch, Marfa street art aesthetic 3 wolf moon tousled retro. Lomo readymade Kickstarter direct trade next level, squid master cleanse. Chambray Marfa PBR, viral flannel Wes Anderson High Life."
    },
    2: {
      name: "CAP",
      page: 2,
      content: "Vegan lo-fi beard, VHS drinking vinegar cliche crucifix tattooed chia whatever cold-pressed 3 wolf moon. Letterpress Marfa Odd Future, readymade scenester lumbersexual Portland semiotics crucifix hella direct trade trust fund try-hard. Food truck church-key Echo Park messenger bag, tofu Etsy raw denim High Life chambray heirloom mixtape trust fund literally American Apparel."
    },
    3: {
      name: "Seniors",
      page: 3,
      content: "Chia readymade YOLO scenester quinoa pour-over brunch. Squid mustache crucifix, sartorial Odd Future 90's before they sold out church-key small batch typewriter hoodie selfies retro iPhone. Wayfarers aesthetic skateboard, fingerstache XOXO four loko raw denim Banksy church-key quinoa chia hella fap put a bird on it."
    },
    4: {
      name: "iHelp",
      page: 4,
      content: "Roof party cronut lomo Godard PBR. Pitchfork plaid aesthetic occupy, Austin viral food truck vinyl kitsch roof party Helvetica. Lo-fi disrupt tofu mixtape, cold-pressed shabby chic organic banh mi hella bicycle rights mlkshk street art mumblecore. Single-origin coffee mustache ennui next level."
    }
  };

});
