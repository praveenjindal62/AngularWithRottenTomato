

app.controller('DataController',function($scope,$http,$routeParams){
console.log("Hello");
$scope.title="UPCOMING MOVIES";
$scope.name="OK DONE!!";
$scope.limit=5;
$scope.currpage=parseInt($routeParams.pageID);
$scope.caller="#/upcoming";
$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=zryzu3y2kvztg5435v54wfq7&callback=JSON_CALLBACK&page_limit='+$scope.limit+'&page='+$scope.currpage)
	.success(function(data){
		console.log("Success");
		ishow=true;
		$scope.name="Success";
		var mov=data.movies;
		console.log(data);
		$scope.movies=data.movies;
		var n=Math.ceil(data.total/$scope.limit);
		$scope.paginationParams=createParam($scope.total,$scope.currpage,n);
		var arr=new Array();
		for(i=0;i<$scope.paginationParams.length-2;i++)
			arr.push(i+1);
		$scope.pagination=arr;
		$scope.paginationParams=createParam($scope.total,$scope.currpage,n);
		console.log($scope.paginationParams);
		function createParam(t,p,l)
		{
			var ar=new Array(l+2);
			if(p==1)
			{
				ar[0]="disabled";
				ar[l+2-1]="";
			}
			if(p==l)
			{
				ar[0]="";
				ar[l+2-1]="disabled";
			}
			ar[p]="active";
			return ar;
		}
		})
	.error(function(data){
		$scope.name="Error";
		console.log("Error");
	});

});






app.controller('MovieController',function($scope,$http,$routeParams){
$scope.movieId=parseInt($routeParams.movieID);
var url='http://api.rottentomatoes.com/api/public/v1.0/movies/'+$scope.movieId+'.json?apikey=zryzu3y2kvztg5435v54wfq7&callback=JSON_CALLBACK';
console.log(url);
$http.jsonp(url)
	.success(function(data){
		$scope.movie=data;
		console.log(data);
		})
	.error(function(data){
		console.log("Error");
	});

});




app.controller('SearchController',function($scope,$http,$routeParams){
console.log("SearchController");
$scope.limit=5;
$scope.title="SEARCHED MOVIES";
$scope.currpage=parseInt($routeParams.pageID);
$scope.query=$routeParams.searchQuery;
$scope.caller="#/search/"+$scope.query;
console.log($scope.query+" "+$scope.currpage);
var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zryzu3y2kvztg5435v54wfq7&callback=JSON_CALLBACK&page_limit='+$scope.limit+'&q='+$scope.query+'&page='+$scope.currpage;
console.log(url);
$http.jsonp(url)
	.success(function(data){
		console.log("Success");
		ishow=true;
		$scope.name="Success";
		var mov=data.movies;
		console.log(data);
		$scope.movies=data.movies;
		var n=Math.ceil(data.total/$scope.limit);
		$scope.paginationParams=createParam($scope.total,$scope.currpage,n);
		var arr=new Array();
		for(i=0;i<$scope.paginationParams.length-2;i++)
			arr.push(i+1);
		$scope.pagination=arr;
		console.log($scope.paginationParams);
		function createParam(t,p,l)
		{
			console.log(l);
			var length=l;
			if(length>10)
			length=10;
			var ar=new Array(length+2);
			if(p==1)
			{
				ar[0]="disabled";
				ar[length+2-1]="";
			}
			if(p==l)
			{
				ar[0]="";
				ar[length+2-1]="disabled";
			}
			ar[p]="active";
			return ar;
		}
		})
	.error(function(data){
		$scope.name="Error";
		console.log("Error");
	});

});





app.controller('NewReleaseController',function($scope,$http,$routeParams){
console.log("NewReleaseController");
$scope.title="NEW RELEASE MOVIES";
$scope.limit=5;
$scope.currpage=parseInt($routeParams.pageID);
$scope.query=$routeParams.country;
$scope.caller="#/newRelease/"+$scope.query;
console.log($scope.query+" "+$scope.currpage);
var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zryzu3y2kvztg5435v54wfq7&callback=JSON_CALLBACK&page_limit='+$scope.limit+'&q='+$scope.query+'&page='+$scope.currpage;
console.log(url);
$http.jsonp(url)
	.success(function(data){
		console.log("Success");
		ishow=true;
		$scope.name="Success";
		var mov=data.movies;
		console.log(data);
		$scope.movies=data.movies;
		var n=Math.ceil(data.total/$scope.limit);
		$scope.paginationParams=createParam($scope.total,$scope.currpage,n);
		var arr=new Array();
		for(i=0;i<$scope.paginationParams.length-2;i++)
			arr.push(i+1);
		$scope.pagination=arr;
		console.log($scope.paginationParams);
		function createParam(t,p,l)
		{
			console.log(l);
			var length=l;
			if(length>10)
			length=10;
			var ar=new Array(length+2);
			if(p==1)
			{
				ar[0]="disabled";
				ar[length+2-1]="";
			}
			if(p==l)
			{
				ar[0]="";
				ar[length+2-1]="disabled";
			}
			ar[p]="active";
			return ar;
		}
		})
	.error(function(data){
		$scope.name="Error";
		console.log("Error");
	});

});




