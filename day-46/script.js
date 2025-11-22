let grow = 0
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let h = document.querySelector('h2')
let inner = document.querySelector('.inner')
let container = document.querySelector('.container')

btn.addEventListener('click',function(){
btn.style.pointerEvents='none'
let op  =document.createElement('h2')
 op.innerHTML='Your file is downloading from Youtube to Desktop File'
let op1 = container.querySelector('h2')
op1.insertAdjacentElement('afterend',op)
op.style.fontSize='10px'
op.style.padding='0'
op.style.color='blue'
// op.style.margin='0'


let num = 50+ Math.floor(Math.random()*50)

console.log(grow,num)

let int = setInterval(()=>{
 grow++
 h1.innerHTML=grow +'%'
 inner.style.width= grow+'%'
},num)

setTimeout(()=>{
 clearInterval(int)
 btn.innerHTML='Downloaded'
 op.innerHTML=''
 btn.style.opacity=0.5
},num*100)
})