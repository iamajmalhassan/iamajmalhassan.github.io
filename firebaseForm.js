// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAl2R_f4Xlnmf2bq_7D6sA7FnIqbMzr-d4",
    authDomain: "personal-website-ceb8a.firebaseapp.com",
    databaseURL: "https://personal-website-ceb8a.firebaseio.com",
    projectId: "personal-website-ceb8a",
    storageBucket: "personal-website-ceb8a.appspot.com",
    messagingSenderId: "835671802125",
    appId: "1:835671802125:web:48e56d71ade9a5929c3044",
    measurementId: "G-RW8JQGQ0MC"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef=firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var fName=getFormData('firstName');
    var lName=getFormData('lastName');
    var email=getFormData('InputEmail');
    var comment=getFormData('comment');

    saveMessage(fName,lName,email,comment);

    document.querySelector('.alert').style.display='block';
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);
    //clear form data
    document.getElementById('contactForm').reset();
}

function getFormData(id){
    return document.getElementById(id).value;
}

//save messages to firebase
function saveMessage(fName,lName,email,comment){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fName:fName,
        lName:lName,
        email:email,
        comment:comment
    });
}
