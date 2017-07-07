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


function goToInstagramPage() {
  var token = '1627612042.7622127.bb62fc4f771e47248861594a13edf5b5',// '5698586743.a8c7c13.4aafd409af3c432a918e352b28559468',
      username = document.getElementById('searchTxt').value,
      num_photos = 20;

$.ajax({
      url: 'https://api.instagram.com/v1/users/271684459/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){
            $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        }
    },
    error: function(data){
        console.log(data);
    }
});

}
