<!DOCTYPE html>
<html>
  <head>
    <script src="https://www.gstatic.com/firebasejs/4.11.0/firebase.js"></script>
      <meta charset="utf-8">
  </head>
  <body>


    <h1 id="TEXT"> </h1>

    <div class="container">
      <input id="txtEmail" type="email" placeholder="Email">

      <input id="txtPassword" type="password" placeholder="Password">

      <button id="btnLogin" class="btn btn-action">
        Log in 
      </button>

      <button id="btnSignUp" class="btn btn-secondary">
        Sign up
      </button>

      <button id="btnLogout" class="btn btn-action hide">
        Log Out
      </button>
    </div>
      
    <script>
      var config = {
    apiKey: "AIzaSyDeFKLzXohJ5rshroq5eqyerrsHVAdCinc",
    authDomain: "test-f83fc.firebaseapp.com",
    databaseURL: "https://test-f83fc.firebaseio.com",
    projectId: "test-f83fc",
    storageBucket: "test-f83fc.appspot.com",
    messagingSenderId: "477299121681"
  };

  firebase.initializeApp(config);

   var txtEmail = document.getElementById('txtEmail');
   var txtPassword = document.getElementById('txtPassword');
   var btnLogin = document.getElementById('btnLogin');
   var btnSignup = document.getElementById('btnSignup');
   var btnLogout = document.getElementById('btnLogout');

   if (btnLogin){
   btnLogin.addEventListener('click', e=> {
    var email = txtEmail.value;
    var pass = txtPassword.value;
    firebase.auth().signInWithEmailAndPassword(email,pass).then(function() {
      console.log("Good");
      window.location.href = "http://localhost:8888/test/memberInfo.php";
      console.log("Redirected");
    }).catch(function(error) {
      alert("Sorry Wrong password and username");
      console.log("Bad");
    });
   });
 };

 btnLogout.addEventListener('click', e=>{
  firebase.auth().signOut();
 });



 firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser){
    console.log(firebaseUser);
    console.log("Logged in");
    document.getElementById("btnLogout").style.visibility = "visible";
      <?php
        setcookie("validUser", 1);
      ?>

  } else{
    <?php
      if (isset($_COOKIE['validUser'])) {
        setcookie("validUser", "", time()-3600);
      }
      ?>
    console.log("Not logged in");
    var x = document.getElementById("btnLogout");
    x.style.visibility = "hidden";
  }
 });
      </script>


</body>
</html>