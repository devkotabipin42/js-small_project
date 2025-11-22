var h1 = document.querySelector('h1')

document.querySelector('body').addEventListener('keydown',function(dets){
 console.log(dets.key)
 h1.innerHTML=dets.code
})