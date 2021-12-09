const firebaseConfig = {
      apiKey: "AIzaSyAiuKpK7uohzzxlxnThjdjeZv0a8OkAWxU",
      authDomain: "kwitter-project-807e4.firebaseapp.com",
      databaseURL: "https://kwitter-project-807e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-807e4",
      storageBucket: "kwitter-project-807e4.appspot.com",
      messagingSenderId: "580254690591",
      appId: "1:580254690591:web:e82b4717900d3a0d94942a"
    };
    firebase.initializeApp(firebaseConfig);

    user_name =localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update(
          {
                purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location ="kwitter_page.html";
    }
    function getData() {firebase.database().ref("/").on('value',
     function(snapshot)
     {
          snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          room_names = childKey;
          row="<div class='room_name' id=" + room_names + "onclick='redirectToRoomName(this.id)' >#" + room_names + "</div><hr>" ;
          document.getElementById("output").innerHTML += row;
          });});}
    getData();
    
    function redirectToRoomName(name) 
    {
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    }