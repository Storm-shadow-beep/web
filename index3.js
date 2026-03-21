const dam = document.getElementById("cursor-light")

document.addEventListener('mousemove',(e)=>{
    dam.style.left =  e.clientX + 'px'
    dam.style.top =  e.clientY + 'px'
})

window.onload = () =>{
    document.querySelector('h1').style.filter = 'blur(0px)';
    document.getElementById('astro').style.filter = 'blur(0px)'
}