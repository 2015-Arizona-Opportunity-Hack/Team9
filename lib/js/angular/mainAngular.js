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
      content: "<p>Each year CCCC distributes over 15,000 food boxes with enough food to feed over 50,000 adults and children.</p> <p>Persons needing emergency food are referred by a variety of agencies but primarily by the CAP (Community Action Program) office.</p> <p>Other referrals come from Child Protective Services, non profits, churches, schools, the Chandler Police Department’s Victim Services and the Chandler Fire Department.</p> <p>Emergency Food Boxes Tailored to family size and special dietary needs including infants, children, and homeless individuals.</p> <p>Emergency Food Distribution: Monday – 12:00 through 3:00 pm Tuesday, Wednesday and Thursday – 9:00 through 12:00 pm</p> <p>Supplemental Food Boxes Distributed weekly containing fresh perishable food</p> <p>Supplemental Food Distribution: Every Friday – 9:00 through 11:00</p> <p>Food Donations Food is donated from local grocers and restaurants, individuals, clubs, businesses, faith organizations and more.</p> <p>Federal food comes through the United Food Bank.</p> <p>All donations are accepted during business hours. Please contact the office for special arrangements.</p>"
    },
    2: {
      name: "Family Resources",
      page: 2,
      content: "FAMILY RESOURCE CENTER Family Resource Center Activities The Family Resource Center provides a safe, positive environment for family development. Their model is to meet some of the needs families have outside of nutritional. Giggles Squiggles and Squirms: Early Literacy Program 3-5 Year Olds – Monday & Thursday between 1:00 and 3:00 pm Interactive Family Play: Call for an open time for just your family or join us every Friday between 8:30 and 10:00 am Baby Brain Box: New Directions Institute – Getting Your Child’s Brain Ready for School; please call for more information or to schedule an appointment. Weekend Homeless Meal Program: Touch of Love Ministries -Fellowship meal open to any and all on the last Saturday of the month – November 24th between 3:00 and 5:00 pm. Free Fluoride Treatments: Dignity Health – children ages 0-5 during supplemental food distribution – November 30th between 7:30 and 10:00 am. Narcotics Anonymous: Meetings are every Wednesday, Friday, and Sunday at 7:00 pm."
    },
    3: {
      name: "CAP",
      page: 3,
      content: "CAP Application English and CAP Application Spanish"
    },
    4: {
      name: "Seniors",
      page: 4,
      content: "Senior ProgramsOur Senior Centers provide hours of camaraderie, intellectual stimulation and nutritious meals to the frail, elderly and disabled in our communities.  In addition to serving a hot meal, both centers offer an array of activities, outings, workshops, classes, medical programs, transportation, referrals, and volunteer opportunities.  We operate the local senior center for the Town of Gilbert and the senior meals program in the City of Chandler. Click For Volunteer Opportunities Gilbert Senior Center Events Calendar and Lunch Menu Last year, we provided: • 29,984 Meals in the Dining Room at our Centers • 31,520 Meals Delivered to the Homebound or Elderly • 843 Activities with 17,146 Participants • 46,576 Dial A Ride Tickets for transportation Congregate Meal Program • On-site nutritious meals • Opportunities for social interactions to combat loneliness and isolation Home Delivered Meal Program • Meal delivery to the homes of frail, elderly, disabled and otherwise home-bound persons. • Wellness checks to ensure safety and well-being.  Our monitors report tasks, such as changing a light bulb that the client cannot reach, to advising family members or case managers of the need for medical attention. Activities • Over 840 activities provided each year: o Zumba o BINGO o Restaurant Outings o Tai Chi If you are interested in more information please contact: Chandler Senior Center 202 E. Boston St. Chandler, AZ 85225 (480) 782-2721 Gilbert Senior Center 130 N. Oak St. Gilbert, AZ 85233 (480) 503-6061"},
    5: {
      name: "I-Help",
      page: 5,
      content: "Interfaith Homeless Emergency Lodging Program  Chandler Christian Community Center (CCCC) offers the only homeless shelter in the City of Chandler, the Interfaith Homeless Emergency Lodging Program (I-HELP). In partnership with faith-based organizations and community agencies in Chandler, Gilbert, and Tempe, Chandler I-HELP provides a safe place to sleep and a hot meal for homeless adults 7 nights per week, 365 days per year. I-HELP also offers case management services to connect homeless individuals to the vital resources needed to regain self-sufficiency and break the vicious cycle of homelessness. Through our mobile shower unit, the “Chandler Clean Machine,” I-HELP provides guests with ready access to showers, an invaluable tool in gaining and maintaining employment. For emergency shelter, please report to intake by 5:15 PM at the following locations: MONDAY – FRIDAY Community of Christ 730 N Alma School Rd Chandler, AZ 85224 SATURDAY – SUNDAY Chandler Christian Community Center 345 S. California St Chandler, AZ 85225"
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
