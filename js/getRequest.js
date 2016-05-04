// getRequest input = searchTerm, output = searchResults
var $ = require('jquery');
var showResults = require('./showResults');
var getRequest = function(searchTerm){
  //set up the get request params/url
  var params = {
    part: 'snippet',
    key: 'AIzaSyB39NC87BtguKgxPSOUecUOtXzT_8Z88Ts',
    q: searchTerm,
    maxResults: 10
  };

  //'https://www.google.com/youtube?var1=true&var2=false#
  url = 'https://www.googleapis.com/youtube/v3/search';
  //execute the get request

  $.getJSON(url, params, function(data){//NB - url needs to go before params
    //pass data.items to showResults as (results)

    showResults(data.items);
  });
}

module.exports = getRequest;
