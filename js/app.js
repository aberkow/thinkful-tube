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
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q=clarinet&key=AIzaSyB39NC87BtguKgxPSOUecUOtXzT_8Z88Ts', function(data) {
    var thumbnails = [];
    for (i = 0; i < data.items.length; i++){
      thumbnails.push(data.items[i].snippet.thumbnails.default.url);    
    }
  });
  
  
  
  // $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q=clarinet&key=AIzaSyB39NC87BtguKgxPSOUecUOtXzT_8Z88Ts') function(data){
//   $.each(data.items, function(index, snippet) {
//     
//     console.log(snippet[0]);
//   })
   //   var itemsArr = data.items; 
//   var thumbnailImage = itemsArr[0].snippet.thumbnails.default.url;
//   console.log(thumbnailImage);
   //logResults(itemsArr);
   //console.log(itemsArr[0].snippet.thumbnails.default);
  
});

//function searchByKeyword() {
//  var results = YouTube.Search.list('id, snippet', {q: 'clarinet', max: 25});
//  for (var i in results.item) {
//    var item = results.item[i];
//    console.log('[%s] Title: %s', item.id.videoId, item.snippet.title)
//  }
//}
  

function searchResults(results) {
  $.each(results, function(index, ))
}

function getRequest() {
  var params = {
    part: 'snippet',
    key: AIzaSyB39NC87BtguKgxPSOUecUOtXzT_8Z88Ts,
    q: 'clarinet'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';
  $.getJSON(url, params, function(data) {
    searchResults(data.items);  
  });
}



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