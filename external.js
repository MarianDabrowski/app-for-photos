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

  $(function (){

  var token = '5698586743.a8c7c13.4aafd409af3c432a918e352b28559468',
      username = document.getElementById('searchTxt').value,
      num_photos = 20;

  $.ajax({
  	url: 'https://api.instagram.com/v1/users/search',
  	dataType: 'jsonp',
  	type: 'GET',
  	data: {access_token: token, q: username}, // actually it is just the search by username
  	success: function(data){
  		console.log(data);
  		$.ajax({
  			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent',
  			dataType: 'jsonp',
  			type: 'GET',
  			data: {access_token: token, count: num_photos},
  			success: function(data2){
  				console.log(data2);
  				for(x in data2.data){
  					$('ul').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');
  				}
      			},
  			error: function(data2){
  				console.log(data2);
  			}
  		});
  	},
  	error: function(data){
  		console.log(data);
  	}
  });
});

}
