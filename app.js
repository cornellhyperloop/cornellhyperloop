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

   const txtEmail = document.getElementById('txtEmail');
   const txtPassword = document.getElementById('txtPassword');
   const btnLogin = document.getElementById('btnLogin');
   const btnSignup = document.getElementById('btnSignup');
   const btnLogout = document.getElementById('btnLogout');

   if (btnLogin){
   btnLogin.addEventListener('click', e=> {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    firebase.auth().signInWithEmailAndPassword(email,pass).then(function() {
      console.log("Good");
      window.location.href = "http://cornellhyperloop.tech/redirect.html";
    }).catch(function(error) {
      alert("Sorry Wrong password and username");
      console.log("Bad");
    });
   });
 };

  

  if (btnSignup){
   btnSignup.addEventListener('click', e=> {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    window.alert("Sorry Wrong Username and Password");
    promise.catch(e=> console.log(e.message));
   })
 };

}());