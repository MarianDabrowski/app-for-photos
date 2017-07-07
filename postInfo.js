function postInfo(imageUrl, htags, numLikes) {
  this.url = imageUrl;
  this.htags = htags;
  this.likes = numLikes;
  this.showImage = showImage;
}

function showImage() {
  var image = document.createElement("img");
  image.src = this.url;
  image.className = "myImage";
  document.getElementById("mainContainer").appendChild(image);
}
