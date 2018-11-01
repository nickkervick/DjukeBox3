
// Found this code here: https://www.jackrutorial.com/2018/01/building-web-app-crud-using-firebase.html
 var tblUsers = document.getElementById("RequestList");
 var dbRef = firebase.database().ref('Requests/');
 var rowIndex = 1;



//create tabel
 dbRef.once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();

//add update buttons
  var btnAddToQue = document.createElement('input');

          // SET INPUT ATTRIBUTE 'type' AND 'value'.
          btnAddToQue.setAttribute('id', 'add_to_que');
          btnAddToQue.setAttribute('type', 'button');
          btnAddToQue.setAttribute('value', 'Add To Que');

          // ADD THE BUTTON's 'onclick' EVENT.
          btnAddToQue.setAttribute('onclick', '');

          //add update buttons
            var btnPlayed = document.createElement('input');

                    // SET INPUT ATTRIBUTE 'type' AND 'value'.
                    btnPlayed.setAttribute('id', 'track_played');
                    btnPlayed.setAttribute('type', 'button');
                    btnPlayed.setAttribute('value', 'Add To Que');

                    // ADD THE BUTTON's 'onclick' EVENT.
                    btnPlayed.setAttribute('onclick', '');



  var row = tblUsers.insertRow(rowIndex);
  var requestId = row.insertCell(0);
  var trackName = row.insertCell(1);
  var artistName = row.insertCell(2);
  var genreType = row.insertCell(3);
  var trackStatus = row.insertCell(4);
  var btnQue = row.insertCell(5);
  var btnPlayed = row.insertCell(6);
  requestId.appendChild(document.createTextNode(childKey));
  trackName.appendChild(document.createTextNode(childData.track_name));
  artistName.appendChild(document.createTextNode(childData.artist_name));
  genreType.appendChild(document.createTextNode(childData.genre_type));
  trackStatus.appendChild(document.createTextNode(childData.track_status));
  btnQue.appendChild(btnAddToQue);
//  btnPlayed.appendChild(btnPlayed);

  rowIndex = rowIndex + 1;
   });
 });
