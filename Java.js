const lecteurVideo = document.querySelector("anim");
const btnPlay = document.querySelector(".button1");

btnPlay.addEventListener("click", function(){
    lecteurVideo.button1();
  });












const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");

btnPlay.addEventListener("click", function(){
  lecteurVideo.play();
  console.log(lecteurVideo.paused);
});

btnPause.addEventListener("click", function(){
  lecteurVideo.pause();
  console.log(lecteurVideo.paused);
});

btnStop.addEventListener("click", function(){
  lecteurVideo.pause();
  lecteurVideo.currentTime = 48;
});

console.log(lecteurVideo.duration);
console.log(lecteurVideo.currentTime);

lecteurVideo.playbackRate = 0.7;

if(lecteurVideo.pauses == false){
  console.log(lecteurVideo.currentTime);
}