const songs = [
  {
    title: "Phul Butte Sari",
    singer: "Trishala Gurung",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwL0NL_3FWzgBnfT02HDFQkAKlPESb7_ElQw&s",
    audio: "Celion_Dion_-_I_Love_You_(mp3.pm).mp3",
    description: "A beautiful modern rendition of the classic Nepali folk tune, expressing love and grace through melody."
  },
  {
    title: "Sasto Mutu",
    singer: "Sajjan Raj Vaidya",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWN5L4IQgqJJF0CJAxDwYS5m9yNqFfTEq7gQ&s",
    audio: "songs/sasto-mutu.mp3",
    description: "A soft romantic song about emotional connection, heartbreak, and the value of true feelings."
  },
  {
    title: "Hawa Le Gayo",
    singer: "Sushant KC",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqUlaJNnOby5tHAEx9wT4WzPKNP3Iae-5eA&s",
    audio: "songs/hawa-le-gayo.mp3",
    description: "A youthful, catchy Nepali pop song filled with energy, depicting lost love carried away by the wind."
  },
  {
    title: "Ful Ko Aakhama",
    singer: "Ani Choying Drolma",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUeJKFMCfhFiQ1IiIl0FLyrTgXwtH7SAn2g&s",
    audio: "songs/ful-ko-aakhama.mp3",
    description: "A soulful and peaceful Buddhist-inspired song spreading love, compassion, and inner calm."
  },
  {
    title: "Timi Nai Hau",
    singer: "Sajjan Raj Vaidya",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWTmrRp3zbztVnX3drSIuVdpgKtK_On3bcw&s",
    audio: "songs/timi-nai-hau.mp3",
    description: "A heartfelt romantic ballad that reminds us of finding one’s true person — the one who feels like home."
  }
];




// let progress= document.getElementById('progress')
// let song= document.getElementById('song')
// // let ctrlIcon= document.getElementById('ctrlIcon')
// let play= document.querySelector('#play')
// const about = document.getElementById('h1')
// const menuBar = document.querySelector('.menuBar')
// const plays = document.querySelector('.play')
// const Bars = document.querySelector('.bars')
// const liveSong = document.querySelector('.liveSong')
// let Box = document.querySelector('box')

const scrollbar = document.querySelector(".scrollbar");
const boxTitle = document.getElementById("box-title");
const boxDesc = document.getElementById("box-description");
const boxPhoto = document.getElementById("box-photo");
const boxIcon = document.getElementById("box-icon");
const upper = document.getElementById("upper");
const bars = document.querySelector('.bars')
const music = document.getElementById("song");
let currentSong = 0;


function loadSong(index){
  const s = songs[index]
  music.src = s.audio
  boxTitle.textContent = s.title;
  boxDesc.textContent = s.description;
  boxPhoto.src = s.photo;
updateActiveSong()
}
console.log(loadSong)
// loadSong(currentSong)

function loadSongList(){
  scrollbar.innerHTML=''
  songs.forEach((song,index)=>{
    const div = document.createElement('div')
    div.classList.add('music')
    if(index ===currentSong) div.classList.add('active')
      div.innerHTML=`<img src="${song.photo}"  "width:30px height=40px"   alt="">
      <h3>${song.title} <br> <span> By ${song.singer}+ '. 8 Songs' </span> </h3>
      <div><i class="fa-solid fa-play"></i></div>`

      div.addEventListener("click",()=>{
        currentSong = index
        loadSong(currentSong)
        music.play()
        updateActiveSong()
      })
      scrollbar.appendChild(div)
  })
}

function updateActiveSong(){
  const items = document.querySelectorAll('.music')
  items.forEach((el,i)=>{
    el.classList.toggle('active',i== currentSong)
  })
}

// Auto play next when song ends
music.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  music.play();
});

// ========== INITIAL RUN ==========
loadSongList();
loadSong(currentSong);





  
   upper.addEventListener("click", (e) => {
  e.preventDefault();

  if (bars.style.display === "flex") {
    // Fade out first
    bars.style.opacity = "0";
    setTimeout(() => {
      bars.style.display = "none";
    }, 300); // wait for fade-out
  } else {
    bars.style.display = "flex";
    bars.style.opacity = "0";
    setTimeout(() => {
      bars.style.opacity = "1";
    }, 10); // fade-in after small delay
  }
});
// const displayMovements = function(Box) {
//   Box.forEach(function(mov){
//     const html = `<div class="box">
//       <h2>${mov.title}</h2>
//       <p> The orginal slow instrumental <br> best playlist</p>
//       <div class="icon">
//        <img src=" https://i.pinimg.com/736x/cf/60/8a/cf608ab5deafb9a9753a58fd40d7b12c.jpg
//         " height="20" alt="">
//         <div class="heart1"><i class="fa-regular fa-heart"></i></div>
//         <div class="arrow"><i class="fa-solid fa-arrow-down"></i></div>
//         <div class="download"><i class="fa-solid fa-ellipsis"></i></div>
        
//         <div class="photo"> <img src="https://plus.unsplash.com/premium_photo-1669635062493-cd4806e9b5d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGxpc3RlbmluZyUyMHRvJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" height="180px" alt=""></div>
//       </div>
//     </div>`
//   })
// }
// displayMovements(title.Box)


//   play.addEventListener('click', function(event) {
//     event.preventDefault(); // ✅ prevents default (safe practice)
//     playPause(); // call your function

//   });

//   song.onloadedmetadata = function() {
//       progress.max = song.duration
//       progress.value = song.currentTime
//     }

//     function playPause(){
//       if(play.classList.contains('fa-pause')){
//         song.pause()
//         play.classList.remove('fa-pause')
//         play.classList.add('fa-play')
//         //show bars again hideSong
//         Bars.classList.remove('hidden')
//         liveSong.classList.add('hidden')
//       }
//       else {
//         song.play()
//         play.classList.add('fa-pause')
//         play.classList.remove('fa-play')
//          // Hide bars, show liveSong
//          Bars.classList.add('hidden');
//         liveSong.classList.remove('hidden');

//       }
//     }  
//     let updateProgress;
//     song.addEventListener('play',()=> {
//         updateProgress=setInterval(()=>{
//           progress.value = song.currentTime
//         },500)
//       })

//       song.addEventListener('pause',()=>{
//        clearInterval(updateProgress)
//       })


//    progress.onchange = function(){
//     song.play()
//     song.currentTime = progress.value
//      play.classList.add('fa-pause')
//      play.classList.remove('fa-play')
//    }

//    about.addEventListener('click', (e)=>{
//     e.preventDefault()
//       if (menuBar.style.display === 'block') {
//     menuBar.style.display = 'none';
//     about.style.color='Black'
//   } else {
//     menuBar.style.display = 'block';
    
//   }

//    })