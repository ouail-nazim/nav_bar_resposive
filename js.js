const menuBtn=document.querySelector(".menu-icon span");
const searchBtn=document.querySelector(".search-icon ");
const cancelBtn=document.querySelector(".cancel-icon ");
const items=document.querySelector(".nav-items ");
const form=document.querySelector("form ");

menuBtn.onclick=()=>{
    items.classList.toggle('active');
    form.classList.remove('active');
    searchBtn.classList.remove('hide');
    cancelBtn.classList.remove('show');
}
searchBtn.onclick=()=>{
    items.classList.remove('active');
    form.classList.add('active');
    searchBtn.classList.add('hide');
    cancelBtn.classList.add('show');
    cancelBtn.style.color="#ff3D00";
}
cancelBtn.onclick=()=>{
    form.classList.remove('active');
    searchBtn.classList.remove('hide');
    cancelBtn.classList.remove('show');
}