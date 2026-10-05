const letters=[
{
title:"Assurance",
text:`I know the future can be scary sometimes, especially when there are still things we don't know about what comes next.

But please remember nga you don't have to figure everything out alone. We don't have to rush anything, and we don't have to have all the answers right away.

Hinay-hinay lang ta. We can talk about things, understand each other, and take things one step at a time.

I can't promise that everything will always be perfect, but I can promise that I'll try to be honest, patient, and consistent.

And if you ever doubt where you stand with me, I hope you remember this: you're important to me. ♡`
},
{
title:"For Your Heart",
text:`For your heart, whenever it feels a little heavy, please remember nga you don't have to carry everything by yourself.

If you're scared, okay ra. If you're confused, okay ra pud. You don't have to pretend that everything is fine just because you don't want to worry anyone.

I hope you always take care of your heart the same way you take care of the people you love.

And please, amping always. Your heart has been through enough already.

You deserve something gentle, honest, and real. ♡`
},
{
title:"A Little Reminder",
text:`Just a little reminder from me:

You are more special than you probably realize.

There are little things about you that you might not even notice, but somehow those are the things I remember the most.

Your little reactions. Your random stories. The way you talk about things you're excited about. Even the small moments nga probably mean nothing to you but somehow stayed with me.

So whenever you feel like you're not enough, please remember nga somewhere in someone's heart, you already mean more than you know. ♡`
},
{
title:"When You Doubt",
text:`If there ever comes a time when you start doubting yourself, or doubting the things around you, I hope you pause for a moment and breathe.

You don't need to solve everything immediately.

And you don't need to be perfect to be loved.

If something is bothering you, tell me. If something hurts, tell me. If you're scared, tell me.

I'd rather hear the truth, even when it's uncomfortable, than have you silently carry something alone.

Your feelings matter. Always. ♡`
},
{
title:"My Apology",
text:`There are things I wish I handled differently.

I'm sorry for the moments when fear got louder than everything else. I'm sorry for the confusion I caused and for the times when my decisions hurt you.

I know saying sorry doesn't magically fix everything.

But I want you to know nga I do think about those moments, and I do want to learn from them.

I can't change what already happened, but I can choose what I do with what I've learned.

And that's what I want to do now: be better, communicate better, and understand you better. ♡`
},
{
title:"What I Learned",
text:`I learned that loving someone isn't just about the happy moments.

It's also about communication when things get messy, patience when things feel uncertain, and knowing when to listen instead of immediately trying to fix everything.

I learned nga sometimes fear can make us do things we never actually wanted to do.

And most importantly, I learned that if someone matters to you, you shouldn't let fear make every decision for you.

Sometimes you just have to be honest, even when it's scary. ♡`
},
{
title:"If We Start Again",
text:`If we ever get the chance to start again, I don't want us to simply go back to how things were.

I want us to build something better.

Something where we can talk when we're hurt instead of keeping things inside. Something where we can disagree without immediately thinking everything is falling apart.

No pressure. No rushing.

Just two people trying to understand each other a little better than they did before.

If we do get another chapter, I hope we write it differently. ♡`
},
{
title:"Remember This",
text:`Whatever happens next, please don't ever think that the time we spent together meant nothing.

Those memories are real.

The laughs were real. The random conversations were real. The little moments that made ordinary days feel special were real.

And I'm grateful for every single one of them.

So if you ever look back at our story, I hope you don't only remember the difficult parts.

Remember that there was also so much happiness, laughter, and love in between. ♡`
},
{
title:"From My Heart",
text:`I don't know exactly where our story goes from here.

And maybe that's okay.

For once, I don't want to be so focused on knowing the ending that I forget to appreciate the chapter I'm currently in.

I just want you to know that I'm thankful.

Thankful that I met you. Thankful for the memories. Thankful for everything you taught me. Thankful for the person you allowed me to know.

And whatever happens next, one thing will always stay true:

I'm grateful that it was you. ♡`
}
];

const grid=document.getElementById("envelopeGrid");
const openedLetter=document.getElementById("openedLetter");
const closeLetter=document.getElementById("closeLetter");
const letterNumber=document.getElementById("letterNumber");
const letterTitle=document.getElementById("letterTitle");
const letterText=document.getElementById("letterText");

letters.forEach((letter,index)=>{
const envelope=document.createElement("div");
envelope.className="envelope";
envelope.innerHTML=`
<div class="envelope-body"></div>
<div class="envelope-flap"></div>
<div class="envelope-heart">♡</div>
<div class="envelope-number">Letter ${String(index+1).padStart(2,"0")}</div>
`;
envelope.addEventListener("click",()=>openLetter(index));
grid.appendChild(envelope);
});

function openLetter(index){
const letter=letters[index];
letterNumber.textContent=`LETTER ${String(index+1).padStart(2,"0")}`;
letterTitle.textContent=letter.title;
letterText.textContent=letter.text;
openedLetter.classList.add("active");
document.body.style.overflow="hidden";
}

function closeOpenedLetter(){
openedLetter.classList.remove("active");
document.body.style.overflow="";
}

closeLetter.addEventListener("click",closeOpenedLetter);

openedLetter.addEventListener("click",event=>{
if(event.target===openedLetter){
closeOpenedLetter();
}
});

document.addEventListener("keydown",event=>{
if(event.key==="Escape"&&openedLetter.classList.contains("active")){
closeOpenedLetter();
}
});