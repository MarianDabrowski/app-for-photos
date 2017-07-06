var webPage ="http://instagram.com";

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


function createWebPage() {
  var name = document.getElementById('searchTxt').value;
  return webPage + "/" + name + "/";
}


function goToInstagramPage() {
  var url = createWebPage();

  //url.open()
  //window.open(url, "my window", 'width=800,height=600');
}
