
// Found this code here: https://www.jackrutorial.com/2018/01/building-web-app-crud-using-firebase.html
 var tblUsers = document.getElementById("RequestList");
 var dbRef = firebase.database().ref('Requests/');
 var rowIndex = 1;

//create tabel
 dbRef.once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();

  var row = tblUsers.insertRow(rowIndex);
  var requestId = row.insertCell(0);
  var trackName = row.insertCell(1);
  var artistName = row.insertCell(2);
  var genreType = row.insertCell(3);
  var trackStatus = row.insertCell(4);
  var btnQue = row.insertCell(5);
  requestId.appendChild(document.createTextNode(childKey));
  trackName.appendChild(document.createTextNode(childData.track_name));
  artistName.appendChild(document.createTextNode(childData.artist_name));
  genreType.appendChild(document.createTextNode(childData.genre_type));
  trackStatus.appendChild(document.createTextNode(childData.track_status));
  $("#RequestList").append("<input type='button'>");

  rowIndex = rowIndex + 1;
   });
 });
