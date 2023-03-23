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

//SKILLS
let mySkills = [['Soft Skills', 'Hard Skills'],
                ['Puntual', 'Knows basic programming'],
                ['Productive', 'Proficient with Microsoft Office Tools'],
                ['Adaptable', 'Computer Maintenance']];

for(let j = 0; j < mySkills.length; j++){
    let newTr = document.createElement('tr'); //<tr></tr>
    for(let k = 0; k < mySkills[j].length; k++){
        if(j == 0){
            let newTh = document.createElement('th'); // <th></th>
            let newSkills = document.createTextNode(mySkills[j][k]); //[0][0] = soft skills
            newTh.appendChild(newSkills);// <th>soft skills</th>
            newTr.appendChild(newTh); // <tr><th>soft skills</th></tr>
            document.getElementById('skills').appendChild(newTr); // newTr to <table>
        }
        else{
            let newTd = document.createElement('td');
            let newSkills = document.createTextNode(mySkills[j][k]);
            newTd.appendChild(newSkills);
            newTr.appendChild(newTd);
            document.getElementById('skills').append(newTr);
        }
    }
}