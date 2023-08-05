//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose"){
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      console.log(update_likes);
      firebase.database().ref(room_name ).child(message_id).update({
            like:update_likes
      });
}
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="kwitter_room.html";
}
