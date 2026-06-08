// ======================
// CAROUSEL
// ======================

const slides = [];

for(let i=1;i<=31;i++){

slides.push(`slide${i}.jpg`);

}

const notes = [

"Some people enter your life quietly and become your favourite chapter forever ❤️",

"School ke vo random din aaj sabse precious memories lagte hain ✨",

"Humne kitni baar kaha tha 'ye yaad rahega' aur sach me reh gaya 💖",

"Har photo ek memory nahi, ek feeling hai 🌸",

"Best part of growing up? Tum dono mere saath thi ❤️",

"Kitni fights hui, but friendship kabhi kam nahi hui 🤍",

"Life badalti gayi, friendship nahi ✨",

"Har hasi ke peeche tum dono ka naam hai 😭❤️",

"Ye moments dobara nahi aayenge, par yaadein hamesha rahengi 🌷",

"Humne ordinary days ko extraordinary bana diya 💫",

"Some memories are too beautiful for words ❤️",

"Har click ke saath ek kahani judi hai 📸",

"Thank you for being part of my happiest moments 💖",

"Hum alag alag ho sakte hain, par yaadein hamesha saath rahengi 🌸",

"Ye friendship meri favourite blessing hai ❤️",

"Teen log. Ek kahani. Hazaar memories ✨",

"Sabse beautiful chapter tum dono ho 🌷",

"Kabhi socha nahi tha itni achhi memories ban jayengi 💖",

"School se future tak... tum dono saath ho ❤️",

"Har memory me ek smile chhupi hai 😊",

"Ye photos nahi, time machine hain ✨",

"Jab bhi dekhungi, smile aa hi jayegi ❤️",

"Life ke best moments mostly planned nahi the 💫",

"Thank you for making life beautiful 🌸",

"Some bonds are simply forever ❤️",

"Kitni bakchodi ki hai humne 😭😂",

"Har photo me ek story hai jo sirf hum samajhte hain 💖",

"Friendship goals? Bas hum teen ❤️",

"Years later bhi ye memories special rahengi ✨",

"Some people become home ❤️",

"And this is just the beginning of many more memories 🌷"

];

const slideImage =
document.getElementById("slideImage");

const memoryText =
document.getElementById("memoryText");

let currentSlide = 0;

setInterval(()=>{

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slideImage.src =
`images/${slides[currentSlide]}`;

memoryText.innerText =
notes[currentSlide];

},2000);


// ======================
// MEMORY WALL
// ======================

const photoGrid =
document.getElementById("photoGrid");

for(let i=1;i<=31;i++){

const card =
document.createElement("div");

card.classList.add("photo-card");

card.innerHTML = `

<img
src="images/slide${i}.jpg"
alt="Memory ${i}">

<p>

${notes[(i-1)%notes.length]}

</p>

`;

photoGrid.appendChild(card);

}


// ======================
// BACKGROUND MUSIC
// ======================

const bgMusic =
document.getElementById("bgMusic");

window.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.volume = 0.4;

bgMusic.play().catch(()=>{});

}

},{once:true});


// ======================
// AUDIO CONTROL
// ======================

const friendAudios =
document.querySelectorAll("audio:not(#bgMusic)");

friendAudios.forEach(audio=>{

audio.addEventListener("play",()=>{

bgMusic.pause();

});

audio.addEventListener("ended",()=>{

bgMusic.play().catch(()=>{});

});

});


// ======================
// VIDEO CONTROL
// ======================

const danceVideo =
document.querySelector("video");

danceVideo.addEventListener("play",()=>{

bgMusic.pause();

});

danceVideo.addEventListener("ended",()=>{

bgMusic.play().catch(()=>{});

});


// ======================
// TIME CAPSULE LOAD
// ======================

window.onload = ()=>{

document.getElementById("rekhaBox").value =
localStorage.getItem("rekhaBox") || "";

document.getElementById("tamannaBox").value =
localStorage.getItem("tamannaBox") || "";

document.getElementById("riyaBox").value =
localStorage.getItem("riyaBox") || "";

};


// ======================
// SAVE CAPSULE
// ======================

function saveCapsule(id){

const value =
document.getElementById(id).value;

localStorage.setItem(id,value);

alert("Saved Successfully 💖");

}


// ======================
// FINAL PAGE
// ======================

function goToFinalPage(){

window.location.href =
"page4.html";

}