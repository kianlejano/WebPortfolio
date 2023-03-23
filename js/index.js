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

// Change to Filipino language button
const toggle = document.getElementById('toggleLang');
const desc = document.getElementById("mydesc");
const origText = document.getElementById("mydesc").innerHTML;

toggle.addEventListener('click', function(){
    this.classList.toggle('btnActive');
    if(this.classList.toggle('btn')){
        desc.innerHTML = origText;
    }
    else{
        desc.innerHTML = "<p>Kumusta, Ako si</p><h1>LANCE KIAN C. LEJANO</h1><p>isang mag-aaral ng kursong Computer Science sa Teknolohikal na Unibersidad ng Pilipinas at nangangarap na maging Developer balang araw.</p>";
    }
});