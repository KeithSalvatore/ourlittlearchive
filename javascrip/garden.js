const flowers=document.querySelectorAll(".flower");
const modal=document.getElementById("flowerModal");
const closeModal=document.getElementById("closeModal");
const modalFlower=document.getElementById("modalFlower");
const modalMonth=document.getElementById("modalMonth");
const modalTitle=document.getElementById("modalTitle");
const modalMessage=document.getElementById("modalMessage");
const count=document.getElementById("count");
const finalGarden=document.getElementById("finalGarden");

const flowerData=[
{
flower:"🌷",
month:"Month One",
title:"The Beginning",
message:"There was a time when you were simply someone I wanted to know better. I didn't know how important you would become yet, but somehow, I kept wanting to stay."
},
{
flower:"🌸",
month:"Month Two",
title:"Getting Closer",
message:"Little conversations started becoming something I looked forward to. Somehow, talking to you became one of the easiest parts of my day."
},
{
flower:"🌹",
month:"Month Three",
title:"The Exception",
message:"You once thought I'd eventually give up. But somehow, I kept choosing to stay. And somewhere along the way, you became my exception too."
},
{
flower:"🌷",
month:"Month Four",
title:"The Little Things",
message:"It wasn't always the big moments. Sometimes it was the random conversations, silly jokes, little updates, and ordinary days that became my favorite memories."
},
{
flower:"🌸",
month:"Month Five",
title:"More Than Memories",
message:"By this point, you weren't just someone I talked to. You had quietly become part of my everyday life, and I didn't even realize how much that meant until I looked back."
},
{
flower:"🌹",
month:"Month Six",
title:"Growing Together",
message:"We weren't perfect. We had misunderstandings and difficult moments too. But those moments taught me that caring about someone also means learning how to understand them."
},
{
flower:"🌷",
month:"Month Seven",
title:"Almost a Year",
message:"Eight months sounds like just a number, but to me it holds so many conversations, laughs, memories, and little moments that I'll always be thankful for."
},
{
flower:"🌸",
month:"Month Eight",
title:"Still You",
message:"And after everything, somehow, when I think about the person who made those months meaningful, it's still you. Maybe that's why this little garden exists."
}
];

let opened=0;

flowers.forEach((flower,index)=>{
flower.addEventListener("click",()=>{
if(!flower.classList.contains("opened")){
flower.classList.add("opened");
opened++;
count.textContent=opened;
}
openFlower(index);
if(opened===8){
setTimeout(()=>{
finalGarden.classList.add("active");
finalGarden.scrollIntoView({behavior:"smooth",block:"center"});
},700);
}
});
});

function openFlower(index){
const data=flowerData[index];
modalFlower.textContent=data.flower;
modalMonth.textContent=data.month;
modalTitle.textContent=data.title;
modalMessage.textContent=data.message;
modal.classList.add("active");
document.body.style.overflow="hidden";
}

function closeFlower(){
modal.classList.remove("active");
document.body.style.overflow="";
}

closeModal.addEventListener("click",closeFlower);

modal.addEventListener("click",event=>{
if(event.target===modal){
closeFlower();
}
});

document.addEventListener("keydown",event=>{
if(event.key==="Escape"&&modal.classList.contains("active")){
closeFlower();
}
});