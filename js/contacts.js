//ACTIVE NAVBAR BUTTON
let nav = document.getElementById("navId");
let btns = nav.getElementsByClassName("navColumn");

function active(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", active);
}

//SHOW CONTACT INFO
let myNum = '09753386835';
let myEmail = 'kian.lejano21@gmail.com';
document.getElementById("phone").onclick = function(){
    alert('You can call me at: ' + myNum);
}
document.getElementById("email").onclick = function(){
    alert('You can email me at: ' + myEmail);
}