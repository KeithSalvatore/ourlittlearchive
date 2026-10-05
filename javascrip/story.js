const hearts=["♡","♥","♡","♥"];
function createHeart(){
const heart=document.createElement("span");
heart.textContent=hearts[Math.floor(Math.random()*hearts.length)];
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=10+Math.random()*18+"px";
heart.style.color="rgba(125,41,69,.2)";
heart.style.pointerEvents="none";
heart.style.zIndex="0";
heart.style.animation=`floatUp ${5+Math.random()*5}s linear forwards`;
document.querySelector(".background-hearts").appendChild(heart);
setTimeout(()=>heart.remove(),10000);
}
const style=document.createElement("style");
style.textContent=`
@keyframes floatUp{
0%{transform:translateY(0) rotate(0deg);opacity:0}
15%{opacity:1}
100%{transform:translateY(-110vh) rotate(25deg);opacity:0}
}
`;
document.head.appendChild(style);
setInterval(createHeart,1800);