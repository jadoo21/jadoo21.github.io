(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyBXDlnl1mKZZS4cOIqffUoP1ECAFwFEssM",
        authDomain: "navigus-observer.firebaseapp.com",
        databaseURL: "https://navigus-observer.firebaseio.com",
        projectId: "navigus-observer",
        storageBucket: "navigus-observer.appspot.com",
        messagingSenderId: "965396203864",
        appId: "1:965396203864:web:264f2063308699d4ffbd2d",
        measurementId: "G-GX2PMR5L5D"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      const txtEmail = document.getElementById('email_id');
      const txtPass = document.getElementById('pass_id');
      const cnfrmPass = document.getElementById('cpass_id');
      const name = document.getElementById('name_id');
      const phone = document.getElementById('phone_id');
      const singUP = document.getElementById('button_id');

      singUP.addEventListener('click', e=>{
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();

        auth.createUserWithEmailAndPassword(email, pass).catch(e=> window.alert('Wrong Email or Password!!'));


      });

      firebase.auth().onAuthStateChanged(firebaseUse => {
        if(firebaseUser){
            window.alert("You Registered Successfully!!");
        }
        else{
            window.alert("Registration failed!! Enter your details carefully..");
        }
      });

}());