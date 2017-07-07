var webPage ="http://instagram.com";
/*
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};
*/

function fillArray(posts) {
  for(i = 0; i < 20; ++i) {
    url = JsonContent.items[i].images.low_resolution.url;
    htags = JsonContent.items[i].caption.text;
    likes = JsonContent.itme[i].likes.count;

    item = new postInfo(url, htags, likes);
    posts[i] = item;

  }
}


function main() {
  var username = document.getElementById('searchTxt').value;
  var url = "https://www.instagram.com/" + username + "/media/";
  var posts = new Array();
  fillArray(posts);
}
