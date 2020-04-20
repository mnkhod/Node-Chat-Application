var submit = document.querySelector("#chat-submit");
var chatbox = document.querySelector(".chat-box");
var socket = io();


submit.addEventListener('click', () => {
  let username = document.querySelector("#username-box");
  let msg = document.querySelector("#msg-box");

  if(username.value == '' || msg.value == ''){
    alert("No Username Or Message");
  }else{

    let data = { name: username.value, msg: msg.value  };

    $.post('http://localhost:4000/messages', data);


  }
});

function getData(){

  socket.on("message", (item) => {
	let new_msg_e = document.createElement("div");
	new_msg_e.classList.add("msg-container");
	new_msg_e.innerHTML = "<h1 class='name'>"+item.name+"</h1> <p class='msg'> "+item.msg+"</p>";
	chatbox.appendChild(new_msg_e); 
  });

  $.get('http://localhost:4000/messages', (data) => {

    for(item of data){
      let new_msg_e = document.createElement("div");
      new_msg_e.classList.add("msg-container");
      new_msg_e.innerHTML = "<h1 class='name'>"+item.name+"</h1> <p class='msg'> "+item.msg+"</p>";
      chatbox.appendChild(new_msg_e); 
    }

  });
}
