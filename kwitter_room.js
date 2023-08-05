
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8zh40cfT2TFm2ttB8fmmyY2gS81XGMp4",
      authDomain: "kwitter-fb493.firebaseapp.com",
      databaseURL: "https://kwitter-fb493-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb493",
      storageBucket: "kwitter-fb493.appspot.com",
      messagingSenderId: "848054210679",
      appId: "1:848054210679:web:1770005fc42aa91f957672",
      measurementId: "G-HD8VX1493F"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("name")
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="Kwitter_page.html";
}
document.getElementById("user_name").innerHTML="welcome " + user_name+"!";    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot)
             {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+ Room_names);
row="<div class='room_name' id="+Room_names+ " onclick='redirecttoroomname(this.id)'># "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;     
//End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="Kwitter_login.html";
}