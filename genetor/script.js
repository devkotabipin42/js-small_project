const p= document.querySelector('p')
const text = p.innerText
const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNIOPDFE'

let iteration= 0

function randomText(){
 const str= text.split('').map((char,idx)=>{
  if(idx<iteration){
    return char
  }
    return character.split('')[Math.floor(Math.random()*52)]
  }).join('')
  p.innerText=str
  setTimeout(()=>{
  iteration+=0.50
   
  },1000)

}
setInterval(randomText,50)
// function randomText(){
//   const str = text.split('').map((char,index)=>{
//     if (index < iteration){
//       return char
//     }
//     return character.split('')[Math.floor(Math.random()*52)] 
//   }).join('')
//   p.innerText=str

//   iteration+=0.25
// }

// setInterval(randomText,30)