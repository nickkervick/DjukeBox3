
//
// Code was learned from the following yt channel
// https://www.youtube.com/watch?v=nUUPedePJ4o&list=PLGCjwl1RrtcRTbJ9WBL9exbUFNqwzz9if&index=4&fbclid=IwAR2adERVaLnfZFNkATyNI65hsmpTUuH4mhkd6uehQTHq9EdvXOPLrgw44Gc

var rootRef = firebase.database().ref().child("Requests");
//loop for every child in the requests object
rootRef.on("child_added", snap => {


      var track = snap.child("TrackName").val();
      var artist = snap.child("Artist").val();
      var genre = snap.child("Genre").val();
//      Add output to the table in the html file
        $("#RequestList").append("<tr><td>" + track + "</td><td>"
                                  + artist + "</td><td>" + genre +"</td></tr>" );


});
