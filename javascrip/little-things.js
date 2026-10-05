const cards=document.querySelectorAll(".thing-card");
const modal=document.getElementById("exhibitModal");
const modalBg=document.querySelector(".modal-bg");
const closeModal=document.getElementById("closeModal");
const exhibitNumber=document.getElementById("exhibitNumber");
const exhibitTitle=document.getElementById("exhibitTitle");
const galleryImage=document.getElementById("galleryImage");
const photoCaption=document.getElementById("photoCaption");
const galleryDots=document.getElementById("galleryDots");
const revealButton=document.getElementById("revealButton");
const hiddenNote=document.getElementById("hiddenNote");
const noteText=document.getElementById("noteText");
const heartButton=document.getElementById("heartButton");
const heartMessage=document.getElementById("heartMessage");
const previousExhibit=document.getElementById("previousExhibit");
const nextExhibit=document.getElementById("nextExhibit");
const exhibitCounter=document.getElementById("exhibitCounter");
const prevPhoto=document.getElementById("prevPhoto");
const nextPhoto=document.getElementById("nextPhoto");

let currentExhibit=0;
let currentPhoto=0;

const exhibits=[
{
number:"EXHIBIT 01",
title:"Your Smile",
photos:[
{src:"Us/her9.jpg",caption:"That smile I could recognize anywhere."},
{src:"Us/her10.jpg",caption:"The little moments when you're not smiling but it made me smile just by staring at you."},
{src:"Us/her11.jpg",caption:"A little sunshine that somehow became one of my favorite things."}
],
note:"I love your smile because it feels like one of those little things that can instantly make a day better. Even when you don't realize you're doing it, seeing you genuinely happy makes something in me feel lighter."
},
{
number:"EXHIBIT 02",
title:"The Words that found me.",
photos:[
{src:"Us/message1.jpg",caption:"Some words are simple, but somehow they carry an entire feeling with them. Every time you told me you missed me, I couldn't help but feel how much my presence meant to you. I may not have always known what to say back, but I always kept those words somewhere in my heart."},
{src:"Us/message2.jpg",caption:"I don't think you ever realized how much these little messages meant to me. Seeing you say that you missed me made the distance between us feel a little smaller. It reminded me that somewhere, in the middle of your day, I had crossed your mind, and honestly, being thought of by you was something I never took for granted."},
{src:"Us/message3.jpg",caption:"Maybe this was just another ‘I miss you’ to you, but to me, it became one of those little moments I never wanted to forget. Because behind those three words was something I could feel even through a screen and that for a moment, you wished I was there beside you. And knowing that will always mean more to me than I can properly put into words."}
],
note:"First of all, this is the reason why I saved the screenshots, and you have no idea how much these messages mean to me."
},
{
number:"EXHIBIT 03",
title:"The Way You Are",
photos:[
{src:"Us/her12.jpg",caption:"Just you, being you."},
{src:"Us/her13.jpg",caption:"Moments that I miss doing."},
{src:"Us/her14.jpg",caption:"The smile that made me stare at my screen for a long time."}
],
note:"I love the things that make you, you. Your expressions, your habits, the way you talk, the random things you do. I don't need you to be someone else. I like knowing the real you."
},
{
number:"EXHIBIT 04",
title:"Our Mini Celebrations.",
photos:[
{src:"Us/her5.jpg",caption:"You keep going even when things aren't easy."},
{src:"Us/her15.jpg",caption:"More capable than you sometimes give yourself credit for."},
{src:"Us/her16.jpg",caption:"And still finding reasons to smile."}
],
note:"I admire how you keep going. You might not always see yourself as strong, but I do. I love that there is a strength in you that doesn't always need to be loud to be real."
},
{
number:"EXHIBIT 05",
title:"Your Heart",
photos:[
{src:"Us/her3.jpg",caption:"There is a softness behind your strength."},
{src:"Us/her1.jpg",caption:"The part of you that cares more than you show."},
{src:"Us/her5.jpg",caption:"A heart I hope always stays gentle."}
],
note:"One of the things I admire most about you is your heart. You care deeply, even when you don't always show it. I hope you always remember that the softness in you is something beautiful."
},
{
number:"EXHIBIT 06",
title:"Everything In Between",
photos:[
{src:"Us/her7.jpg",caption:"The random conversations."},
{src:"Us/her4.jpg",caption:"The silly moments."},
{src:"Us/her2.jpg",caption:"And everything we never planned."}
],
note:"Maybe this is my favorite one because it isn't really one thing. It's all the random conversations, little jokes, quiet moments, silly memories, and everything in between. Somehow, those little things became some of the biggest reasons I adore you."
}
];

function openExhibit(index){
currentExhibit=index;
currentPhoto=0;
updateExhibit();
modal.classList.add("show");
document.body.style.overflow="hidden";
}

function closeExhibit(){
modal.classList.remove("show");
document.body.style.overflow="";
}

function updateExhibit(){
const exhibit=exhibits[currentExhibit];
exhibitNumber.textContent=exhibit.number;
exhibitTitle.textContent=exhibit.title;
exhibitCounter.textContent=`${currentExhibit+1} / ${exhibits.length}`;
hiddenNote.classList.remove("show");
revealButton.textContent="♡ There's something I want you to know";
noteText.textContent=exhibit.note;
heartButton.classList.remove("loved");
heartMessage.textContent="tap the heart";
updatePhoto();
}

function updatePhoto(){
const exhibit=exhibits[currentExhibit];
const photo=exhibit.photos[currentPhoto];
galleryImage.src=photo.src;
galleryImage.alt=photo.caption;
photoCaption.textContent=photo.caption;
galleryDots.innerHTML="";

exhibit.photos.forEach((_,index)=>{
const dot=document.createElement("button");
dot.type="button";
dot.className=`gallery-dot${index===currentPhoto?" active":""}`;
dot.setAttribute("aria-label",`View photo ${index+1}`);
dot.addEventListener("click",()=>setPhoto(index));
galleryDots.appendChild(dot);
});
}

function setPhoto(index){
const total=exhibits[currentExhibit].photos.length;
currentPhoto=(index+total)%total;
updatePhoto();
}

function changeExhibit(direction){
const total=exhibits.length;
currentExhibit=(currentExhibit+direction+total)%total;
currentPhoto=0;
updateExhibit();
}

cards.forEach(card=>{
card.addEventListener("click",event=>{
if(event.target.closest(".open-card")){
openExhibit(Number(card.dataset.index));
}
});
});

prevPhoto.addEventListener("click",()=>setPhoto(currentPhoto-1));
nextPhoto.addEventListener("click",()=>setPhoto(currentPhoto+1));

revealButton.addEventListener("click",()=>{
hiddenNote.classList.toggle("show");
revealButton.textContent=hiddenNote.classList.contains("show")
?"♡ Hide my little note"
:"♡ There's something I want you to know";
});

heartButton.addEventListener("click",()=>{
heartButton.classList.toggle("loved");
heartMessage.textContent=heartButton.classList.contains("loved")
?"you found one more little reason ♡"
:"tap the heart";
});

previousExhibit.addEventListener("click",()=>changeExhibit(-1));
nextExhibit.addEventListener("click",()=>changeExhibit(1));

closeModal.addEventListener("click",closeExhibit);
modalBg.addEventListener("click",closeExhibit);

document.addEventListener("keydown",event=>{
if(!modal.classList.contains("show"))return;

if(event.key==="Escape")closeExhibit();
if(event.key==="ArrowLeft")setPhoto(currentPhoto-1);
if(event.key==="ArrowRight")setPhoto(currentPhoto+1);
});

updateExhibit();