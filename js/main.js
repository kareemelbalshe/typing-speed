const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];


const lvls = {
    "Easy": 7,
    "Normal": 5,
    "Hard": 4
  };

let defaultLevelName="Normal";
let defaultLevelSeconds=lvls[defaultLevelName];

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

let chose=document.querySelector(".chose");
let choseYes=document.querySelector(".chose .yes");
let change=document.querySelector(".change");
let easy=document.querySelector(".change .easy");
let normal=document.querySelector(".change .normal");
let hard=document.querySelector(".change .hard");

lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

chose.onclick=function(){
  choseYes.onclick=function(){
    change.style.display="flex";
    chose.remove();
    easy.onclick=function(){
      defaultLevelName="Easy";
      defaultLevelSeconds=lvls[defaultLevelName];
      lvlNameSpan.innerHTML = defaultLevelName;
      secondsSpan.innerHTML = defaultLevelSeconds;
      timeLeftSpan.innerHTML = defaultLevelSeconds;
      scoreTotal.innerHTML = words.length;
      change.remove();
    };
    normal.onclick=function(){
      defaultLevelName="Normal";
      defaultLevelSeconds=lvls[defaultLevelName];
      lvlNameSpan.innerHTML = defaultLevelName;
      secondsSpan.innerHTML = defaultLevelSeconds;
      timeLeftSpan.innerHTML = defaultLevelSeconds;
      scoreTotal.innerHTML = words.length;
      change.remove();
    };
    hard.onclick=function(){
      defaultLevelName="Hard";
      defaultLevelSeconds=lvls[defaultLevelName];
      lvlNameSpan.innerHTML = defaultLevelName;
      secondsSpan.innerHTML = defaultLevelSeconds;
      timeLeftSpan.innerHTML = defaultLevelSeconds;
      scoreTotal.innerHTML = words.length;
      change.remove();
    };
  };
}




input.onpaste = function(){
  return false;
}

startButton.onclick = function() {
  this.remove();
  input.focus();

  chose.remove();
  genWords();
};


function genWords() {
  let randomWord=words[Math.floor(Math.random() * words.length)];

  let wordIndex=words.indexOf(randomWord);

  words.splice(wordIndex,1);


  theWord.innerHTML=randomWord;

  upcomingWords.innerHTML='';

  for(let i=0;i<words.length;i++){
    let div =document.createElement("div");

    let txt=document.createTextNode(words[i]);

    div.appendChild(txt);

    upcomingWords.appendChild(div);
  }
  startPlay();
}


function startPlay(){
  timeLeftSpan.innerHTML=defaultLevelSeconds;
  let start=setInterval(()=>{
    timeLeftSpan.innerHTML--;
    if(timeLeftSpan.innerHTML==="0"){
      clearInterval(start);
      if(theWord.innerHTML.toLowerCase()===input.value.toLowerCase()){
        input.value='';

        scoreGot.innerHTML++;

        if(words.length>0){
          genWords();
        }
        else{
          let span=document.createElement("span");
          span.className='good';
          let spanText=document.createTextNode("congratz");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          upcomingWords.remove();
        }
      }
      else{
        let span=document.createElement("span");
        span.className='bad';
        let spanText=document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    
    }
  },1000);
  
}
