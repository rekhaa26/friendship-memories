function openMemory(imageName){
document.getElementById("popup").style.display = "flex";
document.getElementById("popupImage").src = "images/" + imageName;
}

function closeMemory(){
document.getElementById("popup").style.display = "none";
}

// START BUTTON → OPEN QUESTION POPUP
document.getElementById("startBtn").addEventListener("click", () => {
document.getElementById("questionPopup").style.display = "flex";
});

// CLOSE QUESTION POPUP (BACK BUTTON)
function closeQuestion(){
document.getElementById("questionPopup").style.display = "none";
document.getElementById("hintText").innerHTML = "";
document.getElementById("animalAnswer").value = "";
}

// HINT
function showHint(){
document.getElementById("hintText").innerHTML =
"💡 Hint: It's always around us.";
}

// ANSWER CHECK
function checkAnimal(){

let answer = document
.getElementById("animalAnswer")
.value
.toLowerCase()
.trim();

if(answer === "Men" || answer === "men" || answer === "Humans" || answer === "humans") {

window.location.href = "page2.html";

}else{
alert("Wrong answer 😏 Try again");
}
}