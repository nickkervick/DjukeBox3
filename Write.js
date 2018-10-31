
var tName = document.getElementById("inputTrack");
var aName = document.getElementById("inputArtist");
var gName = document.getElementById("inputGenre");


function SendRequest(){

//path to db
var firebaseRef1 = firebase.database();
//path to noSQL db
var request = firebaseRef1.ref().child('Requests');

var tn = tName;
var an = aName;
var gn = gName;

var req = {
// <-- .JSON Object
            // <-- unique key
            TrackName:tn,  // values
            Artist: an,
           Genre:gn
}//end req
request.push(req);

}//end SendRequest()


//.JSON db structure
// {
//        "Requests":{ // <-- .JSON Object
//          "3":{ // <-- unique key
//            "TrackName":"Keep Rollin",  // value 1
//            "Artist": "Limp Biscuit",   //value 2
//            "Genre":"Rock/Rap"          // value n
//                    }
//             }
//  }
// code for writing to firbase comes from this YouTube Tutorial
// https://www.youtube.com/watch?v=WacqhiI-g_o
