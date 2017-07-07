var webPage ="http://instagram.com";

function fillArray(posts) {
  for(i = 0; i < 20; ++i) {
    url = JsonContent.items[i].images.low_resolution.url;
    htags = JsonContent.items[i].caption.text;
    likes = JsonContent.items[i].likes.count;

    item = new postInfo(url, htags, likes);
    posts[i] = item;
  }
}

function showImages(posts) {
  var div = document.createElement('div');
  div.id = "mainContainer";
  div.className = "content-panel";
  document.body.appendChild(div);
  for(i = 0; i < posts.length; ++i) posts[i].showImage();
}

function main() {
  var username = document.getElementById('searchTxt').value;
  var url = "https://www.instagram.com/" + username + "/media/";
  var posts = new Array();
  fillArray(posts);
  showImages(posts);

}
