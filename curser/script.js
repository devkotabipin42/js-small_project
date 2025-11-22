// const box =document.getElementById('box')
// const msg = document.querySelector('h1 span')
// box.addEventListener('mouseenter',function(){
//  console.log('event performed')
//  msg.innerHTML='devkota'

// })
// box.addEventListener('mouseleave',function(){
//  console.log('event left')
//  msg.innerHTML='pangeni'
// })

const main = document.getElementById('main')
const img = document.getElementById('arrow')

main.addEventListener('mousemove',function(dets){
console.log(dets.y)
img.style.left = dets.x +'px'
img.style.top = dets.y +'px'

})
