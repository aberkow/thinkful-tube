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
  $.getJSON('https://www.googleapis.com/youtube/v3/search', function(data){
    console.log(data);
  });
  
//  $('#search-form').submit(function(evt) {
//    evt.preventDefault();
//    var searchTerm = $('#search-form__input').val();
//  })
});




//function getRequst(searchTerm) {
//  var params = {
//    part: 'snippet',
//    key: 'AIzaSyB39NC87BtguKgxPSOUecUOtXzT_8Z88Ts',
//    q: searchTerm
//  };
//  url = 'https://www.googleapis.com/youtube/v3/search';
//  $.getJSON(url, params, function(data){
//    
//  })
//}