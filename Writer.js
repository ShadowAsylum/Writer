
//Buttons
function undo() { document.execCommand("undo", false, null); }
function redo() { document.execCommand("redo", false, null); }
function bold() { typeHere.document.execCommand("bold", false, null); }
function italic() { typeHere.document.execCommand("italic", false, null); }
function underline() { typeHere.document.execCommand("underline", false, null); }
function cross() { typeHere.document.execCommand("strikethrough", false, null); }


function countWords(str) {

var count = 0;
for (var i = 0; i < str.length; i++) {
   if (str.charAt(i) == " ") {
        count ++;
    }
}
return count + 1;
}

function test(){
let counting = (countWords(document.getElementById('myIframe').contentWindow.document.body.innerHTML));
document.getElementById('wordCounter').innerHTML=counting;
}
setInterval(test, 100)

 
var black = 'rgb(0, 0, 0)'
var red = 'rgb(255, 0, 0)';;

var consoleON = false;

function menu() {
if(consoleON == false ){
anime({
  targets: '.convert',
  easing: 'linear',
  translateX: -1400,
  duration: 650
  
});
consoleON = true;
}else if (consoleON == true){
  anime({
  targets: '.convert',
  easing: 'linear',
  translateX: 1400,
  duration: 650
});
consoleON = false;
}
}
//terminal

var showingSourceCode = false;

function code(){
    let text = document.getElementById('myIframe').contentWindow.document.body.innerHTML;
    text= text.split("</div>").join("\n");
    text= text.split("<div>").join("");
    text= text.split("<div>").join("");
    text= text.split("&nbsp;").join("");
    text= text.split("<br>").join("\n");
    console.log(text);

    document.getElementById('log').textContent = text;
    //popup
    swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your work has been saved in Terminal',
  showConfirmButton: false,
  timer: 1500
})
};

var terminalON = false;

function terminal(){
if(terminalON == false ){
anime({
  targets: '.terminal',
  translateX: 1400,
  duration: 800
  
});
terminalON = true;
}else if (terminalON == true){
  anime({
  targets: '.terminal',
  translateX: -1400,
  duration: 800
});
terminalON = false;
}
};

//chose file
const OgFileBtn = document.getElementById('realFileOpenBtn'); 
const MyFileBtn = document.getElementById('fileOpenBtn'); 

MyFileBtn.addEventListener('click', function(){
OgFileBtn.click();
});

const FileName = document.getElementById('userName')
OgFileBtn.addEventListener('change', function(){
     //popup
    swal.fire({
  position: 'center',
  icon: 'success',
  title: 'File Imported To Inspect',
  showConfirmButton: false,
  timer: 1000
});
var fr = new FileReader();
 fr.onload = function(){
   var str = this.result
   
   document.getElementById("convert").textContent = str.split("&nbsp;").join("");
   document.getElementById("convert").textContent = str.replace(/<br\s*[\/]?>/gi, "\n");
 }
 fr.readAsText(this.files[0]);
  if(OgFileBtn.value){
FileName.value = OgFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  }else{
    FileName.value= '';
  }
})
//screen compatibality 

function myFunction(screen1) {
  if (screen1.matches) { // If media query matches
    typeHere.document.body.style.fontSize = "14";
  }else{
    typeHere.document.body.style.fontSize = "20";
  }
};

var screen1 = window.matchMedia("(max-width: 700px)")
myFunction(screen1) // Call listener function at run time
screen1.addListener(myFunction) // Attach listener function on state changes

//OpenTerminal using Alt + T
let keysPressed = {};


typeHere.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;

   if (keysPressed['Alt'] && event.key == 't') {
if(terminalON == false ){
anime({
  targets: '.terminal',
  translateX: 1400,
  duration: 800
  
});
terminalON = true;
}else if (terminalON == true){
  anime({
  targets: '.terminal',
  translateX: -1400,
  duration: 800
});
terminalON = false;
}

typeHere.addEventListener('keyup', (event) => {
   delete keysPressed[event.key];
});
}
});


let keysPressed2 = {};

//open MyInspect

typeHere.addEventListener('keydown', (event2) => {
   keysPressed2[event2.key] = true;

   if (keysPressed2['Alt'] && event2.key == 'i') {
if(consoleON == false ){
anime({
  targets: '.convert',
  easing: 'linear',
  translateX: -1400,
  duration: 650
  
});
consoleON = true;
}else if (consoleON == true){
  anime({
  targets: '.convert',
  easing: 'linear',
  translateX: 1400,
  duration: 650 
});
consoleON = false;
}

typeHere.addEventListener('keyup', (event2) => {
   delete keysPressed2[event2.key];
})
   }});
