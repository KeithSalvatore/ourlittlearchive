const rounds=[
{
word:"MY",
pictures:[
["🪞","Mine"],
["❤️","Mine"],
["👤","Me"],
["🙋","Me"]
],
letters:["M","Y","A","E","R","T"]
},
{
word:"AUGUST",
pictures:[
["📅","Month"],
["8️⃣","Eighth"],
["☀️","Summer"],
["🎂","Birthday"]
],
letters:["A","U","G","U","S","T","M","R","E","N"]
},
{
word:"TO",
pictures:[
["➡️","Direction"],
["🎯","Towards"],
["🚶","Going"],
["📍","Destination"]
],
letters:["T","O","A","M","E","R"]
},
{
word:"ALWAYS",
pictures:[
["♾️","Forever"],
["🔄","Again"],
["❤️","Love"],
["🌙","Every night"]
],
letters:["A","L","W","A","Y","S","T","R","E","O"]
}
];

let currentRound=0;
let currentAnswer=[];
let lives=3;
let hintUsed=false;
const gameCard=document.getElementById("gameCard");
const phraseScreen=document.getElementById("phraseScreen");
const successScreen=document.getElementById("successScreen");
const pictures=document.getElementById("pictures");
const answer=document.getElementById("answer");
const letters=document.getElementById("letters");
const message=document.getElementById("message");
const hearts=document.getElementById("hearts");
const roundText=document.getElementById("roundText");
const progressBar=document.getElementById("progressBar");
const hintBtn=document.getElementById("hintBtn");
const foundWords=document.getElementById("foundWords");
const phraseAnswer=document.getElementById("phraseAnswer");
const phraseLetters=document.getElementById("phraseLetters");
const phraseMessage=document.getElementById("phraseMessage");
const phraseSubmit=document.getElementById("phraseSubmit");

function loadRound(){
const round=rounds[currentRound];
currentAnswer=[];
hintUsed=false;
roundText.textContent=`${currentRound+1} / ${rounds.length}`;
progressBar.style.width=`${((currentRound+1)/rounds.length)*100}%`;
message.textContent="";
hintBtn.disabled=false;
hintBtn.style.opacity="1";
pictures.innerHTML="";
answer.innerHTML="";
letters.innerHTML="";
round.pictures.forEach(pic=>{
const card=document.createElement("div");
card.className="picture";
card.innerHTML=`<span class="picture-icon">${pic[0]}</span><span class="picture-text">${pic[1]}</span>`;
pictures.appendChild(card);
});
for(let i=0;i<round.word.length;i++){
const slot=document.createElement("div");
slot.className="answer-slot";
answer.appendChild(slot);
}
let shuffled=[...round.letters];
shuffleArray(shuffled);
shuffled.forEach(letter=>{
const button=document.createElement("button");
button.type="button";
button.className="letter-btn";
button.textContent=letter;
button.addEventListener("click",()=>chooseLetter(button,letter));
letters.appendChild(button);
});
}

function chooseLetter(button,letter){
if(currentAnswer.length>=rounds[currentRound].word.length)return;
button.classList.add("used");
currentAnswer.push(letter);
updateAnswer();
if(currentAnswer.length===rounds[currentRound].word.length){
checkWord();
}
}

function updateAnswer(){
const slots=answer.querySelectorAll(".answer-slot");
slots.forEach((slot,index)=>{
slot.textContent=currentAnswer[index]||"";
});
}

function checkWord(){
const correct=rounds[currentRound].word;
const attempt=currentAnswer.join("");
if(attempt===correct){
message.textContent="That's it! ♡";
setTimeout(()=>{
if(currentRound<rounds.length-1){
currentRound++;
loadRound();
}else{
showPhraseScreen();
}
},800);
}else{
lives--;
updateHearts();
message.textContent="Not quite... try again. ♡";
setTimeout(()=>{
currentAnswer=[];
document.querySelectorAll(".letter-btn").forEach(button=>button.classList.remove("used"));
updateAnswer();
message.textContent="";
},700);
if(lives<=0){
setTimeout(()=>{
lives=3;
updateHearts();
message.textContent="A little reset. You've got this. ♡";
},800);
}
}
}

function updateHearts(){
hearts.textContent="♥ ".repeat(lives)+"♡ ".repeat(3-lives);
}

hintBtn.addEventListener("click",()=>{
if(hintUsed)return;
const correct=rounds[currentRound].word;
const neededIndex=currentAnswer.length;
const neededLetter=correct[neededIndex];
const buttons=[...document.querySelectorAll(".letter-btn")];
const target=buttons.find(button=>button.textContent===neededLetter&&!button.classList.contains("used"));
if(target){
target.classList.add("used");
currentAnswer.push(neededLetter);
updateAnswer();
hintUsed=true;
hintBtn.disabled=true;
hintBtn.style.opacity=".4";
message.textContent=`A little help: the next letter is "${neededLetter}". ♡`;
if(currentAnswer.length===correct.length){
checkWord();
}
}
});

function showPhraseScreen(){
gameCard.style.display="none";
phraseScreen.classList.add("active");
foundWords.innerHTML="";
rounds.forEach(round=>{
const word=document.createElement("span");
word.className="found-word";
word.textContent=round.word;
foundWords.appendChild(word);
});
createPhrase();
}

function createPhrase(){
const phrase="MYAUGUSTTOALWAYS";
const spaces=[2,8,10];
phraseAnswer.innerHTML="";
phraseLetters.innerHTML="";
let position=0;
for(let i=0;i<phrase.length;i++){
if(spaces.includes(i)){
const space=document.createElement("span");
space.className="phrase-space";
phraseAnswer.appendChild(space);
}
const slot=document.createElement("div");
slot.className="phrase-slot";
slot.dataset.position=position;
phraseAnswer.appendChild(slot);
position++;
}
const lettersPool=[..."MYAUGUSTTOALWAYS","R","E","N","P","L","I","C"];
shuffleArray(lettersPool);
lettersPool.forEach(letter=>{
const button=document.createElement("button");
button.type="button";
button.className="letter-btn";
button.textContent=letter;
button.addEventListener("click",()=>choosePhraseLetter(button,letter));
phraseLetters.appendChild(button);
});
}

let phraseAnswerArray=[];

function choosePhraseLetter(button,letter){
if(phraseAnswerArray.length>=16)return;
button.classList.add("used");
phraseAnswerArray.push(letter);
updatePhrase();
}

function updatePhrase(){
const slots=phraseAnswer.querySelectorAll(".phrase-slot");
slots.forEach((slot,index)=>{
slot.textContent=phraseAnswerArray[index]||"";
});
}

phraseSubmit.addEventListener("click",()=>{
const attempt=phraseAnswerArray.join("");
if(attempt==="MYAUGUSTTOALWAYS"){
showSuccess();
}else{
phraseMessage.textContent="Almost... put the words together carefully. ♡";
phraseAnswerArray=[];
document.querySelectorAll(".phrase-letters .letter-btn").forEach(button=>button.classList.remove("used"));
updatePhrase();
}
});

function showSuccess(){
phraseScreen.classList.remove("active");
successScreen.classList.add("active");
for(let i=0;i<30;i++){
setTimeout(createHeart,i*70);
}
}

function createHeart(){
const heart=document.createElement("span");
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=12+Math.random()*20+"px";
heart.style.color="rgba(125,41,69,.35)";
heart.style.pointerEvents="none";
heart.style.zIndex="10";
heart.textContent=Math.random()>0.5?"♡":"♥";
heart.style.animation=`floatUp ${4+Math.random()*4}s linear forwards`;
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),9000);
}

function shuffleArray(array){
for(let i=array.length-1;i>0;i--){
const j=Math.floor(Math.random()*(i+1));
[array[i],array[j]]=[array[j],array[i]];
}
}

const style=document.createElement("style");
style.textContent="@keyframes floatUp{from{transform:translateY(0) rotate(0);opacity:0}15%{opacity:1}to{transform:translateY(-110vh) rotate(25deg);opacity:0}}";
document.head.appendChild(style);

loadRound();
updateHearts();