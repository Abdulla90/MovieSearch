app.controller("movieSearchCntrl",['$scope','$http', 'httpService', function($scope,$http,httpService){

$scope.movieSearch = {};
$scope.movieData = [];
 

 var pageIndex = 1;
    var loadingData = false;
    $scope.loadMore = function() {
        if (!loadingData) {
            console.log('loadMore')
            pageIndex = pageIndex + 1
            $scope.searchFunc(pageIndex)
        }

    }
    $scope.searchFunc = function(index) {
    	if(!index){
    		$scope.movieData=[];
    		pageIndex=1;
    	}
        loadingData = true;
        var title = $scope.movieSearch.title;
        var url = index ? '/getMovieData/' + title + '/' + index : '/getMovieData/' + title + '/' + 1
        httpService.get(url, function(err, data) {
            loadingData = false;
            if (err) {
                console.error('error');
                return;
            }
            if (!(data && data.data && data.data.Search && data.data.Search.length)) {

                console.log("null value");
                loadingData = true;
                return;
            }
            for (var i = 0; i < data.data.Search.length; i++) {
                $scope.movieData.push(data.data.Search[i]);
            }
            console.log($scope.movieData, "$scope.movieData");
        })
    }


}]);