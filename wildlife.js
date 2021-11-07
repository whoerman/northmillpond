duckButton =
'<button type="button" id="duckButton" class="btn btn-success">Duck</button>';
//placing the duck card in the content div
document.getElementById("wildlifediv").innerHTML += duckButton;
//adding the event listener to the button on the intro page
document.getElementById("duckButton").addEventListener("click", function () {
console.log("quack");
});

waderButton =
'<button type="button" id="waderButton" class="btn btn-primary">Wader</button>';
//placing the wader button in the wildlife div
document.getElementById("wildlifediv").innerHTML += waderButton;
//adding the event listener to the wader button on the page
document.getElementById("waderButton").addEventListener("click", function () {
console.log("that is a wader!");
});