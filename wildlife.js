





//formatting the buttons and putting them on page
duckButton =
'<button type="button" id="duckButton" class="btn btn-secondary btn-large btn-block" style = "font-size:1.5rem;">Is it swimming like a duck?</button>';
document.getElementById("wildlifediv").innerHTML += duckButton;

waderButton =
'<button type="button" id="waderButton" class="btn btn-primary btn-large btn-block" style = "font-size:1.5rem;">Is it walking around on long legs?</button>';
document.getElementById("wildlifediv").innerHTML += waderButton;

gullButton =
'<button type="button" id="gullButton" class="btn btn-secondary btn-large btn-block" style = "font-size:1.5rem;">Is it flying around like a seagull?</button>';
document.getElementById("wildlifediv").innerHTML += gullButton;

hawkButton =
'<button type="button" id="hawkButton" class="btn btn-primary btn-large btn-block" style = "font-size:1.5rem;">Is it a soaring like a hawk?</button>';
document.getElementById("wildlifediv").innerHTML += hawkButton;

smallbirdButton =
'<button type="button" id="smallbirdButton" class="btn btn-secondary btn-large btn-block" style = "font-size:1.5rem;">Is it a small bird on a branch?</button>';
document.getElementById("wildlifediv").innerHTML += smallbirdButton;

//adding the event listeners to the buttons on the bird page
function addEvents() {
    document.getElementById("duckButton").addEventListener("click", function () {
        duckClick()});
    document.getElementById("waderButton").addEventListener("click", function () {
        waderClick()});
    document.getElementById("gullButton").addEventListener("click", function () {
        gullClick()});
    document.getElementById("hawkButton").addEventListener("click", function () {
        hawkClick()});
    document.getElementById("smallbirdButton").addEventListener("click", function () {
        smallbirdClick()});
};

function duckClick() {
    console.log("quack")
}

function waderClick() {
    console.log("look at me walking!")
}

function gullClick() {
    console.log("give me a french fry!")
}

function hawkClick() {
    console.log("Look out below!")
}

function smallbirdClick() {
    console.log("Fill the bird feeder!")
}

addEvents();