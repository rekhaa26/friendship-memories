const diary = document.getElementById("openDiary");
const diarySection = document.getElementById("diarySection");
const storyBox = document.getElementById("storyBox");

diary.addEventListener("click",()=>{

diary.style.display="none";

diarySection.classList.remove("hidden");

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

});

window.onload=()=>{

let savedStory =
localStorage.getItem("friendshipStory");

if(savedStory){

storyBox.value=savedStory;

}

let locked =
localStorage.getItem("storyLocked");

if(locked==="true"){

storyBox.disabled=true;

document
.getElementById("continueBtn")
.style.display="inline-block";

}

};

function openLetter(){

document
.getElementById("letter")
.classList.remove("hidden");

}

function saveStory(){

localStorage.setItem(
"friendshipStory",
storyBox.value
);

alert("Draft Saved 💾");

}

setInterval(()=>{

if(!storyBox.disabled){

localStorage.setItem(
"friendshipStory",
storyBox.value
);

}

},10000);

function submitStory(){

if(storyBox.value.trim()===""){

alert("Write something first ❤️");

return;
}

let confirmSubmit=confirm(
"Once submitted, you cannot edit it again.\n\nContinue?"
);

if(confirmSubmit){

localStorage.setItem(
"friendshipStory",
storyBox.value
);

localStorage.setItem(
"storyLocked",
"true"
);

storyBox.disabled=true;

alert("✨ Story Accepted ✨");

setTimeout(()=>{

document
.getElementById("continueBtn")
.style.display="inline-block";

},2000);

}

}

function goToPage3(){

window.location.href="page3.html";

}