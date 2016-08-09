
angular.module('starter', ['ionic', 'starter.controllers','chart.js','filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
       StatusBar.styleDefault();
    }

  }); 
  	document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("ad9619ce-0f74-42bf-a7da-494c850647f4",
                                 {googleProjectNumber: "355754500942"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}, false);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

 .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.new', {
    url: '/new',
    views: {
      'menuContent': {
        templateUrl: 'templates/new.html'
      }
    }
  })
  .state('app.recentans', {
    url: '/recentans',
    views: {
      'menuContent': {
        templateUrl: 'templates/recentlyanswered.html'
      }
    }
  })
  .state('app.mostresponse', {
    url: '/mostresponse',
    views: {
      'menuContent': {
        templateUrl: 'templates/mostresponse.html'
      }
    }
  })
  .state('app.noans', {
    url: '/noans',
    views: {
      'menuContent': {
        templateUrl: 'templates/noans.html'
      }
    }
  })
  .state('app.questioncomm', {
    url: '/questioncomm/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/questioncomm.html'
      }
    }
  })
  .state('app.anscomm', {
    url: '/anscomm/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/anscomm.html'
      }
    }
  })
  .state('app.events', {
    url: '/events',
	views: {
      'menuContent': {
        templateUrl: 'templates/Events.html',
		controller:'eventsCtrl'
      }
    },
	controller:'eventsCtrl'
  })
  
  .state('answer', {
    url: '/answer/:id',
   
        templateUrl: 'templates/que_ans.html'
     
  })
  .state('app.question', {
    url: '/questions',
    views: {
      'menuContent': {
        templateUrl: 'templates/question.html'
      }
    },
	controller:'AllquestionsCtrl'
  })
  
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    },
	controller:'proCtrl'
  })
  
  .state('app.backrecent', {
    url: '/backrecent/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/backrecent.html'
      }
    },
	//controller:'ansCtrl'
  })
  .state('app.backres', {
    url: '/backres/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/backres.html'
      }
    },
	controller:'anserCtrl'
  })
  
  .state('register', {
      url: '/register',
    
          templateUrl: 'templates/register.html',
        
    })

	.state('registerspecial', {
      url: '/registerspecial',
    
          templateUrl: 'templates/registerspec.html',
        
    })
  

  .state('app.browse', {
      url: '/browse',
       //resolve:{
		  //"check":function($state){
			  	//var name=localStorage.getItem("signed");
				
			  //if(!name){
				 // $state.go("playlists");
			 // }
		  //}
	 // },
	  views:{
			  
			  'menuContent': {
				templateUrl: 'templates/browse.html'
			 
			}
    }
    })
	.state('app.news', {
      url: '/news',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/news.html'
      }
    }
    })
	.state('app.faqs', {
      url: '/faqs',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/faqs.html'
      }
    }
    })
	
	.state('app.contactus', {
      url: '/contactus',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/contactus.html'
      }
    }
    })
	.state('app.pollsresult', {
		  url: '/pollsresult/:id',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/polls_results.html'
		  }
		},
		controller:'pollsresultsCtrl'
    })
	
	.state('app.ask_specialist', {
		  url: '/ask_specialist',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/ask_specialist.html'
		  }
		},
		
    })
	
	.state('app.ask_community', {
		  url: '/ask_community',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/ask_community.html'
		  }
		},
		
    })
	
	.state('app.pieresult', {
      url: '/pieresult/:id',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/piechart.html'
      }
    },
	controller:'resultpieCtrl'
	
    })
	.state('app.questions_to_expert', {
      url: '/questions_to_expert',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/que_to_expert.html'
      }
    },
	controller:'resultpieCtrl'
	
    })
	.state('app.questions_to_community', {
      url: '/questions_to_community',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/que_to_community.html'
      }
    },
	controller:'resultpieCtrl'
	
    })
    .state('playlists', {
      url: '/playlists',
       resolve:{
		  "check":function($state){
			  	var name=localStorage.getItem("signed");
				
			  if(name){
				 
				  location.href="#/app/browse";
			  }
		  }
	  },
          templateUrl: 'templates/playlists.html',
        
    })
	
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
 
  $urlRouterProvider.otherwise('/playlists');
});
