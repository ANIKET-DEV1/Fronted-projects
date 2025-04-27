
let a=document.querySelector(".yehai");

a = addEventListener('click',()=>{
let b=document.querySelector(".onmove");
b.style.display = "block";
console.log("click")}
)
a = addEventListener('mouseout',()=>{
   let b=document.querySelector(".onmove");
   b.style.display = "none";
   console.log("click")}
   )
   let c=document.querySelector(".img");
c=addEventListener('mousemove',()=>{
   let down=document.querySelector(".down")
   down.style.animation="noway"})