const diary = document.getElementById("openDiary");
const diarySection = document.getElementById("diarySection");
const storyBox = document.getElementById("storyBox");


// =======================
// OPEN DIARY
// =======================

diary.addEventListener("click",()=>{

diary.style.display = "none";

diarySection.classList.remove("hidden");

window.scrollTo({

top: document.body.scrollHeight,

behavior: "smooth"

});

});


// =======================
// LOAD SAVED DATA
// =======================

window.onload = ()=>{

let savedStory =
localStorage.getItem("friendshipStory");

if(savedStory){

storyBox.value = savedStory;

}

let locked =
localStorage.getItem("storyLocked");

if(locked === "true"){

storyBox.disabled = true;

document
.getElementById("continueBtn")
.style.display = "inline-block";

document
.getElementById("editBtn")
.style.display = "inline-block";

}

};


// =======================
// SECRET LETTER
// =======================

function openLetter(){

document
.getElementById("letter")
.classList.remove("hidden");

}


// =======================
// SAVE STORY
// =======================

function saveStory(){

localStorage.setItem(

"friendshipStory",

storyBox.value

);

alert("Draft Saved 💾");

}


// =======================
// AUTO SAVE EVERY 10 SEC
// =======================

setInterval(()=>{

if(!storyBox.disabled){

localStorage.setItem(

"friendshipStory",

storyBox.value

);

}

},10000);


// =======================
// SUBMIT STORY
// =======================

function submitStory(){

if(storyBox.value.trim() === ""){

alert("Write something first ❤️");

return;

}

let confirmSubmit = confirm(

"Seal this story?\n\nYou can unlock and edit it later if needed."

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

storyBox.disabled = true;

document
.getElementById("continueBtn")
.style.display = "inline-block";

document
.getElementById("editBtn")
.style.display = "inline-block";

alert("✨ Story Sealed Successfully ✨");

}

}


// =======================
// EDIT STORY
// =======================

function editStory(){

let confirmEdit = confirm(

"Do you want to unlock and edit the story again? ✏️"

);

if(confirmEdit){

storyBox.disabled = false;

localStorage.setItem(

"storyLocked",

"false"

);

document
.getElementById("editBtn")
.style.display = "none";

alert("Story Unlocked ❤️");

}

}


// =======================
// PAGE 3
// =======================

function goToPage3(){

window.location.href = "page3.html";

}