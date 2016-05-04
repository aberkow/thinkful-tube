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

var $ = require('jquery');
var getRequest = require('./getRequest');

$(document).ready(function(){
  $('#search-form__input').on('click', function() {
    $('#search-form__input').val(' ');
  });

  $('#search-form').submit(function(evt) {
    var searchTerm = $('#search-form__input').val();
    evt.preventDefault();
    //console.log(searchTerm);
    getRequest(searchTerm);
  });
});
