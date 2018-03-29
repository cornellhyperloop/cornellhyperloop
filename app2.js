(function(){




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDeFKLzXohJ5rshroq5eqyerrsHVAdCinc",
    authDomain: "test-f83fc.firebaseapp.com",
    databaseURL: "https://test-f83fc.firebaseio.com",
    projectId: "test-f83fc",
    storageBucket: "test-f83fc.appspot.com",
    messagingSenderId: "477299121681"
  };

  firebase.initializeApp(config);




 firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser){
    console.log(firebaseUser);
    console.log(" Can see page");
    document.getElementById("hider").style.visibility = "visible";
  } else{
    console.log("Not logged in");
    document.getElementById("hider").style.visibility = "hidden";

  }
 });
  

}());