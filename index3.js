const dam = document.getElementById("cursor-light")
const hamburger = document.getElementById('hamburger')
const navmenu = document.getElementById('nav-menu')
const navcon = document.getElementById("nav")

document.addEventListener('mousemove',(e)=>{
    dam.style.left =  e.clientX + 'px'
    dam.style.top =  e.clientY + 'px'
})

window.onload = () =>{
    document.querySelector('h1').style.filter = 'blur(0px)';
    document.getElementById('astro').style.filter = 'blur(0px)'
}


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navmenu.classList.toggle('active')
    navcon.style.height = "30%"
    navcon.style.width = "80%"
    navcon.style.borderRadius = "10%"

})

document.querySelectorAll('nav > ul > a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navmenu.classList.remove('active');
        navcon.style.removeProperty('height')
        navcon.style.removeProperty('border-radius')
    });
});