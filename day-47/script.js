
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

const reels = [

  {
    ismuted:true,
    username: "travel_with_ami",
    likeCount: 12400,
    isLiked: false,
    commentCount: 342,
    caption: "Beautiful sunset in Bali 🌅✨",
    video: "./vedio/vedio1.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 89,
    isSubscribed: false
  },

  {ismuted:true,
    username: "tech_bro_gaming",
    likeCount: 8900,
    isLiked: true,
    commentCount: 220,
    caption: "OP gameplay today 🔥🎮",
    video: "./vedio/vedio2.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 120,
    isSubscribed: true
  },

  {ismuted:true,
    username: "fitness_kiran",
    likeCount: 15200,
    isLiked: false,
    commentCount: 180,
    caption: "Home workout – no excuses 💪",
    video: "./vedio/vedio3.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 90,
    isSubscribed: false
  },

  {ismuted:true,
    username: "foodielover",
    likeCount: 20450,
    isLiked: false,
    commentCount: 510,
    caption: "Korean ramen challenge 🍜🔥",
    video: "./vedio/vedio4.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 150,
    isSubscribed: true
  },

  {ismuted:true,
    username: "nature_clicks",
    likeCount: 7700,
    isLiked: false,
    commentCount: 98,
    caption: "Forest vibes 🌿🕊",
    video: "./vedio/vedio5.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 40,
    isSubscribed: false
  },

  {ismuted:true,
    username: "dance_with_sana",
    likeCount: 30100,
    isLiked: true,
    commentCount: 780,
    caption: "New dance trend! 💃🔥",
    video: "./vedio/vedio6.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 310,
    isSubscribed: true
  },

  { 
    ismuted:true,
    username: "coding_sujan",
    likeCount: 4200,
    isLiked: false,
    commentCount: 65,
    caption: "JavaScript tricks you must know ⚡💻",
    video: "./vedio/vedio7.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 33,
    isSubscribed: false
  },

  { 
    ismuted:true,
    username: "pet_world",
    likeCount: 15000,
    isLiked: true,
    commentCount: 403,
    caption: "Cute cat attack 🐱😂",
    video: "./vedio/vedio8.mp4",
    userProfile: "https://images.unsplash.com/photo-1548142813-c348350df52b",
    shareCount: 140,
    isSubscribed: true
  },

  { 
    ismuted:true,
    username: "motivation_daily",
    likeCount: 9800,
    isLiked: false,
    commentCount: 210,
    caption: "You can do it. Don't stop now. ✨🔥",
    video: "./vedio/vedio9.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 70,
    isSubscribed: false
  },

  { 
    ismuted:true,
    username: "car_fanatic",
    likeCount: 17600,
    isLiked: true,
    commentCount: 312,
    caption: "Turbo sound lovers will enjoy this 🚗💨",
    video: "./vedio/vedio2.mp4",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 200,
    isSubscribed: true
  }
];

var img = document.querySelector('.liker')
var love = document.querySelector('#love')
var postContainer = document.getElementById('posts')
var home = document.getElementById('home')
var reel = document.querySelector('.reels')
var imgs = document.querySelector('.imgs')
var profile = document.querySelector('.profile')
var pro= document.querySelector('.pro')

var sum = ''

users.forEach(function(elem,idx){
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

//<i class="ri-thumb-up-line"><br>${elem.likeCount}</i>
  var allReels = document.querySelector('.reels')
  var isMuted=true
function addData(){
  var sum =''
reels.forEach(function(elem,idx){
  sum = sum +` <div class="reels1">
              <video autoplay loop ${elem.ismuted ? 'muted':''} src="${elem.video}"></video>
           <div class="right">
           <div class="mute" id=${idx}>
           ${elem.ismuted ?'<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}
              </div>
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked?'<i class="loves ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
          <div class="sub">
              <img src="${elem.userProfile}" alt="">

               <div class="fullTittle">
            <div class="name"><h2>${elem.username}</h2></div>
                <div><button  id=${idx} class="subb">${elem.isSubscribed?'Unsubscribe':'Subscribe'}</button></div>
              </div>
              <div class="Lorem"><p>${elem.caption}</p>
              </div>
          </div> 
      </div>`
    })
    allReels.innerHTML=sum
}
addData()

allReels.addEventListener('click',function(dets){
  if(dets.target.className=='like'){
  if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked=true
  }else {
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked=false
  }
addData()

}

if (dets.target.className =='subb'){
  if(!reels[dets.target.id].isSubscribed){
    reels[dets.target.id].isSubscribed=true
  } else{
    reels[dets.target.id].isSubscribed=false
  }
  console.log(dets.target.className)
addData()
}

if (dets.target.className =='mute'){
  if(!reels[dets.target.id].ismuted){
    reels[dets.target.id].ismuted=true
  } else{
    reels[dets.target.id].ismuted=false
  }
  addData()
}
})


home.addEventListener('click',function(){
  console.log(reel);
  // reel.style.opacity = 0  
  reel.style.display='none'


})

imgs.addEventListener('click',function(){
  console.log('hello')
  reel.style.opacity=1
  reel.style.display='block'
  // postContainer.style.display='block'
  profile.style.position='relative'

})

pro.addEventListener('click',function(){
  console.log('hello')
  reel.style.display='none'
  postContainer.style.display='none'
  profile.style.position='absolute'


})

// console.log(sum)
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




/*<div class="reels4">
            <div  class="fst">${elem.isLiked?'<i class="love ri-thumb-up-fill"></i>':'<i class="ri-thumb-up-line"></i>'}</div>
            <div class="snd"><i class="ri-message-2-line"></i><br>${elem.commentCount}</div>
            <div class="trd"><i class="ri-share-forward-line"><br>${elem.shareCount}</i></div>
          </div>  */

///////////////////////////////////////////////
//sportlight
addEventListener('mousemove',(e)=>{
  document.body.style.setProperty('--x',e.clientX +'px')
  document.body.style.setProperty('--y',e.clientY +'px')

})          


