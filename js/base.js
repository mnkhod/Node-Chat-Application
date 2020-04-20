
var submit = document.querySelector("#chat-submit");
var chatbox = document.querySelector(".chat-box");

submit.addEventListener('click', () => {
  let username = document.querySelector("#username-box");
  let msg = document.querySelector("#msg-box");

  if(username.value == '' || msg.value == ''){
    alert("No Username Or Message");
  }else{
    let new_msg_e = document.createElement("div");
    new_msg_e.classList.add("msg-container");
    new_msg_e.innerHTML = "<h1 class='name'>"+username.value+"</h1> <p class='msg'> "+msg.value+"</p>";
    chatbox.appendChild(new_msg_e); 
  }
});
