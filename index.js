// code for writing to firbase comes from this YouTube Tutorial
// https://www.youtube.com/watch?v=WacqhiI-g_o


function SendRequest(){



//path to db
const firebaseRef = firebase.database();
//path to noSQL db
const requests = firebaseRef.ref().child(tn, an, gn);


var req = {
// <-- .JSON Object
            // <-- unique key
            TrackName:tn,  // values
            Artist: an,
           Genre:gn
}
requests.push(req);



}


//.JSON object structure
// {
//        "Requests":{ // <-- .JSON Object
//          "3":{ // <-- unique key
//            "TrackName":"Keep Rollin",  // values
//            "Artist": "Limp Biscuit",
//            "Genre":"Rock/Rap"
  }
}
}
