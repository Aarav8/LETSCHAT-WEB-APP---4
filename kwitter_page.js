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


      

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function send() 
{
      
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push
      ({
            like:0,
            message:message,
            name:user_name
      });
      document.getElementById("msg").value="";
}
