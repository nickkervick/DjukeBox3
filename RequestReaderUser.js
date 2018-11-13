
// Found this code here: https://www.jackrutorial.com/2018/01/building-web-app-crud-using-firebase.html
 var tblUsers = document.getElementById("RequestList");
 var dbRef = firebase.database().ref('Requests/');
 var rowIndex = 1;
 var reqID = [0];
 var reqTrackName = [0];
 var reqArtistName = [0];
 var reqGenre = [0];
 var reqStatus = [0];


//create tabel
 dbRef.once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();



// create arrays of request data for later reference
  reqID[rowIndex] = childKey;
  reqTrackName[rowIndex] = childData.track_name;
  reqArtistName[rowIndex] = childData.artist_name;
  reqGenre[rowIndex]    = childData.genre_type;
  reqStatus[rowIndex] = childData.track_status;



//add update buttons
  var btnAddToQue = document.createElement('input');
  var prent = "'";

          // SET INPUT ATTRIBUTE 'type' AND 'value'.
         btnAddToQue.setAttribute('id', 'add_to_que');
          btnAddToQue.setAttribute('type', 'button');
         btnAddToQue.setAttribute('value', 'Add To Que');




          //add update buttons
            var btnPlayed = document.createElement('input');

                    // SET INPUT ATTRIBUTE 'type' AND 'value'.
                    btnPlayed.setAttribute('id', 'track_played');
                    btnPlayed.setAttribute('type', 'button');
                    btnPlayed.setAttribute('value', 'Mark As Played');



  var row = tblUsers.insertRow(rowIndex);

  var trackName = row.insertCell(0);
  var artistName = row.insertCell(1);
  var genreType = row.insertCell(2);
  var trackStatus = row.insertCell(3);



  trackName.appendChild(document.createTextNode(childData.track_name));
  artistName.appendChild(document.createTextNode(childData.artist_name));
  genreType.appendChild(document.createTextNode(childData.genre_type));
  trackStatus.appendChild(document.createTextNode(childData.track_status));



  // ADD THE BUTTON's 'onclick' EVENT.
  btnAddToQue.setAttribute('onclick', 'addRequestToQue('+document.getElementById("RequestList").rows[rowIndex].cells[0].innerHTML+')');
  btnPlayed.setAttribute('onclick', 'markReqAsPlayed('+document.getElementById("RequestList").rows[rowIndex].cells[0].innerHTML+')');

  rowIndex = rowIndex + 1;
   });
 });



function addRequestToQue(num){
  var req_id = reqID[parseInt(num)];
  var track_name = reqTrackName[parseInt(num)] ;
  var artist_name = reqArtistName[parseInt(num)];
  var genre_type = reqGenre[parseInt(num)];
  var track_status = "Song In Que";

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

  alert('The track is queued successfully!');

  reload_page();
 }

 function markReqAsPlayed(num){
   var req_id = reqID[parseInt(num)];
   var track_name = reqTrackName[parseInt(num)] ;
   var artist_name = reqArtistName[parseInt(num)];
   var genre_type = reqGenre[parseInt(num)];
   var track_status = "Track Already Played";

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

   alert('The track is queued successfully!');
  reload_page();
  }
