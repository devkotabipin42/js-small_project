const users = [
  {
    name: "Harish",
    img: "https://images.unsplash.com/photo-1760645611765-a3df6c92bda3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sarah",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "David",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "Priya",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "James",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "Anita",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "Michael",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "Emily",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: "Robert",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    name: 'Lisa',
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  }
];

var img = document.querySelector('.liker')
var love = document.querySelector('#love')
var postContainer = document.getElementById('posts')

var sum = ''

users.forEach(function(elem){
    sum = sum + `<div class="middle">
  <div class="upper">
   <img src="${elem.img}" alt="">
   <h2>${elem.name}</h2>
   <h1>...</h1>
  </div>
  <div class="cover">
  <img class="liker" src="${elem.img}" alt="" class="no-padding">
    <div class="child">
      <i class="ri-heart-3-line"></i>
      <h3>${elem.name} post a photo</h3>
    </div>
  </div>
 </div>`
})


postContainer.innerHTML= sum

// img.addEventListener('dblclick', function(){
//  love.style.opacity =1
//  love.style.transform='translate(-50%,-50%) scale(1) rotate(0deg);'
//  console.log('hello')
//  console.log(love)

//  setTimeout(function(){
//   love.style.transform=' translate(-50%,-300%) scale(1) rotate(60deg)'
//  },800)
//  setTimeout(function () {
//         love.style.opacity = 0
//     }, 1000)
//     setTimeout(function () {
//         love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
//     }, 1200)
// })