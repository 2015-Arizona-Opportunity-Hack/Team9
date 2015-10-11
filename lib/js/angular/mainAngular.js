'use strict;'

var app = angular.module('mainApp', ['textAngular', 'ngTwitter', 'ngResource']);
app.config(['$provide', function($provide){
  // this demonstrates how to register a new tool and add it to the default toolbar
  $provide.decorator('taOptions', ['$delegate', function(taOptions){
    // $delegate is the taOptions we are decorating
    // here we override the default toolbars and classes specified in taOptions.
    taOptions.forceTextAngularSanitize = true; // set false to allow the textAngular-sanitize provider to be replaced
    taOptions.keyMappings = []; // allow customizable keyMappings for specialized key boards or languages
    taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft','justifyCenter','justifyRight', 'justifyFull'],
        ['html', 'insertImage', 'insertLink']
    ];
    taOptions.classes = {
        focussed: 'focussed',
        toolbar: 'btn-toolbar',
        toolbarGroup: 'btn-group',
        toolbarButton: 'btn btn-default',
        toolbarButtonActive: 'active',
        disabled: 'disabled',
        textEditor: 'form-control',
        htmlEditor: 'form-control'
    };
    return taOptions; // whatever you return will be the taOptions
  }]);

  // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
  $provide.decorator('taTools', ['$delegate', function(taTools){
    taTools.bold.iconclass = 'icon-bold';
    taTools.italics.iconclass = 'icon-italic';
    taTools.underline.iconclass = 'icon-underline';
    taTools.ul.iconclass = 'icon-list-ul';
    taTools.ol.iconclass = 'icon-list-ol';
    taTools.undo.iconclass = 'icon-undo';
    taTools.redo.iconclass = 'icon-repeat';
    taTools.justifyLeft.iconclass = 'icon-align-left';
    taTools.justifyRight.iconclass = 'icon-align-right';
    taTools.justifyCenter.iconclass = 'icon-align-center';
    taTools.clear.iconclass = 'icon-ban-circle';
    taTools.insertLink.iconclass = 'icon-link';
    taTools.insertImage.iconclass = 'icon-picture';
    // there is no quote icon in old font-awesome so we change to text as follows
    delete taTools.quote.iconclass;
    taTools.quote.buttontext = 'quote';
    return taTools;
  }]);
}]);
app.controller('pageController', function($scope, $http, eventFactory, volunteerFactory){

  this.page = 0;

  this.selectPage = function(page){
    this.page = page;
  };

  this.isSelected = function(page){
    return this.page === page;
  };

  $scope.pages = {
    1: {
      name: "Food Bank",
      page: 1,
      content: "Flexitarian keytar pug salvia, lumbersexual asymmetrical Banksy Godard Portland bicycle rights tattooed narwhal gentrify twee butcher. Aesthetic brunch cray blog, 3 wolf moon swag tattooed post-ironic kitsch raw denim hashtag. Migas McSweeney's gastropub, cliche asymmetrical sriracha church-key leggings Thundercats stumptown Blue Bottle freegan."
    },
    2: {
      name: "Family Resources",
      page: 2,
      content: "Jean shorts slow-carb heirloom, DIY PBR&B pork belly kogi four dollar toast church-key mlkshk Blue Bottle Truffaut. Echo Park Portland swag normcore heirloom small batch, Marfa street art aesthetic 3 wolf moon tousled retro. Lomo readymade Kickstarter direct trade next level, squid master cleanse. Chambray Marfa PBR, viral flannel Wes Anderson High Life."
    },
    3: {
      name: "CAP",
      page: 3,
      content: "Vegan lo-fi beard, VHS drinking vinegar cliche crucifix tattooed chia whatever cold-pressed 3 wolf moon. Letterpress Marfa Odd Future, readymade scenester lumbersexual Portland semiotics crucifix hella direct trade trust fund try-hard. Food truck church-key Echo Park messenger bag, tofu Etsy raw denim High Life chambray heirloom mixtape trust fund literally American Apparel."
    },
    4: {
      name: "Seniors",
      page: 4,
      content: "Chia readymade YOLO scenester quinoa pour-over brunch. Squid mustache crucifix, sartorial Odd Future 90's before they sold out church-key small batch typewriter hoodie selfies retro iPhone. Wayfarers aesthetic skateboard, fingerstache XOXO four loko raw denim Banksy church-key quinoa chia hella fap put a bird on it."
    },
    5: {
      name: "iHelp",
      page: 5,
      content: "Roof party cronut lomo Godard PBR. Pitchfork plaid aesthetic occupy, Austin viral food truck vinyl kitsch roof party Helvetica. Lo-fi disrupt tofu mixtape, cold-pressed shabby chic organic banh mi hella bicycle rights mlkshk street art mumblecore. Single-origin coffee mustache ennui next level."
    },
    6: {
      name: "Volunteer",
      page: 6,
      content: ""
    },
    7: {
      name: "Events",
      page: 7,
      content: ""
    },
    8: {
      name: "Donate",
      page: 8,
      content: ""
    }
  };

  //Functions for volunteers
  $scope.newVolunteer = {
    firstname: "Caleb",
    lastname: "Frieze",
    phone: "4805555555",
    email: "test@test.com",
    birthdate: "07/07/1990",
    address: {
      address_1: "123 main st",
      address_2: "",
      city: "Gilbert",
      state: "AZ",
      zip: "85296"
    },
    oi: {
      work: true,
      friend: false,
      news: false,
      other: false,
      otherInfo: ""
    },
    aoi: {
      operations: {
        officeAdmin: true,
        accounting: false,
        maintenance: true
      },
      foodDonation: {
        pickups: true,
        sorting: true,
        distribution: false
      },
      spec_events:{
        esol: false,
        opSanta: false,
        back2school: true,
        fundraising: true
      }
    },
    additional: {
      fluent: {
        speak: "Spanglish",
        write: ""
      },
      volunteerInfo: "I do a lot of volunteering when I feel like it"
    },
    references: [
      {
        name: "Caleb Frieze",
        relationship: "Bro",
        phone: "4805555555",
        email: "test@test.com",
        address: {
          address_1: "123 main st",
          address_2: "",
          city: "Gilbert",
          state: "AZ",
          zip: "85296"
        }
    },
    {
      name: "Caleb Frieze",
      relationship: "Bro",
      phone: "4805555555",
      email: "test@test.com",
      address: {
        address_1: "123 main st",
        address_2: "",
        city: "Gilbert",
        state: "AZ",
        zip: "85296"
      }
  }
  ],
    emergencyContact: {
      name: "Caleb Frieze",
      relationship: "Bro",
      phone: "4805555555"
    }
  };

  $scope.postNewVolunteer = function(){
    volunteerFactory.save($scope.newVolunteer, function(){
      $scope.newVolunteer = {};
    });
  };

  //Get All Events

  $scope.events = eventFactory.query();
  $scope.newEvent = {};
  $scope.postEvent = function(){
    $http({
      method: 'POST',
      url: '/api/events',
      data: {
        name: $scope.newEvent.name,
        address_1: $scope.newEvent.location.address_1,
        address_2: $scope.newEvent.location.address_2,
        city: $scope.newEvent.location.city,
        state: $scope.newEvent.location.state,
        zip: $scope.newEvent.location.zip,
        cost: $scope.newEvent.cost,
        timeStart: $scope.newEvent.timeStart,
        timeEnd: $scope.newEvent.timeEnd,
        info: $scope.newEvent.info
      }
    });
    $scope.events = eventFactory.query();
    $scope.newEvent = {};
  };
  $scope.deleteEvent = function(eventId){
    var con = confirm("Are you sure you want to delete this event?");
    if(con === true){
      $http({
        method: 'DELETE',
        url: '/api/events/' + eventId
      });
      $scope.events = eventFactory.query();
    }
  };
  $scope.editEvent = {};
  $scope.eventEditable = false;
  $scope.makeEditable = function(eventId){
    $scope.eventEditable = eventId;
    $http({
      method: 'GET',
      url: '/api/events/' + eventId
    }).then(function(data){
      $scope.editEvent = data.data;
      console.log(data);
    }, function(err){
      console.log(err);
    });
  };
  $scope.eventIsEditable = function(eventId){
     return $scope.eventEditable === eventId;
  };
  $scope.saveEditEvent = function(eventId){
    $http({
      method: 'PUT',
      url: '/api/events/' + eventId,
      data: $scope.editEvent
    }).then(function(res){
      $scope.events = eventFactory.query();
      $scope.eventEditable = false;
    }, function(err){
      console.log(err);
    });
  };

  //Function to send donation

  $scope.donate = function(){

  };

});

app.controller('footerController', function(){
  this.footer = 1;

  this.isSelected = function(footer){
    return this.footer === footer;
  };

  this.selectFooter = function(footer){
    this.footer = footer;
  };
});

app.controller('socialController', function($scope, $http){
  var creds = btoa(":");
  $scope.twit = function(){

  };
});

app.factory('eventFactory', function($resource){
  return $resource('/api/events');
});
app.factory('volunteerFactory', function($resource){
  return $resource('/api/volunteers');
});
