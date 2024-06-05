//copyright year
const date = new Date();
const year =date.getFullYear();
document.getElementById('year').innerHTML = year;

//Nav bar on scroll

window.addEventListener("scroll", function(){
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
    
  });