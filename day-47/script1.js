


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
var home = document.getElementById('home')
var reel = document.querySelector('.reels')
var imgs = document.querySelector('.imgs')

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
const API_KEY =' '

channel_Id=' '
function addData(){
  async function loadChannel(){
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=short&order=date&maxResults=50&q=shorts&key=${API_KEY}
`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  
  // const result = data.result
  sum=''
  data.items.forEach(function(video,idx){
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const channelName = video.snippet.channelTitle;
    const channelId = video.snippet.channelId;
    const thumbnail = video.snippet.thumbnails.high.url;


    // Temporary custom data (you can modify)
    const likeCount = Math.floor(Math.random() * 2000);
    const commentCount = Math.floor(Math.random() * 500);
    const shareCount = Math.floor(Math.random() * 300);

    const isLiked=false
    const isSubscribed=false
    const caption=title

   sum += ` <div class="reels1">

        <iframe 
          class="youtube"
          src="https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&loop=1&playlist=${videoId}"
          allow="autoplay; encrypted-media">
        </iframe>

        <div class="right">
          <div class="like">
            <h4 class="like-icon icon"><i class="ri-heart-3-line"></i></h4>
            <h6>${likeCount}</h6>
          </div>

          <div class="comment">
            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
            <h6>${commentCount}</h6>
          </div>

          <div class="share">
            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
            <h6>${shareCount}</h6>
          </div>

          <div class="menu">
            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
          </div>
        </div>

        <div class="sub">
          <img src="${thumbnail}" alt="">

          <div class="fullTittle">
            <div class="name"><h2>${channelName}</h2></div>
            <div><button id="${idx}" class="subb">${isSubscribed ? 'Unsubscribe' : 'Subscribe'}</button></div>
          </div>

          <div class="Lorem"><p>${caption}</p></div>
        </div>

     </div>`
  })
    allReels.innerHTML=sum
   
}
loadChannel()

}
addData()

let players = [];

function onYouTubeIframeAPIReady() {
  document.querySelectorAll('.youtube').forEach((iframe, index) => {
    players[index] = new YT.Player(iframe, {
      events: {
        'onReady': function(event){
          console.log('player Ready:',index)
        }
      }
    });
  });
}


document.addEventListener("click", function (event) {
  const iframe = event.target.closest(".youtube");

  if (iframe) {
    const index = Array.from[document.querySelectorAll('.youtube')].indexOf(iframe);
    if (players[index]) {
      players[index].unMute();     // 🔥 SOUND ON
      players[index].playVideo();  // 🔥 Make sure video continues playing
    }
  }
});


allReels.addEventListener('click',function(dets){
  if(dets.target.className=='like'){
  if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked=true
  }else {
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked=false
  }
}

if (dets.target.className =='subb'){
  if(!reels[dets.target.id].isSubscribed){
    reels[dets.target.id].isSubscribed=true
  } else{
    reels[dets.target.id].isSubscribed=false
  }
}
  console.log(dets.target.className)
addData()

})


home.addEventListener('click',function(){
  console.log(reel);
  reel.style.opacity = 0  
  reel.style.display='none'
})

imgs.addEventListener('click',function(){
  console.log('hello')
  reel.style.opacity=1
  reel.style.display='block'
  postContainer.style.display='none'
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





