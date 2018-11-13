// Found this code here: https://www.jackrutorial.com/2018/01/building-web-app-crud-using-firebase.html
 var tblUsers = document.getElementById('RequestList');
 var dbRef = firebase.database().ref('Requests/');
 var rowIndex = 1;



 function makeRequest(){
  var track_name = document.getElementById('track_name').value;
 var artist_name = document.getElementById('artist_name').value;
 var genre_type = document.getElementById('genre_type').value;
 var track_status = "Request Sent";

  var requestId = firebase.database().ref().child('Requests').push().key;

  var data = {
   re_id: requestId,
   track_name: track_name,
   artist_name: artist_name,
   genre_type: genre_type,
   track_status: track_status

  }

  var updates = {};
  updates['/Requests/' + requestId] = data;
  firebase.database().ref().update(updates);

  alert('The user is created successfully!');
  reload_page();
 }

 function update_user(){
   var req_id = document.getElementById('req_id').value;
   var track_name = document.getElementById('track_name').value;
  var artist_name = document.getElementById('artist_name').value;
  var genre_type = document.getElementById('genre_type').value;
  var track_status = "Request In!";

  var data = {
    re_id: req_id,
   track_name: track_name,
   artist_name: artist_name,
    genre_type: genre_type,
    track_status: track_status
  }

  var updates = {};
  updates['/Requests/' + req_id] = data;
  firebase.database().ref().update(updates);

  alert('The user is updated successfully!');

  reload_page();
 }

 function delete_user(){
  var user_id = document.getElementById('user_id').value;

  firebase.database().ref().child('/users/' + user_id).remove();
  alert('The user is deleted successfully!');
  reload_page();
 }

 function reload_page(){
  window.location.reload();
 }
