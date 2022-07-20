let menubtn = document.getElementById('menubtn');
let navbar = document.getElementById('navbar');

menubtn.onclick = function (){
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let tablinks =  document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');


function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove('active-tab');
    }
    
    for (tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    document.getElementById(tabname).classList.add('active-tab');
}


    

   
        
    


