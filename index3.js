const dam = document.getElementById("cursor-light")

document.addEventListener('mousemove',(e)=>{
    dam.style.left =  e.clientX + 'px'
    dam.style.top =  e.clientY + 'px'
})