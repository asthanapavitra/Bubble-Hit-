

var timer=45;
var hitRn;
var score=0;
var hitbubble=new Audio('./bubble-sound-43207.mp3');
var gameover=new Audio('kl-peach-game-over-iii-142453.mp3');
function makeBubble(){
    var panelForBubble=document.querySelector('#pbtm');
    console.log(panelForBubble);
    panelForBubble.innerHTML='';
    for(var i=1;i<=152;i++){
        var num=Math.floor(Math.random()*10);
        panelForBubble.innerHTML+=`<div class='bubble'>${num}</div>`;
    }
}
function makeSound(sound){
    sound.play();
}
function setTimer(){
    var timeIn=setInterval(() => {
        if(timer==0){
            makeSound(gameover);
            document.querySelector("#pbtm").innerHTML=
            `<h1>Game Over</h1><h3>Your final score is ${score}</h3>`
            document.querySelector("#pbtm").style.flexDirection='column';
            document.querySelector("#pbtm").style.alignContent='center';
            gameOverEffect();
            clearInterval(timeIn);
            
        }
        else{
            timer--;
            document.querySelector('#timeValue').textContent=timer;
           
        }
    }, 1000);
}
function getNewHit(){
    hitRn=Math.floor(Math.random()*10);
    document.querySelector('#hitValue').textContent=hitRn;
}
function increaseScore(){
    score+=5;
    document.querySelector('#scoreValue').textContent=score;
}
document.querySelector('#pbtm').addEventListener('click',(dets)=>{
    makeSound(hitbubble);
    var clickedNumber=dets.target.textContent;
    if(clickedNumber==hitRn){
        increaseScore();
        makeBubble();
        console.log('clicked');
        getNewHit();
    }
})
function gameOverEffect(){
    var tl=gsap.timeline();
    tl.from('#pbtm h1',{
        duration:1,
        scale:0.5,
    })
    tl.from( '#pbtm h3',{
        duration:1,
        scale:0
    })
}
makeBubble();
setTimer();
getNewHit();
