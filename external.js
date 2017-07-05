var webPage ="http://instagram.com";

function createWebPage() {
  var name = document.getElementById('searchTxt').value;
  return webPage + "/" + name + "/";
}


function goToInstagramPage() {
  var page = createWebPage();
  var req = new XMLHttpRequest();
  req.open('GET', page, false);
  document.write(req);
  req.send(null);
  if(req.status == 200) dump(req.responseText);

  window.open(page, "my window", 'width=800,height=600');
}
