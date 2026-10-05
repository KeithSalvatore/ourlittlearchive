const cards=document.querySelectorAll(".apology-card");
const modal=document.getElementById("apologyModal");
const modalBg=document.querySelector(".modal-bg");
const closeModal=document.getElementById("closeModal");
const modalNumber=document.getElementById("modalNumber");
const modalIcon=document.getElementById("modalIcon");
const modalTitle=document.getElementById("modalTitle");
const modalText=document.getElementById("modalText");
const understandButton=document.getElementById("understandButton");
const progressCount=document.getElementById("progressCount");
const finalSection=document.getElementById("finalSection");
const openLetter=document.getElementById("openLetter");
const letterSection=document.getElementById("letterSection");

let currentCard=0;
let opened=new Set();

const apologies=[
{
number:"01",
icon:"♡",
title:"My Jealousy",
text:"I'm sorry for being so jealous sometimes. I know there were moments when my jealousy became too much, and I understand that it could make things harder for you. A lot of it came from being scared nga mawalaa jud kas akoa completely. But I know fear shouldn't be an excuse to make you feel restricted. I want to learn to trust you more and not let my fear speak louder than my trust."
},
{
number:"02",
icon:"♧",
title:"My Overprotective Side",
text:"I'm sorry for being overly protective, especially sa katong times nga magbuot ko sa imong suoton or what. I realize now that I shouldn't be the one deciding those things for you. Karon kabalo naman pud ka mo-control sa sakto ug dili, and I want to trust you on that. I care about you deeply, but I don't want my way of caring to feel like I'm taking away your freedom."
},
{
number:"03",
icon:"☁",
title:"My Overthinking",
text:"I'm sorry for all the times my overthinking got in the way. Most of it came from my jealousy and from wanting reassurance. Sometimes my mind creates things that aren't even there, and I let those thoughts become heavier than they should be. I know that's something I need to work on within myself. I don't want you to always have to carry the weight of my overthinking just to make me feel okay."
},
{
number:"04",
icon:"☾",
title:"My Nightmares",
text:"I'm sorry for the fear that followed me even when I was asleep. I've had these nightmares about you and me, nga naa juy random guy nga mokuha nimo away from me. I honestly don't know nganong this keeps happening. Maybe it's just another reflection of how afraid I am of losing you. But I don't want those fears to control me when I'm awake. I want to learn how to face them instead of letting them affect us."
},
{
number:"05",
icon:"♡",
title:"My Clinginess",
text:"I'm sorry for the times I became too clingy, especially in public. I know nga you don't really like PDA, and I know there were moments when I got too comfortable. I hope someday, if okay ra nimo, when we get to spend time together again, even something as simple as holding your hand can be enough. I'll do my best to respect what makes you comfortable. And yes... I'll try to resist kissing your forehead unless you're allowing me to. :>"
}
];

function openCard(index){
currentCard=index;
const item=apologies[index];

modalNumber.textContent=item.number;
modalIcon.textContent=item.icon;
modalTitle.textContent=item.title;
modalText.textContent=item.text;

modal.classList.add("show");
document.body.style.overflow="hidden";
}

function closeCard(){
modal.classList.remove("show");
document.body.style.overflow="";
}

function markRead(){
opened.add(currentCard);
cards[currentCard].classList.add("read");
progressCount.textContent=opened.size;

understandButton.textContent="♡ Thank you for reading";
setTimeout(closeCard,700);

if(opened.size===apologies.length){
setTimeout(()=>{
finalSection.classList.add("show");
finalSection.scrollIntoView({behavior:"smooth",block:"center"});
},850);
}
}

cards.forEach(card=>{
card.addEventListener("click",event=>{
if(event.target.closest("button")||event.currentTarget===card){
openCard(Number(card.dataset.index));
}
});
});

closeModal.addEventListener("click",closeCard);
modalBg.addEventListener("click",closeCard);
understandButton.addEventListener("click",markRead);

document.addEventListener("keydown",event=>{
if(event.key==="Escape"&&modal.classList.contains("show"))closeCard();
});

openLetter.addEventListener("click",()=>{
letterSection.classList.add("show");
letterSection.scrollIntoView({
behavior:"smooth",
block:"start"
});
openLetter.textContent="♡ Letter Opened";
openLetter.disabled=true;
});