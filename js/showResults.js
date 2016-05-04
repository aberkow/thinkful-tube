//showResults input = results(aka data.items), output = console.log(imageurls)
var $ = require('jquery');
var showResults = function(results) {

  var video = {
    html: "",
    image: "",
    id: "",
    link: "https://www.youtube.com/watch?v="
  }

  for (i = 0; i < results.length; i++){
    video.image = results[i].snippet.thumbnails.high.url;//display the image
    video.id = results[i].id.videoId;//assign the id to link to
    video.html += "<div class='results-container__item'><a href=" + video.link + video.id + " " +"target='_blank'><img src=" + video.image + " " + "alt='thumbnail'" + " " + "width='480' height='360' class='videoImage'></a></div>"
  }
  $('#results-container').append(video.html);
}

module.exports = showResults;
