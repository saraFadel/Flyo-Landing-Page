const validation_message = document.querySelector('#validation');
const submit = document.getElementById('button');
const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const user_input = document.querySelector('#email');

submit.addEventListener("click", validateMessage);

function validateMessage(){
  if(user_input.value.match(pattern)){
    validation_message.style.display = "none";
  }else{
    validation_message.style.display = "block";
  }
}
