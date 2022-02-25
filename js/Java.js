const btnReplay=document.querySelector(".button1");
const animation=document.querySelector(".element");

animation.addEventListener("animationend", function(){
  animation.classList.remove("animation");
})

btnReplay.addEventListener("click", function(){
  animation.classList.add("animation");
})