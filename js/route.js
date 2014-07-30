
app.config(function($routeProvider) {
    $routeProvider.
      when('/upcoming/:pageID', {
        templateUrl: 'upcoming.html',
        controller: 'DataController'
      }).
     when('/movie/:movieID', {
        templateUrl: 'moviePage.html',
        controller: 'MovieController'
      }).
	  when('/search/:searchQuery/:pageID', {
        templateUrl: 'upcoming.html',
        controller: 'SearchController'
      }).
	  when('/newRelease/:country/:pageID', {
        templateUrl: 'upcoming.html',
        controller: 'NewReleaseController'
      }).
      otherwise({
        redirectTo: '/main/1'
      });
  });