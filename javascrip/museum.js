const rooms=document.querySelectorAll(".room-page");
const dots=document.querySelectorAll(".dot");
const roomNumber=document.getElementById("roomNumber");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const modal=document.getElementById("modal");
const modalImage=document.getElementById("modalImage");
const modalTitle=document.getElementById("modalTitle");
const modalMessage=document.getElementById("modalMessage");
const close=document.getElementById("close");
const artworks=document.querySelectorAll(".art");
let current=0;

function showRoom(index){
if(index<0)index=rooms.length-1;
if(index>=rooms.length)index=0;
rooms.forEach((room,i)=>room.classList.toggle("active",i===index));
dots.forEach((dot,i)=>dot.classList.toggle("active",i===index));
roomNumber.textContent=String(index+1).padStart(2,"0");
current=index;

const video=document.getElementById("favoriteVideo");

if(video){
if(index===2){
video.currentTime=0;
video.muted=true;
video.play().catch(()=>{});
}else{
video.pause();
video.currentTime=0;
}
}
}

next.onclick=()=>showRoom(current+1);
prev.onclick=()=>showRoom(current-1);
dots.forEach(dot=>dot.onclick=()=>showRoom(Number(dot.dataset.room)));

artworks.forEach(art=>{
art.onclick=()=>{
modalImage.src=art.querySelector("img").src;
modalTitle.textContent=art.dataset.title;
modalMessage.textContent=art.dataset.text;
modal.classList.add("show");
};
});

function closeModal(){
modal.classList.remove("show");
}

close.onclick=closeModal;
document.querySelector(".modal-bg").onclick=closeModal;

document.addEventListener("keydown",e=>{
if(e.key==="Escape")closeModal();
if(e.key==="ArrowRight")showRoom(current+1);
if(e.key==="ArrowLeft")showRoom(current-1);
});

let startX=0;

document.querySelector(".museum-space").addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

document.querySelector(".museum-space").addEventListener("touchend",e=>{
const distance=startX-e.changedTouches[0].clientX;
if(Math.abs(distance)>60)showRoom(current+(distance>0?1:-1));
});