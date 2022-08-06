const btn = document.querySelector('#tal')
btn.addEventListener('click',()=>{
    document.querySelector('#pop').style.display = "block"
});
const btnClose =document.querySelector('#popBtn')
btnClose.addEventListener('click',()=>{
    document.querySelector('#pop').style.display = "none"
});