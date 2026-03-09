const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav")

toggle.onclick = () => {

if(nav.style.right === "0px"){
nav.style.right = "-220px"
}else{
nav.style.right = "0px"
}

}
// Get in Touch button - smooth scroll to contact
document.querySelector('.btn-outline').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Option A: Scroll to contact section (if you have one)
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Option B: Open Instagram in new tab
    // window.open('https://www.instagram.com/monsoon.fc?igsh=MWw0cTQ4ZHFsMndtYw==', '_blank');
});