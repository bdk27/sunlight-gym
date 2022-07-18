let menubtn = document.getElementById('menubtn');
let navbar = document.getElementById('navbar');

menubtn.onclick = function (){
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}