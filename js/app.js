/*
Requirements
1 - Accept a user search term 
2 - Get JSON from the YouTube API based on the user search term 
3 - *Display the thumbnail image of the returned videos
Bonus
1 - Make the images clickable, leading the user to the YouTube video, on YouTube 
2 - Make the images clickable, playing them in a lightbox 
3 - Show a link for more from the channel that each video came from 4 - Show buttons to get more results (using the previous and next page links from the JSON)
*/

$(document).ready(function(){
  $('#search-form').submit(function(evt) {
    var searchTerm = $('#search-form__input').val();
    evt.preventDefault();
    //console.log(searchTerm);
    getRequest(searchTerm);
  });
});

// getRequest input = searchTerm, output = searchResults
function getRequest(searchTerm){
  //set up the get request params/url
  var params = {
    part: 'snippet',
    key: 'AIzaSyB39NC87BtguKgxPSOUecUOtXzT_8Z88Ts',
    q: searchTerm,
    maxResults: 9
  };
  url = 'https://www.googleapis.com/youtube/v3/search';
  //execute the get request
  $.getJSON(url, params, function(data){//NB - url needs to go before params
    //pass data.items to showResults as (results)
    showResults(data.items);
  });
}

//showResults input = results(aka data.items), output = console.log(imageurls)
function showResults(results) {
  var html = "";
  var image = ""; //the thumbnail url
  var id = "";//the videoId to link via...
  var link = "https://www.youtube.com/watch?v=";//this link.
  
  for (i = 0; i < results.length; i++){
    image = results[i].snippet.thumbnails.high.url;//display the image
    id = results[i].id.videoId;//assign the id to link to
    html += "<a href=" + link + id + " " +"target='_blank'><img src=" + image + " " + "alt='thumbnail'" + " " + "width='480' height='360' class='videoImage'></a>"
  }
  $('#results-container').append(html);
}

//  $.each(results, function(index, value){
//    //for now print the image url to the screen
//    //html += '<p>' + value + '</p>';
//  })
//    for (i = 0; i < data.items.length; i++) {
//      thumbnailsArr.push(data.items[i].snippet.thumbnails.default.url);
//    }
  //console.log(thumbnailsArr);